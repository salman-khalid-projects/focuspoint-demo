"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function NavLink({ href, title, icon }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="list-none w-full">
      <Link 
        href={href}
        className={`w-full h-12 flex-center p-4 relative text-xl hover:text-secondary transition ${isActive && "text-main bg-background-1"}`}
      >
        <Image 
          src={isActive?`/icons/${icon}-active.svg`:`/icons/${icon}.svg`}
          alt={icon}
          width={25}
          height={25}
          className="absolute left-4"
        />
        {title}
      </Link>
    </li>
  )
}

function NavIcon({ href, icon }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
    <Link href={href} className="block bg-white bg-opacity-0 hover:bg-opacity-20 p-1 rounded">
      <Image
        src={isActive?`/icons/${icon}-active.svg`:`/icons/${icon}.svg`}
        alt={icon}
        width={25}
        height={25}
      />
    </Link>
    </li>
  )
}

export default function Nav() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <>
      {isMenuOpened? (
        <nav className="max-sm:w-56 z-50 w-80 min-h-screen bg-background-2 overflow-auto flex flex-col items-center py-20 gap-20 fixed">
        <button 
          className="absolute left-4 top-4"
          onClick={() => setIsMenuOpened(false)}
        >
          <Image
            src="/icons/close-icon.svg"
            alt="close"
            width={30}
            height={30}
          />
        </button>
      <Link href="/" className="select-none">
        <Image 
          src="logo.svg"
          alt="logo"
          width={120}
          height={120}
        />
      </Link>

      <ul className="w-full">
        <NavLink 
          href="/"
          title="Home"
          icon="home-icon"
        /> 
        <NavLink 
          href="/gallery"
          title="Gallery"
          icon="photo-library-icon"
        /> 
        <NavLink 
          href="/about"
          title="About me"
          icon="info-icon"
        /> 
        <NavLink 
          href="/contact"
          title="Contact me"
          icon="contact-icon"
        /> 
      </ul>
      </nav>
      ): (
        <nav className="z-50 fixed w-12 sm:min-h-screen max-sm:h-12 max-sm:w-full bg-background-2 flex flex-col sm:items-center pt-2 max-sm:p-2 gap-56">
        <button 
          onClick={() => setIsMenuOpened(true)}
        >
          <Image
            src="/icons/menu-icon.svg"
            alt="menu"
            width={30}
            height={30}
          />
        </button>

        <ul className="flex flex-col gap-5 max-sm:hidden">
          <NavIcon
            href="/"
            icon="home-icon"
          />
          <NavIcon
            href="/gallery"
            icon="photo-library-icon"
          />
          <NavIcon
            href="/about"
            icon="info-icon"
          />
          <NavIcon
            href="/contact"
            icon="contact-icon"
          />
        </ul>
        </nav>
      )}
    </>
  )
}


