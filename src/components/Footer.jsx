import React, { useEffect, useState } from "react";
import { FaGithub, FaFacebook, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
    const [showButton, setShowBtn] = useState(false);
  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 150) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };
    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  const backtop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r bg-[#001a35] text-white py-20 md:py-6 ">
    
          {showButton && (
        <button
          onClick={backtop}
          className="cursor-pointer fixed right-5 bottom-5 w-11 h-11 mx-auto flex justify-center items-center bg-blue-400 border-3 border-white outline-3 outline-blue-400 text-2xl rounded-full text-white"
        >
          <FaArrowUp />
        </button>
      )}  {/*  */}
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <span className="font-semibold flex items-center gap-2">
            Copy rights{" "}
            <span className="text-xl">
              <FaRegCopyright />
            </span>{" "}
            reserved to |{" "}
            <span className="uppercase tracking-[1px] border-b-2 border-white text-blue-400 font-bold">
              Omar
            </span>
          </span>
        </div>
        <div className="flex gap-5">
          <a
            href="https://github.com/omarelbadaweey?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 text-2xl transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=201008790584&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 text-2xl transition-colors duration-300"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/?locale=ar_AR"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 text-2xl transition-colors duration-300"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
