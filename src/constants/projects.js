
// Default Thumb
import thumb1 from "../img/cardthumb/project-thumb.jpg";
// React Thumbs
import thumbThisWebsite from "../img/cardthumb/this-website.png";
import thumbFortierpmv3React from "../img/cardthumb/fortierpmv3-react.png";
import thumbAbsorbDemo from "../img/cardthumb/absorb-demo.png";
import thumbSlimeCardDemo from "../img/cardthumb/slime-card-demo.png";
import thumbAdvancedDrop from "../img/cardthumb/advanced-dropdown.png";
// Javascript Thumbs
import thumbFortierpmv3 from "../img/cardthumb/fortierpmv3.png";
import thumbDiceTower from "../img/cardthumb/dice-tower.png";
import thumbAnimOpen from "../img/cardthumb/animated-page-open.png";
import thumbBeforeAfter from "../img/cardthumb/before-after-slider.png";
import thumbTextParts from "../img/cardthumb/text-particles.png";
import thumbConstellations from "../img/cardthumb/constellations-demo.png";
import thumbMouseParts from "../img/cardthumb/mouse-particles.png";
import thumbImagePopup from "../img/cardthumb/fluid-image-popups.png";
// CSS Thumbs
import thumbCardTricks from "../img/cardthumb/card-tricks.png";
import thumbAnimGrid from "../img/cardthumb/animated-grid.png";
import thumbAnimLogo from "../img/cardthumb/animated-logo.png";
import thumbNoJSCarousel from "../img/cardthumb/nojs-carousel.png";
// Python Thumbs
import thumbLondon from "../img/cardthumb/london-interactive-guide.png";
// Graphics Thumbs
// Art Thumbs


// Author Profile Images
import peterFortier from "../img/peterfortier-logo-draw-zoom.png";
import jacobMerrick from "../img/author.jpg";
import elleMiller from "../img/author.jpg";
import jeffDelaney from "../img/fireship.png";


// AUTHORS
const authorPeter = ["Peter Fortier", peterFortier, "https://www.linkedin.com/in/peter-fortier-71359221a/"];
const authorJacob = ["Jacob Merrick", jacobMerrick, "#"];
const authorElle = ["Elle Miller", elleMiller, "#"];
const authorJeff = ["Jeff Delaney", jeffDelaney, "https://fireship.io/"];

// TAGS
const tagAffDesigner = ["Affinity Designer", "#skills"];
const tagAffPhoto = ["Affinity Photo", "#skills"];
const tagBlackPen = ["Black Pen", "#skills"];
const tagHTMLCanvas = ["Canvas", "#skills"];
const tagCSS = ["CSS", "#skills"];
const tagDiscordBot = ["Discord Bot", "#skills"];
const tagDrypoint = ["Drypoint", "#skills"];
const tagGSAP = ["GSAP", "#skills"];
const tagHTML = ["HTML", "#skills"];
const tagJS = ["Javascript", "#skills"];
const tagNext = ["Next.js", "#skills"];
const tagModPodge = ["Mod Podge", "#skills"];
const tagPaperCol = ["Paper", "#skills"];
const tagPillow = ["Pillow", "#skills"];
const tagPrintArt = ["Print", "#skills"];
const tagPython = ["Python", "#skills"];
const tagReact = ["React.js", "#skills"];
const tagReactStatic = ["React Static", "#skills"];
const tagReplit = ["Replit", "#skills"];
const tagSCSS = ["SCSS", "#skills"];
const tagSVG = ["SVG", "#skills"];
const tagTkinter = ["Tkinter", "#skills"];
const tagVector = ["Vector", "#skills"];
const tagWatercolor = ["Watercolor", "#skills"];



const featuredList = [
  "This Website!",
  "Personal Website v3 - React",
  "Slime Card Demo",
  "Absorb Demo",
  "Interactive London Guide",
  "Dice Tower - Discord Bot",
  "Personal Website v3 - Vanilla JS",
  "Constellations Demo"
];


