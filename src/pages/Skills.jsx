import React from "react";
// import * as React from 'react';
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
// import Button from "../components/Button";

const Skills = () => {
  return (
    <>
    {/* <div
          className="w-80 h-80 bg-fuchsia-800 absolute top-0 left-5 z-10 blur-2xl opacity-30 overflow-hidden rounded-full"
        ></div>
        <div
          className="w-80 h-80 bg-rose-400 absolute bottom-0 right-0 z-10 blur-2xl opacity-30 overflow-hidden rounded-full"
        ></div> */}
      <div className="py-20 bg-slate-950 ">
        <div className="flex flex-row sm:items-center sm:w-full md:flex-row lg:w-full">
          <div className="sm:text-center sm:mx-auto my-10  md:text-center md:w-full md:pr-2 lg:text-center lg:w-full lg:items-center">
            <h1 className=" text-white sm:text-3xl sm:py-4 animate-pulse text-center md:text-4xl font-bold leading-snug mb-4xl lg:text-5xl">
               Skills 
            </h1>
            <div className="flex flex-row py-10 sm:gap-5 sm:my-10 md:flex md:flex-wrap md:gap-5 md:my-20 lg:gap-5 lg:mx-auto lg:my-20 ">
              

              <Stack className ="flex flex-row mx-56 flex-wrap gap-6 " direction="row" spacing={2}>
              <Chip className="bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:rotate-45 hover:scale-150  ease-in-out duration-1000"
              avatar={<Avatar>H</Avatar>} 
              label={<span className="text-gray-50 mx-4 text-2xl ">HTML</span>}  
              variant="outlined"/>
                <Chip className="shadow-lg shadow-red-500 md:shadow-xl md:shadow-red-500 hover:scale-150  hover:rotate-45 ease-in-out duration-1000"
              avatar={<Avatar>C</Avatar>} 
              label={<span className="text-gray-50 mx-4 text-2xl">CSS</span>}  
              variant="outlined"/>  <Chip className="bg-cyan-500 shadow-lg hover:scale-150  shadow-cyan-500/50 hover:rotate-45 ease-in-out duration-1000"
              avatar={<Avatar>J</Avatar>} 
              label={<span className="text-gray-50 mx-4 text-2xl">JAVASCRIPT</span>}  
              variant="outlined"/>  <Chip className="shadow-lg shadow-red-500 md:shadow-xl hover:scale-150  md:shadow-red-500 hover:rotate-45 ease-in-out duration-1000"
              avatar={<Avatar>B</Avatar>} 
              label={<span className="text-gray-50 mx-4 text-2xl">BOOTSTRAP</span>}  
              variant="outlined"/>  <Chip className="bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:scale-150  hover:rotate-45 ease-in-out duration-1000"
              avatar={<Avatar>TC</Avatar>} 
              label={<span className="text-gray-50 mx-4 text-2xl">Tailwind CSS</span>}  
              variant="outlined"/>  <Chip className="shadow-lg shadow-red-500 md:shadow-xl hover:scale-150 md:shadow-red-500 hover:rotate-45 ease-in-out duration-1000"
              avatar={<Avatar>R</Avatar>} 
              label={<span className="text-gray-50 mx-4 text-2xl">React.js</span>}  
              variant="outlined"/>  <Chip className="bg-cyan-500 shadow-lg hover:scale-150  shadow-cyan-500/50 hover:rotate-45 ease-in-out duration-1000"
              avatar={<Avatar>T</Avatar>} 
              label={<span className="text-gray-50 mx-4 text-2xl">Typescript</span>}  
              variant="outlined"/> 
              <Chip className="shadow-lg shadow-red-500 md:shadow-xl md:shadow-red-500 hover:scale-150 hover:rotate-45 ease-in-out duration-1000"
              avatar={<Avatar>G</Avatar>} 
              label={<span className="text-gray-50 mx-4 text-2xl">Github</span>}  
              variant="outlined"/>  
              </Stack>
            </div>





            <div className="text-center my-10 mb-12 md:text-center  md:pr-10">
            <h3 className="text-white sm:text-2xl sm:py-4 animate-pulse text-center md:text-3xl font-bold leading-snug mb-4xl lg:text-4xl">
              <ul>
                <li className="py-3">Hafiz-e-Quran.</li>
                <li className="py-3">Typing speed 30 wpm.</li>{" "}
                <li className="py-3">Ability to use Inpage.</li>{" "}
                <li className="py-3">Art desinings</li>{" "}
                <li className="py-3">Ability to communicate with people.</li>
              </ul>
            </h3>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
export default Skills;
