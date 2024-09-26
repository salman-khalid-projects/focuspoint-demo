import Link from 'next/link';

export default function SubFooter() {
  return (
    <div className="subFooter overlay sm:ml-12">
      <div className="relative flex flex-col justify-center h-full p-4">
        <h2 className="leading-normal mb-20 font-normal text-2xl text-secondary">
          Need help with professional photography?
          <br />
          Let's work together!
        </h2>
        <Link 
          href="/contact"
          className="bg-[#0000] text-center border-2 border-secondary text-secondary py-4 px-5 rounded-[20px] max-w-32 transition hover:bg-secondary hover:text-background-1"
        >
          Contact Me
        </Link>
      </div>
    </div>
  )
}