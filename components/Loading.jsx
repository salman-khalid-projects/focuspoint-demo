export default function Loading() {
  return (
    <div className="w-screen h-screen fixed left-0 top-0 z-50 flex items-center justify-center bg-background-1">
      <div className="w-16 h-16 relative">
        <div className="bg-main rounded-full w-full h-full absolute left-0 top-0 opacity-60 loading_animation"/>
        <div className="bg-main rounded-full w-full h-full absolute left-0 top-0 opacity-60 loading_animation"/>
      </div>
    </div>
)}