import fs from 'fs';
import path from 'path';

function getAllPaths(dirPath = '', basePath = path.join("public", "gallery"), category = null, album = null) {
  const absolutePath = path.join(process.cwd(), basePath, dirPath);
  const entries = fs.readdirSync(absolutePath);
  let paths = [];

  entries.forEach((entry) => {
    const fullPath = path.join(absolutePath, entry);
    const relativePath = path.join("gallery", dirPath, entry);
    const stat = fs.statSync(fullPath);
    const currentDepth = dirPath ? dirPath.split(path.sep).length : 0;

    if (stat.isDirectory()) {
      if (currentDepth === 0) {
        paths.push({ type: 'category', name: entry, path: relativePath });
        paths = paths.concat(getAllPaths(path.join(dirPath, entry), basePath, entry, null));
      } else if (currentDepth === 1) {
        paths.push({ type: 'album', name: entry, path: relativePath, category });
        paths = paths.concat(getAllPaths(path.join(dirPath, entry), basePath, category, entry));
      } else {
        paths.push({ type: 'directory', name: entry, path: relativePath, category });
        paths = paths.concat(getAllPaths(path.join(dirPath, entry), basePath, category, album));
      }
    } else {
      paths.push({
        type: 'file',
        name: entry,
        path: relativePath,
        category,
        ...(album && { album })
      });
    }
  });

  return paths;
}

let allImages = getAllPaths();

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "18", 10);

  const start = (page - 1) * limit;
  const end = start + limit;
  const images = allImages.slice(start, end); // Replace this with a database query if needed

  return new Response(JSON.stringify({ images }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
