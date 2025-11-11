import React from "react";
import { FaGithub, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r bg-[#001a35] text-white py-20 md:py-6 ">
      <div className="fixed bottom-4 left-4 z-50">
        <a
          href="https://wa.me/33773093800"
          className="border-3 border-white outline-3 outline-green-500 block animate-bounce cursor-pointer bg-green-500 hover:bg-green-600 text-white p-1 rounded-full shadow-lg transition-all duration-300"
        >
          <FaWhatsapp className="text-3xl" />
        </a>
      </div>
      {/*  */}
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
            href="https://api.whatsapp.com/send/?phone=01008790584&text&type=phone_number&app_absent=0"
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