let projectsArrange = {
  "Featured": [],
  "React": [
    {
      title: "This Website!",
      titlelink: "https://github.com/fortierpm/personal-portfolio",
      date: "Feb 23, 2022",
      thumb: thumbThisWebsite,
      thumblink: "https://github.com/fortierpm/personal-portfolio",
      authors: [
        authorPeter
      ],
      tags: [
        tagReact, tagReactStatic, tagSCSS
      ]
    },
    {
      title: "Personal Website v3 - React",
      titlelink: "https://github.com/fortierpm/fortierpmv3-react",
      date: "Apr 8, 2021",
      thumb: thumbFortierpmv3React,
      thumblink: "https://fortierpmv3-react.netlify.app/",
      authors: [
        authorPeter
      ],
      tags: [
        tagReact, tagJS, tagSCSS
      ]
    },
    {
      title: "Slime Card Demo",
      titlelink: "https://github.com/fortierpm/slime-card-demo",
      date: "Sep 4, 2021",
      thumb: thumbSlimeCardDemo,
      thumblink: "https://fortierpm-slime-card.netlify.app/",
      authors: [
        authorPeter
      ],
      tags: [
        tagReact, tagSVG, tagCSS
      ]
    },
    {
      title: "Absorb Demo",
      titlelink: "https://github.com/fortierpm/absorb-demo",
      date: "Aug 12, 2021",
      thumb: thumbAbsorbDemo,
      thumblink: "https://fortierpm-absorb-demo.netlify.app/",
      authors: [
        authorPeter
      ],
      tags: [
        tagReact, tagSVG, tagCSS
      ]
    },
    {
      title: "Advanced Dropdown Menu",
      titlelink: "https://github.com/fortierpm/advanced-dropdown",
      date: "Sep 12, 2021",
      thumb: thumbAdvancedDrop,
      thumblink: "https://fortierpm.github.io/advanced-dropdown/",
      authors: [
        authorPeter
      ],
      tags: [
        tagReact, tagJS, tagCSS
      ]
    }
  ],
  "Javascript": [
    {
      title: "Personal Website v3 - Vanilla JS",
      titlelink: "https://github.com/fortierpm/fortierpmv3",
      date: "Mar 22, 2021",
      thumb: thumbFortierpmv3,
      thumblink: "https://fortierpm.github.io/fortierpmv3/",
      authors: [
        authorPeter
      ],
      tags: [
        tagJS,
        tagSCSS,
        tagHTML
      ]
    },
    {
      title: "Dice Tower - Discord Bot",
      titlelink: "https://github.com/fortierpm/dice-tower",
      date: "Feb 1, 2022",
      thumb: thumbDiceTower,
      thumblink: "https://github.com/fortierpm/dice-tower",
      authors: [
        authorPeter
      ],
      tags: [
        tagDiscordBot,
        tagJS,
        tagReplit
      ]
    },
    {
      title: "Animated Page Open",
      titlelink: "https://github.com/fortierpm/animated-open",
      date: "Jan 22, 2021",
      thumb: thumbAnimOpen,
      thumblink: "https://fortierpm.github.io/animated-open/",
      authors: [
        authorPeter
      ],
      tags: [
        tagJS,
        tagGSAP,
        tagCSS
      ]
    },
    {
      title: "Before-After Slider",
      titlelink: "https://github.com/fortierpm/before-after-slider",
      date: "Feb 27, 2021",
      thumb: thumbBeforeAfter,
      thumblink: "https://fortierpm.github.io/before-after-slider/",
      authors: [
        authorPeter
      ],
      tags: [
        tagJS,
        tagCSS,
        tagHTML
      ]
    },
    {
      title: "Text Particles",
      titlelink: "https://github.com/fortierpm/text-particles",
      date: "Aug 23, 2021",
      thumb: thumbTextParts,
      thumblink: "https://fortierpm.github.io/text-particles/",
      authors: [
        authorPeter
      ],
      tags: [
        tagJS,
        tagCSS,
        tagHTMLCanvas
      ]
    },
    {
      title: "Constellations Demo",
      titlelink: "https://github.com/fortierpm/constellations-demo",
      date: "Aug 23, 2021",
      thumb: thumbConstellations,
      thumblink: "https://fortierpm.github.io/constellations-demo/",
      authors: [
        authorPeter
      ],
      tags: [
        tagJS,
        tagCSS,
        tagHTMLCanvas
      ]
    },
    {
      title: "Mouse Particles Animation",
      titlelink: "https://github.com/fortierpm/mouse-particles-animation",
      date: "Aug 23, 2021",
      thumb: thumbMouseParts,
      thumblink: "https://fortierpm.github.io/mouse-particles-animation/",
      authors: [
        authorPeter
      ],
      tags: [
        tagJS,
        tagCSS,
        tagHTMLCanvas
      ]
    },
    {
      title: "Fluid Image Popups",
      titlelink: "https://github.com/fortierpm/fluid-popups",
      date: "Jan 22, 2021",
      thumb: thumbImagePopup,
      thumblink: "https://fortierpm.github.io/fluid-popups/",
      authors: [
        authorPeter
      ],
      tags: [
        tagJS,
        tagCSS,
        tagHTML
      ]
    }
  ],
  "CSS": [
    {
      title: "Card Tricks (Fork)",
      titlelink: "https://github.com/fortierpm/card-tricks",
      date: "Sep 28, 2021",
      thumb: thumbCardTricks,
      thumblink: "https://fortierpm.github.io/card-tricks/",
      authors: [
        authorJeff,
        authorPeter
      ],
      tags: [
        tagCSS,
        tagHTML,
        tagSVG
      ]
    },
    {
      title: "Animated Grid",
      titlelink: "https://github.com/fortierpm/animated-grid",
      date: "Sep 12, 2021",
      thumb: thumbAnimGrid,
      thumblink: "https://fortierpm.github.io/animated-grid/",
      authors: [
        authorPeter
      ],
      tags: [
        tagCSS,
        tagHTML
      ]
    },
    {
      title: "Animated Logo",
      titlelink: "https://github.com/fortierpm/animated-logo",
      date: "Jan 18, 2021",
      thumb: thumbAnimLogo,
      thumblink: "https://fortierpm.github.io/animated-logo/",
      authors: [
        authorPeter
      ],
      tags: [
        tagCSS,
        tagSVG,
        tagHTML
      ]
    },
    {
      title: "No JS Carousel",
      titlelink: "https://github.com/fortierpm/nojs-carousel",
      date: "Jan 23, 2021",
      thumb: thumbNoJSCarousel,
      thumblink: "https://fortierpm.github.io/nojs-carousel/",
      authors: [
        authorPeter
      ],
      tags: [
        tagCSS,
        tagHTML
      ]
    }
  ],
  "Python": [
    {
      title: "Interactive London Guide",
      titlelink: "https://github.com/fortierpm/london-interactive-guide",
      date: "May 25, 2021",
      thumb: thumbLondon,
      thumblink: "https://github.com/fortierpm/london-interactive-guide",
      authors: [
        authorPeter, authorJacob, authorElle
      ],
      tags: [
        tagPython,
        tagTkinter,
        tagPillow
      ]
    }
  ],
  "Vector Graphics": [
    {
      title: "Cosmos Series",
      titlelink: "https://imgur.com/a/5lIXxfK",
      date: "Dec 4, 2020",
      thumb: "https://i.imgur.com/WN2d1i2.jpg",
      thumblink: "https://imgur.com/a/5lIXxfK",
      authors: [
        authorPeter
      ],
      tags: [
        tagVector,
        tagSVG,
        tagAffDesigner
      ]
    },
    {
      title: "Quiet Series",
      titlelink: "https://imgur.com/a/iroiygc",
      date: "Apr 25, 2020",
      thumb: "https://i.imgur.com/pfQHelb.jpg",
      thumblink: "https://imgur.com/a/iroiygc",
      authors: [
        authorPeter
      ],
      tags: [
        tagVector,
        tagSVG,
        tagAffDesigner
      ]
    },
    {
      title: "Other Isometric",
      titlelink: "https://imgur.com/a/5Vl0MnV",
      date: "Apr 25, 2020",
      thumb: "https://i.imgur.com/tbD6zss.jpg",
      thumblink: "https://imgur.com/a/5Vl0MnV",
      authors: [
        authorPeter
      ],
      tags: [
        tagVector,
        tagSVG,
        tagAffDesigner
      ]
    }
  ],
  "Art": [
    {
      title: "Paper - HS",
      titlelink: "https://imgur.com/a/bdOHWG3",
      date: "May 1, 2020",
      thumb: "https://i.imgur.com/XcTFp4i.jpg",
      thumblink: "https://imgur.com/a/bdOHWG3",
      authors: [
        authorPeter
      ],
      tags: [
        tagPaperCol,
        tagModPodge
      ]
    },
    {
      title: "Watercolor - HS",
      titlelink: "https://imgur.com/a/vCNmvhF",
      date: "May 1, 2020",
      thumb: "https://i.imgur.com/W8mzvlR.jpg",
      thumblink: "https://imgur.com/a/vCNmvhF",
      authors: [
        authorPeter
      ],
      tags: [
        tagWatercolor,
        tagBlackPen
      ]
    },
    {
      title: "Print - HS",
      titlelink: "https://imgur.com/a/kfB4FT9",
      date: "May 1, 2020",
      thumb: "https://i.imgur.com/GUPgke8.jpg",
      thumblink: "https://imgur.com/a/kfB4FT9",
      authors: [
        authorPeter
      ],
      tags: [
        tagPrintArt,
        tagDrypoint
      ]
    }
  ]
}

