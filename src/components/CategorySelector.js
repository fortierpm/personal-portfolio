import React, { useState } from "react";

//import triangle from "../img/triangle.svg";

const CategorySelector = ({ projectGroupKeys, setCategory, category, lightMode }) => {

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
        {/* <img className={dropdownOpen ? "rotate-90" : ""} src={triangle} alt="" /> */}
        <svg
          className={`triangle ${dropdownOpen ? "rotate-90" : ""}`}
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill={lightMode ? "#386641" : "#eeeeef"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 100V0H100V16.6667H16.6667V100H0Z" />
        </svg>
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