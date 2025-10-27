import React, { useState } from "react";
import Transition from "../components/Transition";
import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";

const projectsData = [
  {
    id: 1,
    title: "Simple-booking",
    category: "CSS",
    link: "https://omarelbadaweey.github.io/Simple-booking/",
    git: "https://github.com/omarelbadaweey/Simple-booking",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
    ],
  },
  {
    id: 2,
    title: "cources academy",
    category: "JS",
    link: "https://nine-bay.vercel.app/",
    git: "https://github.com/omarelbadaweey/course-AC",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
      {
        icon: <RiTailwindCssFill />,
        lang: "tailwind",
        color: "text-sky-400",
        hover: "hover:text-sky-400",
      },
      {
        icon: <IoLogoJavascript />,
        lang: "java script ",
        color: "text-yellow-400",
        hover: "hover:text-yellow-400",
      },
    ],
  },
  {
    id: 3,
    title: "lap-store",
    category: "React",
    link: "https://lap-store-dk1q.vercel.app/",
    git: "https://github.com/omarelbadaweey/LAP-STORE",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
      {
        icon: <RiTailwindCssFill />,
        lang: "tailwind",
        color: "text-sky-400",
        hover: "hover:text-sky-400",
      },
      {
        icon: <IoLogoJavascript />,
        lang: "java script ",
        color: "text-yellow-400",
        hover: "hover:text-yellow-400",
      },
      {
        icon: <FaReact />,
        lang: "React js ",
        color: "text-blue-700",
        hover: "hover:text-blue-700",
      },
    ],
  },
  {
    id: 4,
    title: "Tailwind-Css",
    category: "JS",
    link: "https://omarelbadaweey.github.io/Tailwind-Css/",
    git: "https://github.com/omarelbadaweey/Tailwind-Css",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
      {
        icon: <RiTailwindCssFill />,
        lang: "tailwind",
        color: "text-sky-400",
        hover: "hover:text-sky-400",
      },
      {
        icon: <IoLogoJavascript />,
        lang: "java script ",
        color: "text-yellow-400",
        hover: "hover:text-yellow-400",
      },
    ],
  },
  {
    id: 5,
    title: "badawey-store",
    category: "JS",
    link: "https://badawey-store.vercel.app/",
    git: "https://github.com/omarelbadaweey/Badawey-Store",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
      {
        icon: <RiTailwindCssFill />,
        lang: "tailwind",
        color: "text-sky-400",
        hover: "hover:text-sky-400",
      },
      {
        icon: <IoLogoJavascript />,
        lang: "java script ",
        color: "text-yellow-400",
        hover: "hover:text-yellow-400",
      },
    ],
  },
  {
    id: 6,
    title: "omar-ecommece",
    category: "React",
    link: "https://omar-ecommece.vercel.app/",
    git: "https://github.com/omarelbadaweey/Omar-Ecommece",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
      {
        icon: <RiTailwindCssFill />,
        lang: "tailwind",
        color: "text-sky-400",
        hover: "hover:text-sky-400",
      },
      {
        icon: <IoLogoJavascript />,
        lang: "java script ",
        color: "text-yellow-400",
        hover: "hover:text-yellow-400",
      },
      {
        icon: <FaReact />,
        lang: "React js ",
        color: "text-blue-700",
        hover: "hover:text-blue-700",
      },
    ],
  },
  {
    id: 7,
    title: "Anime",
    category: "CSS",
    link: "https://omarelbadaweey.github.io/-Anime/",
    git: "https://github.com/omarelbadaweey/-Anime",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
    ],
  },
  {
    id: 8,
    title: "paryer-timer",
    category: "React",
    link: "https://paryer-timer.vercel.app/",
    git: "https://github.com/omarelbadaweey/Paryer-timer",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
      {
        icon: <RiTailwindCssFill />,
        lang: "tailwind",
        color: "text-sky-400",
        hover: "hover:text-sky-400",
      },
      {
        icon: <IoLogoJavascript />,
        lang: "java script ",
        color: "text-yellow-400",
        hover: "hover:text-yellow-400",
      },
      {
        icon: <FaReact />,
        lang: "React js ",
        color: "text-blue-700",
        hover: "hover:text-blue-700",
      },
    ],
  },
  {
    id: 9,
    title: "dash-board",
    category: "React",
    link: "https://dash-board-one-delta.vercel.app/",
    git: "https://github.com/omarelbadaweey/Dash-Board",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
      {
        icon: <RiTailwindCssFill />,
        lang: "tailwind",
        color: "text-sky-400",
        hover: "hover:text-sky-400",
      },
      {
        icon: <IoLogoJavascript />,
        lang: "java script ",
        color: "text-yellow-400",
        hover: "hover:text-yellow-400",
      },
      {
        icon: <FaReact />,
        lang: "React js ",
        color: "text-blue-700",
        hover: "hover:text-blue-700",
      },
    ],
  },
  {
    id: 10,
    title: "LEVEL",
    category: "JS",
    link: "https://omarelbadaweey.github.io/LEVEL/",
    git: "https://github.com/omarelbadaweey/LEVEL",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
      {
        icon: <FaBootstrap />,
        lang: "bootstrap",
        color: "text-purple-600",
        hover: "hover:text-purple-600",
      },
      {
        icon: <IoLogoJavascript />,
        lang: "java script ",
        color: "text-yellow-400",
        hover: "hover:text-yellow-400",
      },
    ],
  },
  {
    id: 11,
    title: "form-dash-board",
    category: "React",
    link: "./dashBoard.png",
    git: "https://github.com/omarelbadaweey/Form-DashBoard",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
      {
        icon: <RiTailwindCssFill />,
        lang: "tailwind",
        color: "text-sky-400",
        hover: "hover:text-sky-400",
      },
      {
        icon: <IoLogoJavascript />,
        lang: "java script ",
        color: "text-yellow-400",
        hover: "hover:text-yellow-400",
      },
      {
        icon: <FaReact />,
        lang: "React js ",
        color: "text-blue-700",
        hover: "hover:text-blue-700",
      },
    ],
  },
  {
    id: 12,
    title: "Abo-mancy",
    category: "CSS",
    link: "https://www.abo-mansy.com/",
    git: "https://github.com/omarelbadaweey?tab=repositories",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
      {
        icon: <FaBootstrap />,
        lang: "bootstrap",
        color: "text-purple-600",
        hover: "hover:text-purple-600",
      },
    ],
  },
  {
    id: 13,
    title: "kasper",
    category: "CSS",
    link: "https://omarelbadaweey.github.io/Kasper/",
    git: "https://github.com/omarelbadaweey/Kasper",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
    ],
  },
  {
    id: 14,
    title: "Leon",
    category: "CSS",
    link: "https://omarelbadaweey.github.io/Leon-Project/",
    git: "https://github.com/omarelbadaweey/Leon-Project",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
    ],
  },
  {
    id: 15,
    title: "Api-Ai-Project",
    category: "React",
    link: "https://api-ai-project.vercel.app/",
    git: "https://github.com/omarelbadaweey/Api-Ai-Project",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
      {
        icon: <RiTailwindCssFill />,
        lang: "tailwind",
        color: "text-sky-400",
        hover: "hover:text-sky-400",
      },
      {
        icon: <IoLogoJavascript />,
        lang: "java script ",
        color: "text-yellow-400",
        hover: "hover:text-yellow-400",
      },
      {
        icon: <FaReact />,
        lang: "React js ",
        color: "text-blue-700",
        hover: "hover:text-blue-700",
      },
    ],
  },
  {
    id: 16,
    title: "Task-Manager",
    category: "React",
    link: "https://task-manager-five-dusky.vercel.app/",
    git: "https://github.com/omarelbadaweey/Task-Manager",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
      {
        icon: <RiTailwindCssFill />,
        lang: "tailwind",
        color: "text-sky-400",
        hover: "hover:text-sky-400",
      },
      {
        icon: <IoLogoJavascript />,
        lang: "java script ",
        color: "text-yellow-400",
        hover: "hover:text-yellow-400",
      },
      {
        icon: <FaReact />,
        lang: "React js ",
        color: "text-blue-700",
        hover: "hover:text-blue-700",
      },
    ],
  },
  {
    id: 17,
    title: "American-council",
    category: "React",
    link: "https://american-council.vercel.app/",
    git: "https://github.com/omarelbadaweey/american-council",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
      {
        icon: <RiTailwindCssFill />,
        lang: "tailwind",
        color: "text-sky-400",
        hover: "hover:text-sky-400",
      },
      {
        icon: <IoLogoJavascript />,
        lang: "java script ",
        color: "text-yellow-400",
        hover: "hover:text-yellow-400",
      },
      {
        icon: <FaReact />,
        lang: "React js ",
        color: "text-blue-700",
        hover: "hover:text-blue-700",
      },
    ],
  },
  {
    id: 18,
    title: "Alekhlass",
    category: "React",
    link: "https://www.alekhllass.com/",
    git: "https://github.com/omarelbadaweey/Alekhlass",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
      {
        icon: <RiTailwindCssFill />,
        lang: "tailwind",
        color: "text-sky-400",
        hover: "hover:text-sky-400",
      },
      {
        icon: <IoLogoJavascript />,
        lang: "java script ",
        color: "text-yellow-400",
        hover: "hover:text-yellow-400",
      },
      {
        icon: <FaReact />,
        lang: "React js ",
        color: "text-blue-700",
        hover: "hover:text-blue-700",
      },
    ],
  },
  {
    id: 19,
    title: "ceme-utv",
    category: "React",
    link: "https://ceme-utv.vercel.app/",
    git: "https://github.com/omarelbadaweey/ceme-utv",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
      {
        icon: <RiTailwindCssFill />,
        lang: "tailwind",
        color: "text-sky-400",
        hover: "hover:text-sky-400",
      },
      {
        icon: <IoLogoJavascript />,
        lang: "java script ",
        color: "text-yellow-400",
        hover: "hover:text-yellow-400",
      },
      {
        icon: <FaReact />,
        lang: "React js ",
        color: "text-blue-700",
        hover: "hover:text-blue-700",
      },
    ],
  },
];

