import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="sm:ml-12">
      <main className="py-12 h-screen bg-background-1 relative overflow-hidden rotated_background">
        <Hero/>
      </main>
      <section id="about_section" className="bg-secondary py-32 px-12 flex-center flex-wrap">
        <div className="flex justify-center gap-6 max-md:flex-col max-md:items-center">
          <div className="max-w-[500px]">
            <h1 className="mb-10 text-4xl leading-normal font-normal text-background-1">
              Hi, I'm a professional Photographer based on Alex.
            </h1>
            <p className="about_text">
              A whole life can be taken in one picture !
            </p>
            <p className="about_text">
              You gotta know that every momment, every smile, every tear and every feeling are precious to me.
            </p>
            <p className="about_text">
              Pictures since the beginning of the humanity meant so many things when the cavemen drew himself and his family it means that he existed before.
            </p>
            <p className="about_text">
              When <span className="font-bold">Jean-Léon Gérôme</span> The <i className="font-bold">"Truth coming out of her well"</i> Painting we knew that we are living a lie.
            </p>
            <p className="about_text">
              Pictures that do have the same ability to discribe like paintings but they are easier and more realistic.
            </p>
            <p className="about_text">
            In my site i will show you the power of the meaning in my own pictures I have taken.
            </p>
          </div>
          <div className="relative flex justify-center profile_container w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] min-w-56 min-h-56 flex-shrink-0">
            <Image
              src="/images/profile4.png"
              alt="Profile"
              fill={true}
              className="profile_image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
