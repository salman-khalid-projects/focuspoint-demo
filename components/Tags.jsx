// "use client";
// import { dirs } from "@/funcs/readGallery.js"
// import { useSearchParams } from "next/navigation";

// export default function Tags() {
//   const searchParams = useSearchParams();

//   return (
//     <div className="w-full flex flex-wrap bg-background-2 p-5 gap-4 justify-center">
      
//         <Link href={`/gallery&category=${dirs}`}>
//           <p className={`py-1 px-5 border rounded-full ${!searchParams.get("category")? "border-main text-main": "border-secondary text-secondary"}`}>All</p>
//         </Link>
//       {dirs.map(dir => (
//         <Link href={`/gallery&category=${dirs}`}>
//           <p className={`py-1 px-5 border rounded-full ${searchParams.get("category") === dir? "border-main text-main": "border-secondary text-secondary"}`}>{dir}</p>
//         </Link>
//       ))}
//     </div>
//   )
// }