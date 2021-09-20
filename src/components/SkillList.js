import React, { useState } from "react";

import ProfBar from "./ProfBar";
import SubSkillList from "./SubSkillList";

const SkillList = ({ skills, skillGroup }) => {
  return (
    <ul className="skill-list">

      {/* map skills */}
      {skills[skillGroup].map((skill) => {
        const [openState, setOpenState] = useState(false);
        const handleClick = (e) => {
          setOpenState(!openState);
        }
        return (
          <div onClick={handleClick} className={`skill ${skill.subSkillList.length > 0 ? "skill-clickable" : ""}`} key={skill.name}>
            <div className="skill-main">
              <h4 className="skill-name">{skill.name}</h4>
              <p className="skill-desc">{skill.description}</p>
              <ProfBar proficiency={skill.proficiency} />
            </div>
            <SubSkillList open={openState} skill={skill} />
          </div>
        );
      })}
    </ul>
  );
}

export default SkillList;