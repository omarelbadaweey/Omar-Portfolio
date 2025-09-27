import React from "react";
import Form from "../components/Form";
import SocialLinks from "../components/SocialLinks";

function Contact() {
  return (
    <section className="pt-[40px]">
      <h2 class=" text-3xl sm:text-4xl font-bold text-center my-7 text-[#00264e] relative before:content-[''] before:absolute before:w-[250px] before:top-15 before:left-[50%] before:translate-x-[-50%] before:h-[5px] before:bg-blue-400 after:content-[''] after:absolute after:w-[30px] after:h-[30px] after:rounded-[50%] after:border-3 after:border-blue-400 after:top-12 after:bg-white after:left-[50%] after:translate-x-[-50%]">
        Contact
      </h2>
      <div>
        <div className="mx-auto w-[500px] mt-25">
          <SocialLinks />
        </div>
        <h2 className=" mt-10 capitalize text-3xl font-bold text-blue-400 text-center animate-fadeIn">
          send message
        </h2>
        <div className="-mt-15">
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Contact;
