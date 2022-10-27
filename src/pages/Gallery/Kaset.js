import ReactTypingEffect from "react-typing-effect"

const Kaset = () => {
    return (
        <div>
        <div className='text-center font-bold text-3xl text-gray-700 pt-28'>
        <ReactTypingEffect text={["มหาวิทยาลัยเกษตรศาสตร์","Kasetsart University"]} speed={80} eraseDelay={100} className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-6 text-gray-700" />
        </div>
        <div className="w-full py-16">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="h-96 w-96 my-12" src="./image/นิสิต.jpg" />
        <img className="h-96 w-96 my-12" src="./image/ปี3.jpg" />
        <img className="h-96 w-96 my-12" src="./image/ปี4.jpg" />
        <img className="h-96 w-96 my-12" src="./image/เรียนจบ.jpg" />
        </div>
        </div>
        </div>
    )
}
export default Kaset