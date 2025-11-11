import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <section>
      <div className=" pb-15 pt-20 px-5 w-[85%] mx-auto items-center flex flex-col-reverse lg:flex-row justify-between">
        <div className="text-center lg:text-start p-3 mt-4 lg:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 capitalize mb-7">
            my <span className="text-[#00264e]">portfolio</span>
          </h2>

          <p className="text-lg font-semibold text-gray-600 capitalize">
            hello, my name is
          </p>
          <h2 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-400 capitalize my-2">
            omar <span className="text-[#00264e]">elbadawey</span>
          </h2>
          <p className="text-md sm:text-xl font-semibold text-gray-600">
            I'm a <span className="text-blue-400">Front-End</span> Developer 💻
          </p>
          <div className="flex flex-col md:flex-row gap-5 mt-8 mx-[auto] lg:mx-[0_0] w-[fit-content]">
            <a href="/CV.pdf" 
              className="cursor-pointer px-3 py-1 animate-up bg-blue-400 text-xl capitalize rounded-2xl border-2 border-blue-400 text-white font-semibold hover:bg-amber-50 hover:text-blue-400 transition-all duration-[.3s]"
            >
              View My cv
            </a>
            <Link
              to="/projects"
              className="animate-down px-3 py-1 bg-blue-400 text-xl capitalize rounded-2xl border-2 border-blue-400 text-white font-semibold hover:bg-amber-50 hover:text-blue-400 transition-all duration-[.3s]"
            >
              my projects
            </Link>
          </div>
        </div>

        <div className="animate-logo relative h-[250px] md:h-[300px] w-[250px] md:w-[300px] rounded-full overflow-hidden group">
          <img
            src="./logo.jpg"
            alt="logo"
            className="w-full group-hover:scale-[1.3] group-hover:translate-y-[50px] transition-all duration-[.3s] object-cover "
          />
          <div className="rotate-logo"></div>
        </div>
      </div>
      <div className="mb-20">
        <SocialLinks />
      </div>
    </section>
  );
};

export default Hero;
