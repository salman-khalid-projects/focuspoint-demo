import Header from "@/components/Header";
import Gallery from "@/components/Gallery";

export default function GalleryPage() {
  return (
    <section className="pb-12 sm:ml-12">
      <Header 
        title="My gallery"
        desc="Best works"
      />

      <Gallery/>
    </section>
  )
}