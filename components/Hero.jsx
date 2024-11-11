"use client";

import Image from "next/legacy/image";
import Link from "next/link";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

export default function Hero() {  
  const changingText = useRef();

  useEffect(() => { 
    const typed = new Typed(changingText.current, {
      strings: [
        "Fabulous",
        "Remarkable",
        "Astonishing",
        "Beautiful",
        "Fascinating"
      ],
      typeSpeed: 200,
      backSpeed: 100,
      loop: true,
      },
    )

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative h-[90%] w-[90%] top-[5%] left-[5%] overflow-hidden flex justify-center flex-col">
      <video autoPlay loop muted className="absolute object-cover w-full h-full">
        <source src="video2.mp4" type="video/mp4"/>
      </video>
      <div className="relative w-full h-full bg-[#1118] p-8 pt-32 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center self">
        <h2 className="font-normal text-lg">Hello there I'm</h2>
        <h1 className="text-secondary text-6xl max-sm:text-4xl font-bold mt-2.5 mb-5" style={{ letterSpacing: 2 }}>Ismail Salah</h1>
        <h3 className="text-lg h-16 font-normal leading-normal changingText max-sm:text-base m-0">You are here to see <span ref={changingText}></span>
          <br />
          Pics are taken by my lens
        </h3>
        <Link href="/contact" className="inline-block text-lg py-2.5 px-5 mt-12 mr-2.5 bg-secondary text-background-1 border-2 border-secondary rounded-[20px] transition hover:bg-[#0000] hover:text-secondary">
          Contact me
        </Link>
        <Link href="/gallery" className="inline-block text-lg py-2.5 px-5 sm:mt-12 max-sm:mt-4 mr-2.5 text-secondary border-2 border-secondary rounded-[20px] transition hover:bg-secondary hover:text-background-1">
          Gallery
        </Link>
      </div>
      <button 
        className="bg-slate-50 rounded-full absolute right-5 bottom-5 animate-bounce max-[300px]:hidden"
        onClick={() => {
          window.scroll({
            top: 700
          });
          document.querySelector("#about_section").style.transform = "translateX(0)";
          document.querySelector("#about_section").style.opacity = "1";
        }}
      >
        <Image
          src="/icons/down-arrow.svg"
          alt="arrow"
          width={30}
          height={30}
        />
      </button>
    </div>
  )
}


