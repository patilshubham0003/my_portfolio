import "./Home.css";
import React from "react";
import Button from "@mui/material/Button";
import ContactsIcon from "@mui/icons-material/Contacts";
import MyImg2 from "../assets/shubhP.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Home() {
  return (
    <div id="home" className="container py-5 ">
      <div className=" p-5 mb-5  grid grid-cols-1 grid-rows-2  md:grid-cols-2  md:grid-rows-1  md:gap-4 ">
        <div className="1 mx-auto text-white  mt-5 p-5">
          <h3 className="text-3xl my-1 mt-5   font-bold">Hey There! </h3>
          <h1 className="text-5xl mt-5  font-bold font-serif">
            I,m <span className="text-blue-400">Shubham</span>
          </h1>
          <h2 className="text-2xl my-2 mb-4 pb-5 font-bold">
            A Software Developer
          </h2>
          <div className="btn pt-4 mt-4">
            <a href="#Contact">
              <Button
              className=""
              variant="outlined"
              startIcon={<ContactsIcon />}
            >
              <p className="text-xl font-bold ">Contact</p>
            </Button>
            </a>
            <div className="mt-10">
              <a
                href="https://github.com/patilshubham0003"
                className="mr-9 hover:text-blue-500 active:text-blue-500"
              >
                <GitHubIcon fontSize="large" />
              </a>
              <a
                href="https://www.linkedin.com/in/shubham-patil-529853318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="hover:text-blue-500 active:text-blue-500"
              >
                <LinkedInIcon fontSize="large" />
              </a>
            </div>
          </div>
        </div>
      <div className="pb-5 mx-auto mb-5 sm:mb-5 md:mt-5">
  <a href="/img">
    <img
  src={MyImg2}
  alt="MyImg2"
  className="mx-auto w-32 sm:w-48 md:w-52 lg:w-96 rounded-full"
/>
  </a>
</div>
      </div>
    </div>
  );
}
