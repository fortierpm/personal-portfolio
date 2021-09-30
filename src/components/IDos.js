import React, { useState, useEffect, useRef } from "react";

import "../styles/idos.css";


const idos = ["Web Design", "JavaScript", "React", "Software Development", "Python", "Graphics", "SVGs", "Prototyping"];
const idosLength = idos.length;
let index = 3;
let transIndex = 1; // value from 0-2 over var life


const IDos = () => {

  const [animCatch, setAnimCatch] = useState(true);
  const [iDo1, setIDo1] = useState("JavaScript"); // correspond with position 0
  const [iDo2, setIDo2] = useState("Web Design"); // correspond with position 1
  const [iDo3, setIDo3] = useState("React"); // correspond with last position

  const [prepDir, setPrepDir] = useState("down");
  const [activeDir, setActiveDir] = useState("left");

  const elemIDo1 = useRef(null);
  const elemIDo2 = useRef(null);
  const elemIDo3 = useRef(null);

  useEffect(() => {
    const repeat = setInterval(() => {

      setActiveDir(prepDir);
      setPrepDir(() => {
        let rand = Math.floor((Math.random() * 4) + 1);
        let result = "";
        switch (rand) {
          case 1:
            result = "down"; break;
          case 2:
            result = "up"; break;
          case 3:
            result = "right"; break;
          default:
            result = "left"; break;
        }
        return result;
      });


      if (index === idosLength) {
        index = 0;
      }

      switch (transIndex) {

        case 0: 
          elemIDo1.current.style.animationName = `${activeDir}-1`;
          elemIDo2.current.style.animationName = `${activeDir}-2`;
          elemIDo3.current.style.animationName = `${prepDir}-prep`;
          setIDo3(idos[index++]);
          transIndex++;
          break;

        case 1:
          elemIDo1.current.style.animationName = `${activeDir}-2`;
          elemIDo2.current.style.animationName = `${prepDir}-prep`;
          elemIDo3.current.style.animationName = `${activeDir}-1`;
          setIDo2(idos[index++]);
          transIndex++;
          break;

        case 2:
          elemIDo1.current.style.animationName = `${prepDir}-prep`;
          elemIDo2.current.style.animationName = `${activeDir}-1`;
          elemIDo3.current.style.animationName = `${activeDir}-2`;
          setIDo1(idos[index++]);
          transIndex = 0;
          break;

      }

      setAnimCatch(!animCatch);

    }, 3000);
    return () => clearInterval(repeat);

  }, [animCatch]);


  return (
    <p className="subheader">
      <span className="subheader-text">I do </span>
      <span className="subheader-text idobox">
        <span className="screen-readable-label">{idos.join(", ")}</span> {/* also necessesary for correct animated display */}
        <span className="ido-placeholder" aria-hidden="true">Web Design</span>
        <span ref={elemIDo1} className="ido1 ido" aria-hidden="true">{iDo1}</span>
        <span ref={elemIDo2} className="ido2 ido" aria-hidden="true">{iDo2}</span>
        <span ref={elemIDo3} className="ido3 ido" aria-hidden="true">{iDo3}</span>
      </span>
    </p>
  );
}

export default IDos;