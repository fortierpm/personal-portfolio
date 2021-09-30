import React, { useState } from "react";

import triangle from "../img/triangle.svg";

const CategorySelector = ({ projectGroupKeys, setCategory, category }) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCategoryDropdown = (e) => {
    setDropdownOpen(!dropdownOpen);
  }

  const handleCategoryChange = (projectGroup) => {
    setCategory(`${projectGroup}`);
    setDropdownOpen(false);
  }

  return (
    <div className="project-category-select">
      <div className="category-desc">Category:</div>
      <div onClick={handleCategoryDropdown} className="category-select">
        <h3 className="active-category">{category}</h3>
        <img className={dropdownOpen ? "rotate-90" : ""} src={triangle} alt="" />
        <div className={`category-dropdown ${dropdownOpen ? "dropdown-open": ""}`}>
          {projectGroupKeys.map((projectGroup) => {
            if (projectGroup === category) {
              return (
                <div className="category-option category-option-active" key={projectGroup}>{projectGroup}</div>
              );
            }
            return (
              <div onClick={() => handleCategoryChange(projectGroup)} className="category-option" key={projectGroup}>{projectGroup}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default CategorySelector;