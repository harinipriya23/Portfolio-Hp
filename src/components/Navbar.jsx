import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experince",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  const [nav, setNav] = useState(false);
  return (
    <div
      className=" capitalize font-rale flex justify-between items-center 
    px-5 py-4 bg-transparent w-full h-20 text-white fixed "
    >
      <div>
        <h1 className="text-4xl font-great ml-3 ">harini priya</h1>
      </div>
      <ul className="md:flex hidden">
        {links.map(({ id, link }) => (
          <li
            className="px-2 lg:px-10  font-medium 
    hover:scale-105 hover:text-slate-300 duration-300 cursor-pointer"
            key={id}>
            {link}
          </li>
        ))}
      </ul>
      <div
        className="md:hidden cursor-pointer z-10 text-slate-200 "
        onClick={() => setNav(!nav)}>
        {nav ? <FaTimes size={30} /> : <IoMenu size={30} />}
      </div>
      {nav && (
        <ul
          className="flex flex-col justify-center items-center
         absolute bg-gradient-to-br from-slate-600 via-slate-800 to-slate-900 
         top-0 left-0 w-full h-screen">
          {links.map(({ id, link }) => (
            <div>
              <li
                key={id}
                className="py-6 text-2xl text-center w-44
    hover:scale-105 hover:text-slate-300 duration-300 
    cursor-pointer"
              >
                {link}
              </li>
              <hr className="h-1 w-11/12" />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};
