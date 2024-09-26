"use client";
import { usePathname } from "next/navigation"

function Category() {
  const pathname = usePathname();
  console.log(pathname)

  return (
    <div>
      
    </div>
  )
}

export default Category
