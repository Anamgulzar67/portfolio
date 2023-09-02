import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
const About = () => {
  return (
    <>
      <div className="w-80 h-80 bg-fuchsia-600 absolute top-0 left-5 z-10 blur-3xl opacity-30 overflow-hidden rounded-full"></div>
      <div className="w-80 h-80 bg-slate-500 absolute bottom-0 right-0 z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
      <div className=" bg-slate-950 py-20 ">
        <div className="flex flex-col items-center  lg:flex-row">
          <div className="text-center mb-12 px-10  md:text-left w-full lg:w-1/2 md:pr-10 ">
            <h1 className=" text-white text-3xl mx-10 my-4 md:text-4xl font-bold leading-snug mb-4xl  ">
              Hafiza Anam Gulzar
            </h1>
            <p className="  text-white leading-relaxed mt-4  mx-8 mb-5 ">
              Here is anam gulzar,I am frontend developer having experience of
              working with open source projects. I have developed software
              applications using various technologies like
              HTML,CSS,JS,BOOTSTRAP,TAILWIND CSS,REACT.Js, APIs, I have strong
              Knowledge of Programming fundamentals,I possess interpersonal
              skills , enabling me to quickly adapt to new ideas and
              technologies My main objective as software engineering is to
              develop methods and procedures for software development that can
              scale up for large systems and that can be used consistently to
              produce high-quality software at low cost and with a small cycle
              of time.
            </p>

            <div className=" flex  flex-row  my-2 mx-12 pl-2  ">
              <Link to={"https://www.linkedin.com/feed/"}>
                <Button text={"Linkedin"} />
              </Link>
              <div className="flex  flex-row  bg-slate-50 mx-16 rounded-lg h-12">
                <Link to="https://www.linkedin.com/in/anam-gulzar-techie/">
                  <img
                    src="download.png"
                    alt=""
                    width="100px"
                    height="50px"
                    className="rounded-full mx-2 h-12"
                  />
                </Link>
                <Link to="https://www.instagram.com/" className="my-3 mx-4">
                  <img src="downloads.jpg" alt="" width="20px" height="20px"  />
                </Link>
                <Link to="https://web.whatsapp.com/" className="my-2 mx-4 ">
                  <img src="watsap.jpg" alt="" width="30px" height="30px" />
                </Link>
                <Link
                  to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                  className="my-2 mx-4"
                >
                  <img
                    src="download (1).png"
                    alt=""
                    width="30px"
                    height="30px"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 animate-pulse ">
            <img
              src="iPhone-Screen-Time-Parental-Control-App-800x493.webp"
              alt=""
              height="100px"
            />
          </div>
        </div>

        <div className="flex flex-row  md:flex-wrap">
          <div className="text-center  px-20 my-32 mb-12 md:text-left md:w-full md:pr-10 lg:w-full lg:text-center">
            <h1 className=" text-white animate-pulse  text-4xl  md:text-4xl font-bold leading-snug mb-16 lg:text-6xl">
              Contect Info.
            </h1>

            <div className="container ">
              <div className="grid gap-16 sm:grid-cols-1 my-28 md:grid-cols-2 lg:grid-cols-3">
                <div className=" shadow-lg shadow-yellow-500/50 hover:scale-105  border-solid  text-white border-yellow-200  text-center py-20 pt-2 px-5 rounded-2xl ">
                  <h1 className="text-xl font-bold py-4">phone:</h1>
                  <h2 className="text-xl font-bold py-4">03046453405</h2>
                </div>
                <div className=" shadow-lg shadow-yellow-500/50 hover:scale-105  border-solid  text-white border-yellow-200  text-center py-20 pt-2 px-5 rounded-2xl ">
                  <h1 className="text-xl font-bold py-4">Email:</h1>
                  <h2 className="text-xl font-bold py-4">
                    anamgulzar67@gmail.com
                  </h2>
                </div>
                <div className=" shadow-lg shadow-yellow-500/50 hover:scale-105  border-solid  text-white border-yellow-200  text-center py-20 pt-2 px-5 rounded-2xl ">
                  <h1 className="text-xl font-bold py-4">LinkedIn:</h1>
                  <h2 className=" font-bold py-4">
                    <a href="https://www.instagram.com/ranain_noor/">
                      https://www.instagram.com/ranain_noor/
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>



      
      </div>
    </>
  );
};
export default About;
