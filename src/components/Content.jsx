import React from "react";
import img from "./images/html.jpg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
export const Content = () => {
  return (
    <div name="home" className="h-screen w-full font-rale bg text-white">
      <div
        className="max-w-screen-lg mx-auto md:mx-14 lg:mx-auto  flex flex-col
         items-center justify-center h-full px-4 md:flex-row"
      >
        <div className="mt-40 md:mt-5 ">
          <h1 className="capitalize px-5 text-5xl md:text-6xl  font-extrabold ">
            i'm a <span>frontend developer</span>
          </h1>
          <p className="capitalize px-6 md:px-2 text-[18px] md:text-xl mt-5 font-semibold text-neutral-300">
            as a beginner frontend developer, i am enthusiastic about creating
            visually appealing and user-friendly web interfaces.i am commited to
            writing clean, efficient code and continually improving my skills
            through hands-on projects and collaboration.
          </p>
          <div className="px-6 mt-5">
            <button
              className=" flex hover:scale-95 items-center duration-500 group bg-gradient-to-br from-cyan-500 via-cyan-800 to-cyan-950 capitalize tracking-wider
           text-[15px] px-5 py-2 ring-2 ring-cyan-600 hover:ring-cyan-500 rounded-lg "
            >
              portfolio
              <MdKeyboardDoubleArrowRight className="ml-2 duration-500 size-5 group-hover:rotate-90" />
            </button>
          </div>
        </div>
        <div className="flex m-5 p-2 md:w-full h-60 justify-center items-center ">
          <img src={img} className=" h-full rounded-md w-full" />
        </div>
      </div>
    </div>
  );
};
