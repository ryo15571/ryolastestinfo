import ReactTypingEffect from "react-typing-effect"

const Gallery = () => {
    return (
<div>
<div className='text-center font-bold text-3xl text-gray-700 pt-28'>
<ReactTypingEffect text={["อัลบั้ม","Album"]} speed={80} eraseDelay={100} className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-6 text-gray-700" />
</div>
<div className="w-full py-16 px-4">
  <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
<section class="mx-auto w-fit p-12">
  <div className="my-16">
  <div class="w-72 h-fit group">
    <div class="relative overflow-hidden">
      <img class="h-72 w-96" src="./image/teaching.jpg" alt="" />
      <a href="/preteaching" class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button class="bg-black text-white py-2 px-5">ดูอัลบั้ม</button>
      </a>
    </div>
    <h2 class="mt-3 text-xl capitalize">ฝึกสอน</h2>
  </div>
  </div>
</section>
<section class="mx-auto w-fit p-12">
  <div className="my-16">
  <div class="w-72 h-fit group">
    <div class="relative overflow-hidden">
      <img class="h-72 w-96" src="./image/kasetsart.png" alt="" />
      <a href="/kasetsart" class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button class="bg-black text-white py-2 px-5">ดูอัลบั้ม</button>
      </a>
    </div>
    <h2 class="mt-3 text-xl capitalize">ม.เกษตร</h2>
  </div>
  </div>
</section>
</div>
</div>
</div>
)
}
export default Gallery