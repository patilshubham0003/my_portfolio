import "./Navbar.css";
import { useState } from "react";
import Avtar from "../assets/avatar.png";
import EmailIcon from "@mui/icons-material/Email";
import { Sparkles } from "lucide-react";
import SmartToyIcon from "@mui/icons-material/SmartToy";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setISHover] = useState(false);

  return (
    <nav className="bg-black opacity-90 text-white border-b border-b-cyan-950 shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img
              src={Avtar}
              alt="myImg"
              className="invert bg-white myImg w-10   "
            />
            <a href="#home" className="text-3xl font-bold ">
              Shubham Patil
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a
              href="https://personalaiassistant-wssu8eer7wez9bf6zaycly.streamlit.app/"
              className="flex items-center gap-2 hover:font-bold hover:text-white-900"
            >
              <SmartToyIcon />
              AI_Assistant
            </a>
            <a href="#home" className="hover:font-bold hover:text-white-900">
              Home
            </a>
            <a href="#about" className="hover:font-bold hover:text-white-900">
              About
            </a>
            <a href="#skills" className="hover:font-bold hover:text-white-900">
              Skills
            </a>
            <a href="#project" className="hover:font-bold hover:text-white-900">
              Projects
            </a>
            <a
              href="mailto:patilshubham3507@gmail.com"
              className="hover:font-bold hover:text-2xl"
              onMouseEnter={() => setISHover(true)}
              onMouseLeave={() => setISHover(false)}
            >
              {isHover ? <EmailIcon fontSize="large" /> : <EmailIcon />}
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <a
              href="https://personalaiassistant-wssu8eer7wez9bf6zaycly.streamlit.app/"
              className="flex items-center gap-2 hover:font-bold hover:text-white-900"
            >
              <SmartToyIcon />
              AI_Assistant
            </a>
          <a href="#home" className="block text-white hover:font-bold">
            Home
          </a>
          <a href="#about" className="block text-white hover:font-bold">
            About
          </a>
          <a href="#skills" className="block text-white hover:font-bold">
            Skills
          </a>
          <a href="#project" className="block text-white hover:font-bold">
            Projects
          </a>
          <a
            href="mailto:patilshubham3507@gmail.com"
            className="block text-white hover:font-bold"
            onMouseEnter={() => setISHover(true)}
            onMouseLeave={() => setISHover(false)}
          >
            {isHover ? <EmailIcon fontSize="large" /> : <EmailIcon />}
          </a>
        </div>
      )}
    </nav>
  );
}
