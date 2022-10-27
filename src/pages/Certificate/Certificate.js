import React from "react";
import ReactTypingEffect from "react-typing-effect";
const Certificate = () => {
    return (
        <div>
        <div className='text-center font-bold text-3xl text-gray-700 pt-28'>
<ReactTypingEffect text={["ประกาศนียบัตร และ ใบรับรอง","Certificate"]} speed={80} eraseDelay={100} className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-6 text-gray-700" />
</div>
        <div className='py-12'>
        <div className="w-8/12 py-12 mx-auto">
        <img  src="./ใบจบ.jpg" />
      </div>
        </div>
        </div>
    );
  };
  export default Certificate;