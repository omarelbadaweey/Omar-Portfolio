import React from "react";
import Hero from "../components/Hero";
import Transition from "../components/Transition";
import SomeSkils from "../components/SomeSkils";
import SomeProjects from "../components/SomeProjects";
import MyDetails from "../components/MyDetails";
import Form from "../components/Form";

function Home() {
  return (
    <Transition>
      <div className="">
        <Hero />
        <MyDetails />
        <SomeSkils />
        <SomeProjects />
        <h2 class=" text-3xl sm:text-4xl font-bold text-center my-7 text-gray-800 relative before:content-[''] before:absolute before:w-[250px] before:top-15 before:left-[50%] before:translate-x-[-50%] before:h-[5px] before:bg-blue-400 after:content-[''] after:absolute after:w-[30px] after:h-[30px] after:rounded-[50%] after:border-3 after:border-blue-400 after:top-12 after:bg-white after:left-[50%] after:translate-x-[-50%] mt-15">
          Contact Me
        </h2>
        <div className="-mt-10">
          <Form />
        </div>
      </div>
    </Transition>
  );
}

export default Home;
