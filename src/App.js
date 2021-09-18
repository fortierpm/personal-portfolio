import React, { useState } from "react";

import { Head } from "react-static";

// components
import TopNavbar from "./components/TopNavbar";
import ProjectCard from "./components/ProjectCard";
import SkillList from "./components/SkillList";

// styles
import "./styles/global.css";
import "./styles/app.css";

// constants
import projects from "./constants/projects";
import skills from "./constants/skills";


const App = () => {

  const skillKeys = Object.keys(skills);

  return (
    <div className="App">
      <Head>
        <meta charSet="UTF-8" />
        <title>Peter Fortier</title>
        <meta name="description" content="Peter Fortier's personal portfolio webpage" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      
      <TopNavbar />

      <main>

        {/* HERO SECTION */}
        <section id="hero">

        </section>


        {/* PROJECTS SECTION */}
        <section id="projects">
          <h2>Projects</h2>
          <div className="project-cards-container">
          {projects.map((project) => {
            const projectDate = new Date(project.date);
            const year = projectDate.getFullYear();
            const month = `${(projectDate.getMonth() + 1) < 10 ? `0${projectDate.getMonth() + 1}` : projectDate.getMonth() + 1}`; // add one because .getMonth starts counting months at 0 for Jan
            const day = `${projectDate.getDate() < 10 ? `0${projectDate.getDate()}` : projectDate.getDate()}`;
            return (
              <ProjectCard project={project} year={year} month={month} day={day} key={project.title} />
            );
          })}
          </div>
        </section>


        {/* SKILLS SECTION */}
        <section id="skills">
          <h2>Skills</h2>
          <div className="skills-container">

            {/* map skill groups */}
            {skillKeys.map((skillGroup) => {
              const resultPt1 = skillGroup.replace(/([A-Z])/g, " $1");
              const resultPt2 = resultPt1.charAt(0).toUpperCase() + resultPt1.slice(1);
              return (
                <div className="skill-group" key={skillGroup}>
                  <h3>{resultPt2}</h3>
                  <SkillList skills={skills} skillGroup={skillGroup} />
                </div>
              );
            })}

          </div>
        </section>


        {/* CERTIFICATES SECTION */}
        <section id="certificates">
          <h2>Certificates</h2>
        </section>


        {/* CONTACT SECTION */}
        <section id="contact">
          <h2>Contact</h2>
        </section>

      </main>

      <footer>
        <div className="copywrite">&copy;2021 All Rights Reserved</div>
      </footer>

    </div>
  );
}
export default App;
