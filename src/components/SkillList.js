import React, { useState } from "react";

import ProfBar from "./ProfBar";
import SubSkillList from "./SubSkillList";

const SkillList = ({ skills, skillGroup }) => {
  return (
    <ul className="skill-list">

      {/* map skills */}
      {skills[skillGroup].map((skill) => {
        const [openState, setOpenState] = useState(false);
        const handleFocus = (e) => {
          setOpenState(true);
        }
        const handleBlur = (e) => {
          setOpenState(false);
        }
        const clickability = skill.subSkillList.length > 0;
        return (
          <div onFocus={handleFocus} onBlur={handleBlur} tabindex={`${clickability ? "0" : ""}`} className={`skill ${clickability ? "skill-clickable" : ""}`} key={skill.name}>
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