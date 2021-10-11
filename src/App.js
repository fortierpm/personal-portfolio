import React, { useState, useRef, useEffect } from "react";

import { Head } from "react-static";

// components
import TopNavbar from "./components/TopNavbar";
import IDos from "./components/IDos";
import CategorySelector from "./components/CategorySelector";
import ProjectCardStack from "./components/ProjectCardStack";
import SkillList from "./components/SkillList";
import CertificateList from "./components/CertificateList";

// styles
import "./styles/global.css";
import "./styles/app.css";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faSun, faMoon, faPaperPlane, faUniversity, faSms } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';

// constants
import projects from "./constants/projects";
import skills from "./constants/skills";
import certificates from "./constants/certificates";

// photos
import peterfortierBack from "./img/peterfortier.jpg";


// UNUSED(no delete):
// // detect SSR
// const useIsSsr = () => {
//   const [isSsr, setIsSsr] = useState(true); // start off in "SSR mode", to ensure our initial browser render matches the SSR render
//   useEffect(() => {
//     setIsSsr(false); // `useEffect` never runs on the server, so we must be on the client if we hit this block
//   }, []);
//   return isSsr;
// }


const App = () => {

  // UNUSED(no delete): const isSSR = useIsSsr();
  const [lightMode, setLightMode] = useState(true);
  useEffect(() => {
    // Note that useEffect does not run for SSR
    setLightMode(JSON.parse(localStorage.getItem("theme")) !== null  ? JSON.parse(localStorage.getItem("theme")) : true);
    const theme = (JSON.parse(localStorage.getItem("theme"))) ? "lightmode" : "darkmode";
    if (JSON.parse(localStorage.getItem("theme")) !== null) {
      document.body.classList.add(theme);
    } else {
      localStorage.setItem("theme", lightMode);
      document.body.classList.add("lightmode");
    }
  }, []);

  const handleLightMode = (e) => {
    setLightMode(!lightMode);
    if (!lightMode) {
      document.body.classList.replace("darkmode", "lightmode");
    } else {
      document.body.classList.replace("lightmode", "darkmode");
    }
    localStorage.setItem("theme", !lightMode);
  }

  const projectGroupKeys = Object.keys(projects);
  const skillGroupKeys = Object.keys(skills);

  const [category, setCategory] = useState("Featured");


  return (
    <div className="App">

      <Head>
        <meta charSet="UTF-8" />
        <title>Peter Fortier - Web Portfolio</title>
        <meta name="description" content="Peter Fortier's personal portfolio webpage" />
        <meta name="keywords" content="Peter Fortier, portfolio, web designer" />
        <meta name="page-topic" content="Peter Fortier" />
        <meta name="page-type" content="Portfolio" />
        <meta name="audience" content="Everyone" /> {/* No inapropriate content */}
        <meta name="copyright" content="Peter Fortier" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="favicon.ico"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <TopNavbar />

      {/* HERO SECTION */}
      <section id="hero">
        <div className="hero-catch">
          <h1 className="hero-header">Hey!<br />I'm Peter.</h1>
          <FontAwesomeIcon onClick={handleLightMode} className="hero-icon" icon={lightMode ? faSun : faMoon} />
          <IDos />
        </div>
        <div className="hero-background">
          <div className="hero-face">
            <div className="hero-face-img">
              <img src={peterfortierBack} alt="Peter Fortier's image." />
            </div>
            <div className="hero-face-decoration">
              <svg width="126" height="126" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="wide" cx="63" cy="63" r="57" stroke={lightMode ? "#F2E8CF" : "#201c29"} strokeWidth="12" strokeLinejoin="round" strokeDasharray="40 40 120 80"/>
                <circle className="thin" cx="63" cy="63" r="50" stroke={lightMode ? "#6A994E" : "#7a7a8c"} strokeWidth="5" strokeLinejoin="round" strokeDasharray="0 40 300 400 40 0 20 60"/>
                <circle className="thick" cx="63" cy="63" r="50" stroke={lightMode ? "#386641" : "#373442"} strokeWidth="10" strokeLinejoin="round" strokeDasharray="120 170 120 20 420 170"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <main>

        {/* PROJECTS SECTION */}
        <section id="projects" className="main-section">
          <h2>Projects</h2>
          <CategorySelector projectGroupKeys={projectGroupKeys} setCategory={setCategory} category={category} lightMode={lightMode} />
          <div className="project-stack-container">
            {/* <h3>{category}</h3> */}
            <ProjectCardStack projects={projects} projectGroup={category} />
          </div>
        </section>


        {/* SKILLS SECTION */}
        <section id="skills" className="main-section">
          <h2>Skills</h2>
          <div className="skills-container">

            {/* map skill groups */}
            {skillGroupKeys.map((skillGroup) => {
              return (
                <section className="skill-group" key={skillGroup}>
                  <h3>{skillGroup}</h3>
                  <SkillList skills={skills} skillGroup={skillGroup} lightMode={lightMode} />
                </section>
              );
            })}

          </div>
        </section>


        {/* CERTIFICATES SECTION */}
        <section id="certificates" className="main-section">
          <h2>Certificates</h2>
          <div className="certificates-container">
            <CertificateList certificates={certificates} />
          </div>
        </section>


        {/* CONTACT SECTION */}
        <section id="contact" className="main-section">
          <h2>Contact</h2>
          <div className="contact-container">
            <section className="contact-info">
              <h3>Info</h3>
              <ul className="info-list">
                <li className="info-item">
                  <a href="mailto:fortierpm@gmail.com"><FontAwesomeIcon className="contact-icon" icon={faPaperPlane} />fortierpm@gmail.com</a>
                </li>
                <li className="info-item">
                  <a href="mailto:fortie1@stolaf.edu"><FontAwesomeIcon className="contact-icon" icon={faUniversity} />fortie1@stolaf.edu</a>
                </li>
                <li className="info-item">
                  <a href="sms:+16128038780&body=Hi%20I%27m%20Peter!%20Send%20me%20a%20message."><FontAwesomeIcon className="contact-icon" icon={faSms} />(612) 803-8780</a>
                </li>
                <li className="info-item">
                  <a href="https://www.linkedin.com/in/peter-fortier-71359221a/" rel="external noopener"><FontAwesomeIcon className="contact-icon" icon={faLinkedin} />LinkedIn</a>
                </li>
              </ul>
            </section>
            <section className="contact-socials">
              <h3>Socials</h3>
              <ul className="socials-list">
                <li className="socials-item">
                  <a href="https://www.instagram.com/petrfortier/" rel="external noopener"><FontAwesomeIcon className="contact-icon" icon={faInstagram} />Instagram</a>
                </li>
                <li className="socials-item">
                  <a href="https://www.facebook.com/profile.php?id=100010683600528" rel="external noopener"><FontAwesomeIcon className="contact-icon" icon={faFacebook} />Facebook</a>
                </li>
                <li className="socials-item">
                  <a href="https://twitter.com/fortier_pm" rel="external noopener"><FontAwesomeIcon className="contact-icon" icon={faTwitter} />Twitter</a>
                </li>
              </ul>
            </section>
          </div>
        </section>

      </main>

      <footer>
        <div className="copyright">&copy; 2021 Peter Fortier. All Rights Reserved.</div>
      </footer>

    </div>
  );
}
export default App;
