import React from "react";

import { Head } from "react-static";

// components
import TopNavbar from "./components/TopNavbar";

// styles
import "./styles/global.css";
import "./styles/app.css";

// constants
import projects from "../public/constants/projects";
import skills from "../public/constants/skills";


const App = () => {
  return (
    <div className="App">
      <Head>
        <meta charSet="UTF-8" />
        <title>Peter Fortier</title>
        <meta name="description" content="Peter Fortier's personal portfolio webpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <TopNavbar />

      <main>

        {/* HERO SECTION */}
        <section id="hero">

        </section>


        {/* PROJECTS SECTION */}
        <section id="projects">
          <h2>Projects</h2>
          {projects.map((project) => {
            const projectDate = new Date(project.date);
            const year = projectDate.getFullYear();
            const month = `${(projectDate.getMonth() + 1) < 10 ? `0${projectDate.getMonth() + 1}` : projectDate.getMonth() + 1}`; // add one because .getMonth starts counting months at 0 for Jan
            const day = `${projectDate.getDate() < 10 ? `0${projectDate.getDate()}` : projectDate.getDate()}`;
            return (
              <article className="project-card" key={project[0]}>
                <div className="card-title">
                  <p className="card-date"><time dateTime={`${year}/${month}/${day}`}>{project.date}</time></p>
                  <h3><a >{project.title}</a></h3>
                </div>
                <Image className="card-thumb" src={project.thumb} alt="Project thumbnail" width={50} height={50}></Image>
                <address className="card-authorship">
                  <a className="author1-avatar" rel="author" href={project.authors[0][2]} >
                    <Image className="avatar-img" src={project.authors[0][1]} alt="" width={50} height={50}></Image>
                  </a>
                  <div className="author-list">
                    <div className="author-prefix">{(project.authors.length < 2) ? "Author" : "Authors"}</div>
                    {project.authors.map((author) => {
                      return (
                        <a className="author-link" rel="author" href={author[2]} key={author[0]}>{author[0]}<br /></a>
                      );
                    })}
                  </div>
                </address>
                <div className="card-tags">
                  {project.tags.map((tag) => {
                    return (
                      <a className="tag-link" href={tag[1]} key={tag[0]}>{tag[0]}</a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </section>


        {/* SKILLS SECTION */}
        <section id="skills">
          <h2>Skills</h2>
          <div className="skills-container">

            {/* map skill groups */}
            {Object.keys(skills).map((skillGroup) => {
              const resultPt1 = skillGroup.replace(/([A-Z])/g, " $1");
              const resultPt2 = resultPt1.charAt(0).toUpperCase() + resultPt1.slice(1);
              return (
                <div className="skill-group" key={skillGroup}>
                  <h3>{resultPt2}</h3>
                  <ul className="skill-group-list">

                    {/* map skills */}
                    {skills[skillGroup].map((skill) => {
                      return (
                        <div className="skill" key={skill.name}>
                          <h4>{skill.name}</h4>
                          <p>{skill.description}</p>
                          <svg className="proficiency-guage" viewBox="0 0 1000 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="1000" height="20" rx="10" fill="black"/>
                            <mask id="mask0" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="20">
                              <rect width={skill.proficiency*1000} height="20" fill="#C994C4"/>
                            </mask>
                            <g mask="url(#mask0)">
                              <rect width="1000" height="20" rx="10" fill="url(#paint0_linear)"/>
                            </g>
                            <defs>
                              <linearGradient id="paint0_linear" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FF1F1F"/>
                                <stop offset="1" stopColor="#760AFF"/>
                              </linearGradient>
                            </defs>
                          </svg>
                          <ul className="subskill-list">

                          </ul>
                        </div>
                      );
                    })}

                  </ul>
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
