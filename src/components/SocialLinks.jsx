import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/?locale=ar_AR",
      icon: <FaFacebookF />,
    },
    {
      name: "Twitter",
      url: "https://x.com/OmarElbadawey1",
      icon: <FaTwitter />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/",
      icon: <FaInstagram />,
    },
    {
      name: "Whats app",
      url: "https://api.whatsapp.com/send/?phone=01008790584&text&type=phone_number&app_absent=0",
      icon: <FaWhatsapp />,
    },
    {
      name: "GitHub",
      url: "https://github.com/omarelbadaweey?tab=repositories",
      icon: <FaGithub />,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-xl mx-auto lg:mx-[0_0]">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          className={`
              group relative flex items-center justify-center 
              w-13 h-13 rounded-full bg-white shadow-lg
              transition-all duration-300 ease-in-out
              transform hover:scale-110 hover:shadow-xl
              hover:text-[#00264e]
              text-blue-400
              before:absolute before:inset-0 before:rounded-full 
              before:bg-blue-400 before:opacity-0 
              before:transition-opacity before:duration-300
              hover:before:opacity-10
            `}
          aria-label={link.name}
        >
          <div className="relative z-10 text-2xl ">{link.icon}</div>

          <span
            className="absolute -top-10 w-[90px] text-center opacity-0 group-hover:opacity-100 
                          transition-opacity duration-300 bg-blue-400 text-white 
                          px-1 py-1 rounded-lg text-sm font-medium
                          after:absolute after:top-full after:left-1/2 
                          after:-translate-x-1/2 after:border-4 
                          after:border-transparent after:border-t-blue-400"
          >
            {link.name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
