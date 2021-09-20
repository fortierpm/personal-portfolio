import React from "react";

const ProfBar = ({ tier = "primary", proficiency }) => {
  let level = "";
  if (proficiency === 1) {
    level = "Expert";
  } else if (proficiency >= 0.9) {
    level = "Near Expert";
  } else if (proficiency >= 0.7) {
    level = "Advanced";
  } else if (proficiency >= 0.5) {
    level = "Proficient";
  } else if (proficiency >= 0.4) {
    level = "Competent";
  } else if (proficiency >= 0.1) {
    level = "Beginner";
  } else if (proficiency >= 0) {
    level = "Unskilled";
  } else {
    level = "Not Specified";
  }

  return (
    <svg className={`prof-guage ${(tier === "secondary") ? "prof-guage-sec" : "prof-guage-prim"}`} viewBox="0 0 1000 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={`Skill Level: ${level}`}>
      <rect width="1000" height="20" rx="10" fill="black" />
      <mask id={proficiency /* required for creating unique stop ids */} style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="20">
        <rect width={1000 * proficiency} height="20" fill="#C994C4" />
      </mask>
      <g mask={`url(#${proficiency})`}>
        <rect width="1000" height="20" rx="10" fill="url(#paint0_linear)" />
      </g>
      <defs>
        <linearGradient id="paint0_linear" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF1F1F" />
          <stop offset="1" stopColor="#760AFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default ProfBar;