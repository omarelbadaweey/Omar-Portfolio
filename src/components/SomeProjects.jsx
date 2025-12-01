import Transition from "../components/Transition";
import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { Link } from "react-router-dom";
import { SiNextdotjs } from "react-icons/si";

const projectsData = [
  {
    id: 1,
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
    id: 2,
    title: "next-store",
    category: "Next",
    link: "https://next-store-mu-drab.vercel.app/",
    git: "https://github.com/omarelbadaweey/next-store",
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
      {
        icon: <SiNextdotjs />,
        lang: "Next js ",
        color: "text-white-500",
        hover: "hover:text-gray-900",
      },
    ],
  },

  // {
  //   id: 3,
  //   title: "badawey-store",
  //   category: "JS",
  //   link: "https://badawey-store.vercel.app/",
  //   git: "https://github.com/omarelbadaweey/Badawey-Store",
  //   languages: [
  //     {
  //       icon: <FaHtml5 />,
  //       lang: "html",
  //       color: "text-red-400",
  //       hover: "hover:text-red-400",
  //     },
  //     {
  //       icon: <FaCss3Alt />,
  //       lang: "css",
  //       color: "text-blue-500",
  //       hover: "hover:text-blue-500",
  //     },
  //     {
  //       icon: <RiTailwindCssFill />,
  //       lang: "tailwind",
  //       color: "text-sky-400",
  //       hover: "hover:text-sky-400",
  //     },
  //     {
  //       icon: <IoLogoJavascript />,
  //       lang: "java script ",
  //       color: "text-yellow-400",
  //       hover: "hover:text-yellow-400",
  //     },
  //   ],
  // },

  {
    id: 3,
    title: "MX-Store",
    category: "Next",
    link: "https://mx-blond.vercel.app/",
    git: "https://github.com/omarelbadaweey/MX",
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
      {
        icon: <SiNextdotjs />,
        lang: "Next js ",
        color: "text-white-500",
        hover: "hover:text-gray-900",
      },
    ],
  },

  {
    id: 4,
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
];

function SomeProjects() {
  return (
    <Transition>
      <section className="py-2   ">
        <h2 class=" text-3xl sm:text-4xl font-bold text-center my-7 text-gray-800 relative before:content-[''] before:absolute before:w-[250px] before:top-15 before:left-[50%] before:translate-x-[-50%] before:h-[5px] before:bg-blue-400 after:content-[''] after:absolute after:w-[30px] after:h-[30px] after:rounded-[50%] after:border-3 after:border-blue-400 after:top-12 after:bg-white after:left-[50%] after:translate-x-[-50%]">
          Some Projects
        </h2>

        <div className="max-w-7xl mx-auto px-2 md:px-6">
          <div className="grid p-6  grid-cols-1 md:grid-cols-2 gap-8 mt-10 ">
            {projectsData.map((project) => (
              <a
                href={project.link}
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
                      className="border-3 w-[60%] md:w-[45%] px-2 py-0.5 rounded-3xl text-blue-500 bg-white capitalize flex items-center gap-2"
                    >
                      <FaGithub /> git hub
                    </a>
                    <a
                      href={project.link}
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
        <Link
          to="/projects"
          className="mt-3 flex items-center gap-3 text-lg  w-[fit-content] mx-auto border-2 border-blue-400 btn-anmi bg-blue-400 hover:before:bg-white overflow-hidden text-white hover:text-blue-400 font-semibold py-2 px-6 rounded-full shadow-lg "
        >
          All projects <FaLongArrowAltRight className="text-2xl" />
        </Link>
      </section>
    </Transition>
  );
}

export default SomeProjects;
