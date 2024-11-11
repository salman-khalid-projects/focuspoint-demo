"use client"
import Image from "next/legacy/image";
import { useRef } from "react";
import useInView from "@/hooks/useInView";

export default function LazyImage({ src, alt, handleClick }) {
  const imageRef = useRef();
  const inView = useInView(imageRef, '100px'); // 100px margin for earlier loading

  return (
      <div ref={imageRef} className="relative bg-gray-800 w-72 h-72 rounded-md">
          {inView && (
              <Image
                  src={src}
                  alt={alt}
                  layout="fill"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  objectFit="cover"
                  quality={60}
                  loading="eager"
                  placeholder="blur"
                  blurDataURL={src}
                  onClick={handleClick}
                  className="cursor-pointer"
              />
          )}
      </div>
  );
}