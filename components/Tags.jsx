"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Tags() {
  const searchParams = useSearchParams();

  return (
    <Link href={`/`}>
      <p className="py-1 px-5 border rounded-full w-fit">Animals</p>
    </Link>
  )
}