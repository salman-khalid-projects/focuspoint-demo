"use client"
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Tags from "@/components/Tags";

export default function GalleryPage() {
  return (
    <section className="pb-12 sm:ml-12">
      <Header 
        title="My gallery"
        desc="Best works"
      />

      <Tags/>

      <Gallery/>
    </section>
  )
}