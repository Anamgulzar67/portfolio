import React from "react";

const Project = () => {
  return (
    <>
    <div
          className="w-80 h-80 bg-teal-800 absolute top-0 left-5 z-10 blur-2xl opacity-30 overflow-hidden rounded-full"
        ></div>
        <div
          className="w-80 h-80 bg-rose-400 absolute bottom-0 right-0 z-10 blur-2xl opacity-30 overflow-hidden rounded-full"
        ></div>
      <div className="w-80 h-80 bg-fuchsia-500 absolute top-0 -left-5 z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
      <div className="w-80 h-80 bg-orange-400 absolute bottom-0 right-0 z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
      <div className=" bg-slate-950 py-20">
        <h1 className=" text-white text-3xl animate-pulse text-center md:text-4xl font-bold leading-snug mb-4xl lg:text-5xl  ">
          Projects
        </h1>
        {/* project 1 */}
        <div className="flex flex-col items-center w-3/4 mx-auto my-24  lg:flex-row">
          <div className="text-center text-2xl mb-12 px-10 mx-auto md:text-left w-full lg:w-1/2 md:pr-10 ">
            <p className="  text-white leading-relaxed mt-8  mb-5 ">
             Front page of website that based on bootstrap technologies containing <strong> Navbar,craousal,Cards,forms,footer, <br/>buttons,animations etc</strong>
            </p>
          </div>
          <div className="md:w-1/2 mx-16 ">
            <img
              className="transform transion-all hover:skew-x-6 border-2  rounded-lg   hover:scale-125  duration-500 "
              src="m.png"
              alt=""
              height="100px"
              width="500px"
            />
          </div>
        </div>
        {/* project 2 */}
        <div className="flex flex-col items-center w-3/4 mx-auto  lg:flex-row">
          <div className="md:w-1/2  ">
            <img  className=" transform transion-all hover:skew-x-6 border-2  rounded-lg duration-500   hover:scale-125" src="c.png" alt="" height="100px" width="400px" />
          </div>
          <div className="text-center mb-12 px-10 text-2xl md:text-left w-full lg:w-1/2 md:pr-10 ">
            <p className="  text-white leading-relaxed mt-4  mb-5 ">
              Fully responsive web page layout that build on different technologiesand like <strong>html,css,js,react.js(Routing,use of hooks,)</strong> and have many functinalities,we can <strong>change color of website, count number of text in website , rendering of different sections</strong> and many more. 
            </p>
          </div>
        </div>

        {/* project 3*/}
        <div className="flex flex-col items-center w-3/4 mx-auto my-24  lg:flex-row">
          <div className="text-center mb-12 px-10 text-2xl md:text-left w-full lg:w-1/2 md:pr-10 ">
            <p className="  text-white leading-relaxed mt-4  mb-5 ">
              Responsive website of banking system that  made using HTMl,CSS,Js,Tailwind CSS. Website have many sections like navbar,about,paymentchecker,introduction of management,branches,etc
            </p>
          </div>
          <div className="md:w-1/2 mx-16 ">
            <img
              className="transform transion-all hover:skew-x-6 border-2 duration-500  rounded-lg   hover:scale-125"
              src="s.png"
              alt=""
              height="100px"
              width="500px"
            />
          </div>
        </div>
        {/* project 4 */}
        <div className="flex flex-col items-center w-3/4 mx-auto  lg:flex-row">
          <div className="md:w-1/2  ">
            <img className="transform transion-all hover:skew-x-6 border-2 rounded-lg   duration-500  hover:scale-125" 
            src="f.png" alt="" height="100px" width="400px" />
          </div>
          <div className="text-center mb-12 px-10 text-2xl md:text-left w-full lg:w-1/2 md:pr-10 ">
            <p className="  text-white leading-relaxed mt-4  mb-5 ">
              Layout of COMPUETR HUB website made that have functionality of adding computer items for sale,you can check how many stock are available.Technologies that are used ini it,is HTML,CSS,JS
            </p>
          </div>
        </div>
        {/* project5 */}
        <div className="flex flex-col items-center w-3/4 mx-auto my-24  lg:flex-row">
          <div className="text-center mb-12 px-10 text-2xl md:text-left w-full lg:w-1/2 md:pr-10 ">
            <p className="  text-white leading-relaxed mt-4  mb-5 ">
              Cloneing of grocery store website,that have also some functionalities like add to cart and calculate number of items to purchaase ,remove items through them.
            </p>
          </div>
          <div className="md:w-1/2 mx-16 ">
            <img
              className="transform transion-all hover:skew-x-6 border-2 rounded-lg  duration-500   hover:scale-125" 
              src="n.png"
              alt=""
              height="100px"
              width="500px"
            />
          </div>
        </div>
        {/* project 6 */}
        <div className="flex flex-col items-center w-3/4 mx-auto  lg:flex-row">
          <div className="md:w-1/2  ">
            <img className="transform transion-all hover:skew-x-6 border-2  rounded-lg duration-500   hover:scale-125" 
            src="p.png" alt="" height="100px" width="400px" />
          </div>
          <div className="text-center mb-12 px-10 text-2xl md:text-left w-full lg:w-1/2 md:pr-10 ">
            <p className="  text-white leading-relaxed mt-4  mb-5 ">
             Personal Portfolio Website
             It based on all technologies mentioned in skill portion            </p>
          </div>
        </div>
        {/* project7 */}
        <div className="flex flex-col items-center w-3/4 mx-auto my-24  lg:flex-row">
          <div className="text-center mb-12 px-10 text-2xl md:text-left w-full lg:w-1/2 md:pr-10 ">
            <p className="  text-white leading-relaxed mt-4  mb-5 ">
             Basic project of bignner level that have all functionalities of Basic calculator like add ,subtract,multiply,divide,clear etc.HTML,CSS and Js are used in it.
            </p>
          </div>
          <div className="md:w-1/2 mx-16 ">
            <img
            className="transform transion-all hover:skew-x-6 border-2 rounded-lg duration-500  hover:scale-110" 
              src="cal.png"
              alt=""
              height="40px"
              width="400px"
            />
          </div>
        </div>
        {/* project7 */}
        <div className="flex flex-col items-center w-3/4 mx-auto  lg:flex-row">
          <div className="md:w-1/2  ">
            <img className="transform transion-all hover:skew-x-6 border-2 rounded-lg  duration-500  hover:scale-110" 
            src="e.png" alt="" height="100px" width="400px" />
          </div>
          <div className="text-center mb-12 px-10 text-2xl md:text-left w-full lg:w-1/2 md:pr-10 ">
            <p className="  text-white leading-relaxed mt-4  mb-5 ">
           Game project of bignner level ,You can use random number before start sketching r choose black color,you have to choose size of box init.HTML,CSS and Js are used in it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
