import React, {Fragment} from "react";
import ReactTypingEffect from "react-typing-effect";

const Resume = () => {
    return (
      <div className='py-1'>
        <div className='max-w-[1080px] mt-[-96px] w-full py-32 mx-auto text-center flex flex-col justify-center'>
         <div className='text-center font-bold text-3xl text-gray-700 pt-28'>
          <ReactTypingEffect text={["เรซูเม่","Resume"]} speed={80} eraseDelay={100} className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-6 text-gray-700" />
        <div className="w-8/12 py-12 mx-auto">
        <img  src="./ryoresume.jpg" />
      </div>
          </div>
        </div>
      </div>
    )
}

export default Resume