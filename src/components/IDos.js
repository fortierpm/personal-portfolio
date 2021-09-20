import React, { useState, useEffect } from "react";


let presentIndex = 0; // = first text
let futureIndex = 1; // = upcoming text

let iDo = "";
let futureIDo = "";

const IDos = ({ idos }) => {

  const [currentIDo, setCurrentIDo] = useState(idos[0]);
  const [nextIDo, setNextIDo] = useState(idos[1]);

  useEffect(() => {
    const repeat = setInterval(() => {
      if (presentIndex === idos.length) {
        presentIndex = 0;
      }
      if (futureIndex === idos.length) {
        futureIndex = 0;
      }

      iDo = idos[presentIndex];
      futureIDo = idos[futureIndex];

      presentIndex++;
      futureIndex++;

      setCurrentIDo(iDo);
      setNextIDo(futureIDo);
    }, 3000); // every 1 second
    return () => clearInterval(repeat);
  }, [currentIDo]);

  return (
    <p className="subheader">
      <span>I do </span>
      <span className="current-ido">{currentIDo}</span>
      <span className="next-ido">{nextIDo}</span>
    </p>
  );
}

export default IDos;