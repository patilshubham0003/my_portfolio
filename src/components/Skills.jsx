import React from "react";
import Cards from "./Cards";
import Tailwend from "../assets/IMG_20250801_192614.jpg";
import Mongo from "../assets/mongoCut.png";
import pandas from "../assets/Pandas_logo.svg.png"
import numpy from "../assets/NumPy_logo_2020.svg.png"
import sklearn from "../assets/Scikit_learn_logo_small.svg.png"
import seaborn from "../assets/Logo-seaborn.png"
import matplotlib from "../assets/Created_with_Matplotlib-logo.svg.png"
import sql from "../assets/Sql_data_base_with_logo.png"
import git from "../assets/Git-logo.svg.png"


export default function Skills() {
  return (
    <div id="skills" className="mx-auto container mb-5 py-13   text-white mt-2 lg:mt-20 ">
      <h1 className="font-bold text-4xl mt-5 mb-20   mx-auto text-center">Skills</h1>

      <div className="columns-2   lg:columns-4 w-full space-y-2 sm:mx-auto md:mx-auto">
       <Cards fa={"fa-js"} color={"text-yellow-300"} skill={"JavaScript"}/>
        <Cards fa={"fa-react"} color={"text-blue-500"} skill={"React"} />
        <Cards fa={"fa-node-js"} color={"text-lime-800"} skill={"Node.js"}/>
        <Cards TXT={"ex"} color={"text-lime-800"} skill={"Express.js"} />
        <Cards img={Mongo} imgSize={"3.2rem"} skill={"MongoDB"} />
        <Cards fa={"fa-css"} color={"text-blue-500"} skill={"CSS"} />
        <Cards fa={"fa-bootstrap"} color={"text-blue-500"} skill={"Bootstrap"} />
        <Cards img={Tailwend} imgSize={"5rem"} skill={"Tailwind"}/>
        <Cards img={sql} imgSize={"6.6rem"} skill={"SQL"}/>
        <Cards fa={"fa-python"} color={"text-blue-500"} skill={"Python"} />
        <Cards img={pandas} imgSize={"7rem"} skill={"Pandas"}/>
        <Cards img={numpy} imgSize={"7rem"} skill={"NumPy"}/>
        <Cards img={sklearn} imgSize={"6rem"} skill={"Scikit-learn"}/>
        <Cards img={seaborn} imgSize={"3.2rem"} skill={"Seaborn "}/>
        <Cards img={matplotlib} imgSize={"2.9rem"} skill={"Matplotlib"}/>
        <Cards img={git} imgSize={"7.6rem"} skill={"git"}/>
        
        
        
       
      </div>
    </div>
  );
}
