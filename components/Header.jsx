export default function Header({ title, desc }) {
  return (
    <div className="header overlay">
      <div className="  relative">
        <h1 className="text-[40px] mt-5 mb-10 font-bold text-secondary">
          {title}
        </h1>
        <p className="text-xl text-text relative my-5 text_line">
          {desc}
        </p>
      </div>
    </div>
  )
}