// TO BE DEPRECATED
// const handleProjects = (projectsObject) => {
//   const projectGroupKeys = Object.keys(projectsObject);
//   for (let i = 0; i < projectGroupKeys.length; i++) {
//     let projectGroup = projectGroupKeys[i];
//     for (let j = 0; j < projectsObject[projectGroup].length; j++) {
//       let project = projectsObject[projectGroup][j];
//       if (project.featured) {
//         projectsObject["Featured"].splice(project.featured - 1, 0, { ...project });
//       }
//     }
//   }
//   return projectsObject;
// }

// NEW FEATURED PROJECTS HANDLER
const handleFeatProjects = (projectsObject) => {
  /*  \/ TODO \/  : Remove necessity of this initialization for "Featured" */
  for (let k = 0; k < featuredList.length; k++) {
    projectsObject["Featured"].push(0);
  }
  /*  /\ TODO /\  */
  const projectGroupKeys = Object.keys(projectsObject);
  for (let i = 0; i < projectGroupKeys.length; i++) {
    const projectGroup = projectGroupKeys[i];
    for (let j = 0; j < projectsObject[projectGroup].length; j++) {
      const project = projectsObject[projectGroup][j];
      if (featuredList.includes(project.title)) {
        const featIdx = featuredList.indexOf(project.title);
        // console.log(project.title, featIdx);
        projectsObject["Featured"].splice(featIdx, 1, { ...project });
        // console.log(projectsObject["Featured"]);
      }
    }
  }
  return projectsObject;
}

const projects = handleFeatProjects(projectsArrange);

export default projects;

