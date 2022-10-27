import React from "react";
import ReactTypingEffect from "react-typing-effect";

const AboutMe = () => {
    return (
        <div>
            <div className='text-center font-bold text-3xl text-gray-700 pt-28 '>
<ReactTypingEffect text={["5 สิ่งเกี่ยวกับผม","5 Facts About Me"]} speed={80} eraseDelay={100} className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-6 text-gray-700" />
</div>
        <div className="w-full py-10">
            <div className="w-8/12 py-8 mx-auto">
        <img  src="./ryojung.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
      </div>
      </div>
        <div className="font-bold text-xl px-6">
            แนะนำตัวแบบสั้น ๆ
        </div>
        <div className="px-8 py-5 md:text-lg sm:text-sm text-xs md:py-6">
            - สวัสดีครับ ผมชื่อ เรียว นามสกุล เอี่ยมเรไร อายุ 23 ปี จบการศึกษาระดับปริญญาตรีจาก คณะศึกษาศาสตร์ สาขาพลศึกษา มหาวิทยาลัยเกษตรศาสตร์
        </div>
        <div className="font-bold text-xl px-6">
            เป้าหมายในอนาคต
        </div>
        <div className="px-8 py-5 md:text-lg sm:text-sm text-xs md:py-6">
            - ศึกษาต่อในระดับปริญญาโท ที่ Oregon State
        </div>
        <div className="font-bold text-xl px-6">
            ความสามารถพิเศษ
        </div>
        <div className="px-8 py-5 md:text-lg sm:text-sm text-xs md:py-6">
            - เทควันโด และกีฬาชนิดต่าง ๆ
        </div>
        <div className="font-bold text-xl px-6">
            สายงานที่สนใจ
        </div>
        <div className="px-8 py-5 md:text-lg sm:text-sm text-xs md:py-6">
            - สื่อจำพวกกีฬา นักวิชาการ และครูพลศึกษา
        </div>
        <div className="font-bold text-xl px-6">
            สิ่งที่อยากบอกเพิ่มเติม
        </div>
        <div className="px-8 py-5 md:text-lg sm:text-sm text-xs md:py-6">
            - คนที่จะชนะในท้ายที่สุด คือคนที่ไม่หยุดอยู่กับที่
        </div>
        
        </div>
    );
  };
  export default AboutMe;
