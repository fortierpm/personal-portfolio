import React, { useState } from "react";

import ProfBar from "./ProfBar";

const SubSkillList = ({ open, skill }) => {
    return (
        <ul className="subskill-list">
            {open ? skill.subSkillList.map((subSkill) => {
                return (
                    <div className="subskill-body" key={subSkill.name}>
                        <p className="subskill-name">{subSkill.name}</p>
                        <ProfBar tier={"secondary"} proficiency={subSkill.proficiency} />
                    </div>
                )
            }) : ""}
        </ul>
    )
}

export default SubSkillList;