import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaSass,
  FaGitAlt,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJquery } from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb";
const Skils = () => {
  const skils = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "Sass", icon: <FaSass className="text-pink-500" /> },
    { name: "Tailwind", icon: <RiTailwindCssFill className="text-sky-800" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "jQuery", icon: <SiJquery className="text-blue-500" /> },
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
    { name: "Vercel", icon: <TbBrandVercel className="text-black" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#00264e] sm:text-3xl sm:tracking-tight lg:text-5xl">
            All Skils
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skils.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-white rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-500 hover:scale-105 border-2 border-gray-200 hover:border-blue-400 shadow-lg hover:shadow-blue-400/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 transform text-4xl transition-transform duration-300 group-hover:scale-110 text-gray-700 group-hover:text-blue-400">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-400 transition-colors duration-300">
                {skill.name}
              </h3>

              <div className="absolute inset-0 rounded-2xl bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>

              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-ping"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-400/10 border border-blue-400/30 rounded-full px-6 py-3 backdrop-blur-sm">
            <span className="h-2 w-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="text-blue-400 text-sm font-medium">
              مستمر في التعلم والتطوير
            </span>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/5 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default Skils;
