import React from "react";

import ProfBar from "./ProfBar.jsx";

const SubSkillList = ({ open, skill, lightMode }) => {
  return (
    <ul className="subskill-list">
      {open ? skill.subSkillList.map((subSkill) => {
        return (
          <div className="subskill" key={subSkill.name}>
            <p className="subskill-name">{subSkill.name}</p>
            <ProfBar tier={"secondary"} proficiency={subSkill.proficiency} lightMode={lightMode} />
          </div>
        );
      }) : ""}
    </ul>
  )
}

export default SubSkillList;