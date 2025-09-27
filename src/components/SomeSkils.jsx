import React from "react";
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLongArrowAltRight,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function SomeSkils() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "Tailwind", icon: <RiTailwindCssFill className="text-sky-800" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
  ];
  return (
    <div>
      <div className="mb-12">
        <h2 class=" text-3xl sm:text-4xl font-bold text-center my-7 text-gray-800 relative before:content-[''] before:absolute before:w-[250px] before:top-15 before:left-[50%] before:translate-x-[-50%] before:h-[5px] before:bg-blue-400 after:content-[''] after:absolute after:w-[30px] after:h-[30px] after:rounded-[50%] after:border-3 after:border-blue-400 after:top-12 after:bg-white after:left-[50%] after:translate-x-[-50%] ">
          Some Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center bg-white rounded-xl shadow-md w-[150px] p-5 hover:scale-105 transition-transform duration- my-10"
            >
              <span className="text-4xl mb-2">{skill.icon}</span>
              <span className="text-base font-semibold text-gray-700">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        <Link
          to="/skils"
          className=" flex items-center gap-3 text-lg  w-[fit-content] mx-auto border-2 border-blue-400 btn-anmi bg-blue-400 hover:before:bg-white overflow-hidden text-white hover:text-blue-400 font-semibold py-2 px-6 rounded-full shadow-lg "
        >
          All skils <FaLongArrowAltRight className="text-2xl" />
        </Link>
      </div>
    </div>
  );
}

export default SomeSkils;
