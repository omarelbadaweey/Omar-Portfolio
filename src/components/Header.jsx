import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTools,
  FaProjectDiagram,
} from "react-icons/fa";

function Header() {
  return (
    <header className="fixed bottom-[-10px] left-[50%] rounded-2xl overflow-hidden border-3 translate-[-50%] w-[220px]  bg-amber-50 text-blue-400 shadow-lg z-50 ">
      <nav>
        <ul className="flex justify-around items-center  h-[42px]  px-3">
          <NavLink
            to={"/"}
            className="text-blue-400 text-2xl font-medium hover:bg-blue-300 rounded-br-2xl rounded-tl-2xl h-[80%] content-center px-2 hover:text-white transition-colors duration-300"
          >
            <FaHome />
          </NavLink>
          <NavLink
            to={"/projects"}
            className="text-blue-400 text-xl font-medium hover:bg-blue-300 rounded-br-2xl rounded-tl-2xl h-[80%] content-center px-2 hover:text-white transition-colors duration-300"
          >
            <FaProjectDiagram />
          </NavLink>
          <NavLink
            to={"/skils"}
            className="text-blue-400 text-xl font-medium hover:bg-blue-300 rounded-br-2xl rounded-tl-2xl h-[80%] content-center px-2 hover:text-white transition-colors duration-300"
          >
            <FaTools />
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
