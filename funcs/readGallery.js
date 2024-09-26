const fs = require("fs");
const dirs = fs.readdirSync("./public/gallery");
const paths = [];
const subDirs = [];

function getAllImages(directories) {
  if (directories.length === 0) return;
  directories.forEach(dir => {
    const newDir = fs.readdirSync(`./public/gallery/${dir}`);
    newDir.forEach(newDir => {
      if (newDir.endsWith(".jpg") || newDir.endsWith(".png")) {
        paths.push(`${dir}/${newDir}`)
      } else {
        subDirs.push(`${dir}/${newDir}`)
        getAllImages(subDirs);
      }
    });
  })
}

getAllImages(dirs)

module.exports = {dirs, subDirs, paths}