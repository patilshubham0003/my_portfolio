import React from "react";
import TDimg from "../assets/vecteezy_stunning-artistic-man-working-from-home-on-laptop-isolated-4k_57444930.png";

export default function About() {
  return (
    <div id="about" className="py-8">
      <div className=" container py-5  text-white pt-2 mt-2 ">
        <h1 className="font-bold text-4xl mt-4 text-center">About</h1>
        <div className=" mt-5 mx-5 md:w-auto sm:columns-1 md:columns-2">
          <div className="my-16 mx-auto">
            <img
              src={TDimg}
              alt=""
              className="mr-9 my-auto  sm:w-80 lg:w-99 "
            />
          </div>
          <div className="  my-14 mr-9 mx-auto pt-5 mt-10">
            <h1 className="font-bold text-3xl mx-auto pt-3 lg:mt-24 mb-5">
              Hello! I'm Shubham
            </h1>
            <p className="   py-2 px-2 rounded-md mt-4 font-bold mx-auto text-[16px]">
              I am a passionate AI/ML Engineer with experience in building
              intelligent, data-driven applications using Python and modern
              machine learning frameworks. I specialize in designing, training,
              and deploying scalable models that transform complex data into
              actionable insights. With a strong foundation in algorithms,
              statistics, and software engineering, I enjoy converting
              real-world problems into efficient AI solutions. I also have
              strong knowledge of the React. Whether developing predictive
              models, working with deep learning architectures, or integrating
              ML systems into production environments, I am always eager to
              learn, experiment, and grow with every project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
