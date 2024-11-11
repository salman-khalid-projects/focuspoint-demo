import Form from "@/components/Form";
import Header from "@/components/Header";
import Image from "next/legacy/image";
import Link from "next/link";

function ContactInfo({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-5">
      <Image
        src={icon}
        alt="name"
        width={25}
        height={25}
      />
      <div className="flex flex-col gap-2">
        <h4 className="sm:text-xl max-sm:text-sm text-secondary">
          {title}
        </h4>
        <p className="sm:text-sm max-sm:text-xs">{desc}</p>
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <section className="sm:ml-12">
      <Header 
        title="Contact Me"
        desc="Get In Touch"
      />

      <div className="grid grid-cols-2 gap-10 md:p-40 max-md:p-8 max-lg:flex flex-col">
        <div className="py-8 flex flex-col gap-4">
          <h1 className="font-normal text-[40px] text-secondary">Contact Us</h1>
          <p className="w-5/6 leading-normal">Stay in touch via our social media channels to receive the latest announcements, news, and updates from us.</p>
          <Form/>
        </div>
        <div className="py-8 flex flex-col gap-4 items-center">
          <h1 className="font-normal text-[40px] text-secondary w-5/6">Contact Info</h1>
          <p className="w-5/6 leading-normal">Always available for freelance work if the right project comes along, Feel free to contact me!</p>
          <div className="flex flex-wrap gap-8 w-5/6">
            <div className="flex flex-col gap-6">
              <ContactInfo
                icon="icons/name.svg"
                title="Name"
                desc="Ismail Salah"
              />
              <ContactInfo
                icon="icons/contact-icon-active.svg"
                title="Call Me"
                desc={<Link href='tel:+97337320462'>+973 3732 0462</Link>}
              />
              <ContactInfo
                icon="icons/email.svg"
                title="Mail Me"
                desc={<Link href='mailto:abdulrahmankhalid797@gmail.com'>abdulrahmankhalid797@gmail.com</Link>}
              />
            </div>
            <div>
              <Image
                src="/images/qr-code.png"
                alt="qr code"
                width={150}
                height={150}
              />
              <div className="mt-5 flex gap-5">
                <Link href="https://www.facebook.com/profile.php?id=100013368224176">
                  <Image
                    src="/social-icons/facebook-green.svg"
                    alt="facebook"
                    width={25}
                    height={25}
                  />
                </Link>
                <Link href="https://twitter.com/AmrAhme65310193?t=JAATQGgS040d062O4ypq8w&amp;s=09">
                  <Image
                    src="/social-icons/x-green.svg"
                    alt="x"
                    width={25}
                    height={25}
                  />
                </Link>
                <Link href="https://www.instagram.com/amrahmad_official/">
                  <Image
                    src="/social-icons/instagram-green.svg"
                    alt="instagram"
                    width={25}
                    height={25}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}