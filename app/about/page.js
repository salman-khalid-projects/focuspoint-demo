import Header from '@/components/Header'
import Image from "next/legacy/image"
import profilePic from "@/public/images/profile7.png"

function Card({ number, text }) {
  return (
    <div className="flex flex-col justify-center items-center bg-[#eee] w-80 h-56 rounded-lg box_shadow hover:border-2 hover:border-main transition-[.3s]">
      <p>More Than</p>
      <h1 className="my-4 text-center text-4xl font-normal">{number}</h1>
      <p>{text}</p>
    </div>
  )
}

export default function About() {
  const textStyle = "text-lg text-text leading-normal my-4";

  return (
    <section className="sm:ml-12">
      <Header
        title="About me"
        desc="Who i am"
      />

      <div className="py-12 sm:px-40 max-sm:p-12 w-full flex flex-col justify-center">
        <div className="grid grid-cols-2 justify-center gap-5 max-lg:flex flex-col">
          <div className="about_image relative p-5">
            <Image
              src={profilePic}
              alt="profile"
            />
          </div>
          <div className="p-5 text-secondary">
            <h1 className="text-[40px] font-bold mb-8">Ismail Salah</h1>
            <i className={`${textStyle} font-bold`}>"God doesn't do anything bad for his servants"</i>
            <p className={textStyle}>Hi, this is my Quote which helps me to survive and live in this world while being satisfied</p>
            <p className={textStyle}>you gotta know that every picture i have captured it i imagined it first</p>
            <p className={textStyle}>this how life works imagine , prepare, and do it.</p>
            <p className={textStyle}>Founding a real love was hard and harsh to me but now i got a real love</p>
            <p className={textStyle}>it is memories and putting it into a picture to bring it back in my imagination</p>
            <p className={textStyle}>it always makes life better and more beautiful.</p>
            <p className={textStyle}>My last words are advising you to pray and enjoy in this world</p>
            <p className={textStyle}>and don't forget that pray comes before enjoy</p>
          </div>
        </div>
        <div className="bg-background-2 rounded-lg text-center p-1.5 mt-12 w-full">
          <q className="text-3xl my-5 text-secondary block max-md:text-[3.5vw]"> You don't take a photograph, you make it </q>
          <p className="text-xl mb-5 max-sm:text-xs">- Ansel Adams</p>
        </div>
      </div>

      <div className="my-12 p-12 bg-secondary text-background-1 flex flex-col gap-10">
        <h1 className="text-3xl font-normal text-center">Our Awesome Stats</h1>
        <div className="w-full flex flex-wrap flex-grow justify-center gap-20">
          <Card 
            number={2000}
            text="Photos Taken"
          />
          <Card 
            number={50}
            text="Places Captured"
          />
          <Card 
            number={200}
            text="Happy People"
          />
        </div>
      </div>
    </section>
  )
}