import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from '@mui/icons-material/X';
import CallIcon from '@mui/icons-material/Call';

export default function Media() {
   const [isHover, setISHover] = useState({git:false,call:false,linkdin:false,X:false});

  return (
    <div id="Contact" className="text-white mt-20 text-center h-6 mb-20 space-x-14">
       <a
        href="tel:+919960423507"
        className=" mb-5 hover:text-blue-500 active:text-blue-500"
      >
        
        <CallIcon onMouseEnter={()=>{setISHover({git:false,call:true,linkdin:false,X:false})}}
        onMouseLeave={()=>{setISHover({git:false,call:false,linkdin:false,X:false})}} fontSize={isHover.call?"large":"medium"}/>
      </a>
      <a
        href="https://github.com/patilshubham0003"
      className=" mb-5 hover:text-blue-500  active:text-blue-500"
      >
        
        <GitHubIcon onMouseEnter={()=>{setISHover({git:true,call:false,linkdin:false,X:false})}}
        onMouseLeave={()=>{setISHover({git:false,call:false,linkdin:false,X:false})}} fontSize={isHover.git?"large":"medium"} />
      </a>
      <a
        href="https://www.linkedin.com/in/shubham-patil-529853318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        className=" mb-5 hover:text-blue-500  active:text-blue-500"
      >
         
        <LinkedInIcon onMouseEnter={()=>{setISHover({git:false,call:false,linkdin:true,X:false})}}
        onMouseLeave={()=>{setISHover({git:false,call:false,linkdin:false,X:false})}} fontSize={isHover.linkdin?"large":"medium"}/>
      </a>
      <a
        href="https://x.com/patilshubham003?t=Of_mm6mmVHg1OUw8UjHbiw&s=08  "
        className="mb-5  hover:text-blue-500 active:text-blue-500"
      >
        
        <XIcon onMouseEnter={()=>{setISHover({git:false,call:false,linkdin:false,X:true})}}
        onMouseLeave={()=>{setISHover({git:false,call:false,linkdin:false,X:false})}} fontSize={isHover.X?"large":"medium"} />
      </a>
    </div>
  );
}
