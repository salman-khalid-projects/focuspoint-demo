import { paths } from "@/funcs/readGallery.js"
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Gallery({ category = null }) {
  const imgs = category === null? paths: paths.filter(path => {
    return path.startsWith(category);
  })

  return (
    <div className="p-20 w-full gallery_grid flex-col max-sm:flex max-sm:p-2">
      {imgs.map(path => {
        const img = require(`@/public/gallery/${path}`);
        return (
          <div className="relative">
            <Link href={`/gallery/${path}`} className="h-72 w-full block">
            <Suspense fallback={<div className="w-full h-full bg-secondary" />}>
              <Image
                src={img}
                alt="image"
                className="object-cover h-72 w-full rounded-md"
              />
            </Suspense>
            </Link>
          </div>
        )
      })}
    </div>
  )
}