import React , {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"


function Navbar() {
    const [nav, setNav] = useState (false)

    const handleNav = () => {
      setNav(!nav)
    }

  return (
    <div className="bg-gray-500 fixed w-full z-40">
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-gray-300">
        <h1 className="w-full text-3xl font-bold text-gray-300">
          <a href="/">RYO EIAM</a></h1>
        <ul className="font-light text-gray-300 hidden md:flex">
            <li className="p-6 hover:bg-slate-800">
             <a href="/aboutme"> About Me</a></li>
             <li className="p-6 hover:bg-slate-800">
             <a href="/resume"> Resume</a></li>
             <li className="p-6 hover:bg-slate-800">
             <a href="/favsong"> Favorite Song</a></li>
             <li className="p-6 hover:bg-slate-800">
             <a href="/certificate"> Certificate</a></li>
             <li className="p-6 hover:bg-slate-800">
             <a href="/gallery"> Gallery</a></li>
             <li className="p-6 hover:bg-slate-800">
             <a href="/grade"> Grade</a></li>
        </ul>


        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} className="cursor-pointer"/> : <AiOutlineMenu size={20} className="cursor-pointer" />}
        </div>
        <div className={nav ? "fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-gray-600 ease-in-out duration-500 md:hidden" : "fixed left-[-100%]"}>
        <h1 className="w-full text-3xl font-bold text-gray-300 px-5 py-5">
          <a href="/">RYO EIAM</a></h1>
          <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-100 hover:bg-slate-800">
             <a href="/aboutme"> About Me</a></li>
             <li className="p-4 border-b border-gray-100 hover:bg-slate-800">
             <a href="/resume"> Resume</a></li>
             <li className="p-4 border-b border-gray-100 hover:bg-slate-800">
             <a href="/favsong"> Favorite Song</a></li>
             <li className="p-4 border-b border-gray-100 hover:bg-slate-800">
             <a href="/certificate"> Certificate</a></li>
             <li className="p-4 border-b border-gray-100 hover:bg-slate-800">
             <a href="/gallery"> Gallery</a></li>
             <li className="p-4 hover:bg-slate-800">
             <a href="/grade"> Grade</a></li>
          </ul>
        </div>
     </div>
     </div>
     
  );
}

export default Navbar;