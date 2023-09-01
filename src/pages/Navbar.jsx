import React from "react";
import { useState } from "react";
import{AiOutlineClose,AiOutlineMenu} from "react-icons/ai";
import { Link } from "react-router-dom";
// import Button from "../components/Button";
const Navbar = () => {
  const [nav,setNav]=useState(false);
  const handleNav=()=>{
   setNav(!nav)
  }
  return (
    <>
    
      <nav className=" p-3 flex justify-between items-center bg-slate-950 text-white tracking-wider ">
        <div className="w-20 py-5 text-orange-400 font-bold text-3xl">
          <Link to="/">
            <span className="text-white">Anam's</span>Resume 
          </Link>
        </div>
        <div className="flex justify-between items-center mx-10 h-24 max-v-[1240px]">
          <ul className="  hidden md:flex space-x-6">
            <li className="hover:text-orange-600 p-3 text-xl duration-200">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-orange-600 p-3 text-xl duration-200">
              <Link to="skills">Skills</Link>
            </li>
            
            <li className="hover:text-orange-600 p-3 text-xl  duration-200">
              <Link to="achievment">Achivements</Link>
            </li>
            <li className="hover:text-orange-600 p-3  text-xl duration-200">
              <Link to="project">Projects</Link>
            </li>
            <li className="hover:text-orange-600 p-3  text-xl duration-200">
              <Link to="create-notes">Create Notes</Link>
            </li>
            <li className="hover:text-orange-600 p-3  text-xl duration-200">
              <Link to="read-notes">Read Notes</Link>
            </li>
            
          </ul>
          </div>
          <div onClick={handleNav} className="block md:hidden ">
           
            {!nav ?<AiOutlineClose className="-z-50 text-white" size={20}/>:<AiOutlineMenu className="z-10 text-white" size={20}/>}
          <div className={!nav ?'fixed left-0 top-0 w-[92%]  ease-in-out duration-500':'fixed left-[-100%]  '}>
            
          
            <ul className="  z-10 bg-slate-950 py-20 uppercase lg:hidden ">
            <li className="hover:text-orange-600 p-3 duration-200">
              <Link to="/">Home</Link>
                

            </li>
            <li className="hover:text-orange-600 p-3 duration-200">
              <Link to="skills">Skills</Link>
            </li>
            <li className="hover:text-orange-600 p-3 duration-200">
              <Link to="achivements">Achivements</Link>
            </li>
            <li className="hover:text-orange-600 p-3 duration-200">
              <Link to="create-notes">Create Notes</Link>
            </li>
            <li className="hover:text-orange-600 p-3 duration-200">
              <Link to="read-notes">Read Notes</Link>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
