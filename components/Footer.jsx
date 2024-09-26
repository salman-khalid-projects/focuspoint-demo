import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background-1 p-10 sm:ml-12">
      <div>
        <div className="flex justify-around flex-wrap gap-5">
          <div className="flex flex-col gap-5">
            <Image 
              src="logo.svg"
              alt="logo"
              width={50}
              height={50}
            />
            <p>
              I'm not special ,but my goal is being special at everything,
              <br />
              Which makes me glow anywhere.
            </p>
            <div className="flex gap-5">
              <Link
                href="https://www.facebook.com/profile.php?id=100013368224176"
                target="_blank"
                title="Facebook"
              >
                <Image
                  src="/social-icons/facebook.svg"
                  alt="facebook"
                  width={20}
                  height={20}
                />
              </Link>
              <Link
                href="https://x.com/AmrAhme65310193?t=JAATQGgS040d062O4ypq8w&s=09"
                target="_blank"
                title="Twitter"
              >
                <Image
                  src="/social-icons/x.svg"
                  alt="x"
                  width={20}
                  height={20}
                />
              </Link>
              <Link
                href="https://www.instagram.com/amrahmad_official/"
                target="_blank"
                title="Instagram"
              >
                <Image
                  src="/social-icons/instagram.svg"
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-evenly gap-10">
            <ul className="text-start">
              <h4 className="my-4 text-lg font-bold text-secondary">Links</h4>
              <li className="block py-2 transition hover:text-main">
                <Link href="/">Home Page</Link>
              </li>
              <li className="block py-2 transition hover:text-main">
                <Link href="/about">About Me</Link>
              </li>
              <li className="block py-2 transition hover:text-main">
                <Link href="/gallery">Gallery</Link>
              </li>
              <li className="block py-2 transition hover:text-main">
                <Link href="/contact">Contact Me</Link>
              </li>
            </ul>
            <ul className="producers">
              <h4 className="text-lg my-4 font-bold text-secondary">Producers</h4>
              <li className="py-1 text-secondary">Devoloper :</li>
              <li className="py-1">
                <Link href="https://www.facebook.com/kareem1911" target="_blank">
                  Karim Mohamed
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="text-lg text-secondary m-0 text-center py-4">
          <p>
            Copyright &#169; <span>2024</span> All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