const categories = ["All", "CSS", "JS", "React"];

function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <Transition>
      <section className="py-4 min-h-[100vh]  ">
        <div className="max-w-5xl mx-auto px-6">
          <div className="fixed top-[40px] pb-3 left-[50%] translate-x-[-50%] bg-gradient-to-br from-blue-50 via-gray-150 to-gray-100 w-[100%]  z-100">
            <div className=" flex justify-center gap-4 mt-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full font-semibold border transition-colors duration-300 cursor-pointer ${
                    filter === cat
                      ? "bg-blue-500 text-white border-blue-500"
                      : "bg-white text-blue-500 border-blue-300 hover:bg-blue-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="grid p-6  grid-cols-1 md:grid-cols-2 gap-8 mt-27 ">
            {filteredProjects.map((project) => (
              <a
                href={project.link}
                target="_blank"
                key={project.id}
                className=" animation rounded-3xl overflow-hidden  shadow-md  relative transition-all duration-[.3s] hover:scale-[1.02] "
              >
                <iframe
                  loading="lazy"
                  className="h-[65vh] w-full  opacity-[.7]"
                  src={project.link}
                  frameborder="1"
                ></iframe>
                <div className="absolute bg-[#00000038] top-0 left-0 w-full h-full flex flex-col justify-between">
                  <h2 className=" capitalize p-2 text-center bg-[#000000de] text-amber-50 text-2xl w-[100%] ">
                    {project.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-2 p-1">
                    {project.languages &&
                      project.languages.map((item) => (
                        <button
                          className={`text-white ${item.hover} hover:outline-2 bg-[#000000] p-2 rounded-3xl capitalize flex items-center gap-2 px-2 btn-anmi hover:before:bg-white`}
                          key={item.lang}
                        >
                          <span className={`${item.color} text-2xl`}>
                            {item.icon}
                          </span>
                          {item.lang}
                        </button>
                      ))}
                  </div>
                  <div className=" p-2 flex flex-col md:flex-row items-center justify-center gap-4 text-center bg-[#000000de] text-amber-50 text-xl w-[100%]">
                    <a
                      href={project.git}
                      target="_blank"
                      className=" border-3 w-[60%] md:w-[45%] px-2 py-0.5 rounded-3xl text-blue-500 bg-white capitalize flex items-center gap-2"
                    >
                      <FaGithub /> git hub
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      className="px-2 py-0.5 w-[60%] md:w-[45%] rounded-3xl border-2 bg-blue-500 text-white capitalize flex items-center gap-2"
                    >
                      {" "}
                      <MdOutlineLiveTv />
                      live demo
                    </a>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Transition>
  );
}

export default Projects;
