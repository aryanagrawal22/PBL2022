import Experience from "./Experience";
import {Fade} from "react-awesome-reveal";
import React from "react";

export default function Web(props) {
  return (
    <div>
      <Fade up>
        <div>
          <h1 className="text-center mt-10 font-primary font-black text-3xl md:text-5xl capitalize text-white hover:text-[#00e5ff] transition duration-500 ease-in-out transform hover:scale-105">
            Web-Development Roadmap
          </h1>
        </div>
      </Fade>

      <Experience  data={props.data.experience}/>
    </div>
  );
}