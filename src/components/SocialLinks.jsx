import React from "react";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

export const SocialLinks = () => {
  const SocialLinks = [
    {
      id: 1,
      child: (
        <>
          linked in <FaLinkedin />
        </>
      ),
      href: "https://linkedin.com",
    },
    {
      id: 2,
      child: (
        <>
          github <FaGithub />
        </>
      ),
      href: "https://github.com/harinipriya23",
    },
    {
      id: 3,
      child: (
        <>
          mail <IoMailSharp />
        </>
      ),
      href: "mailto:harinipriya200903@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          resume <BsFileEarmarkPerson />
        </>
      ),
      href: "",
      download: true,
    },
  ];
  return (
    <div className="hidden md:flex flex-col left-0 fixed top-[35%] font-rale capitalize ">
      <ul className="text-white flex flex-col gap-2">
        {SocialLinks.map(({ id, child, href, download }) => (
          <li
            className=" justify-between flex
         items-center w-36 h-12 text-[15px] px-5 py-1 ml-[-100px] hover:ml-[-10px]
         hover:rounded-md duration-500 bg-neutral-600 "
            key={id}>
            <a
              className="flex justify-between items-center w-full"
              download={download}
              target="_blank"
              href={href}
              rel="noreferror"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
