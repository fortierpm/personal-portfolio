const skills = {
  "Frontend": [
    {
      name: "HTML",
      description: "markup language",
      proficiency: 0.9, // scale of (0-10) / 10
      subSkillList: [
        {
          name: "Semantic HTML",
          proficiency: 0.9, // scale of (0-10) / 10
        },
        {
          name: "Accessible HTML",
          proficiency: 0.9,
        },
        {
          name: "XHTML",
          proficiency: 0.8,
        },
        {
          name: "SVG",
          proficiency: 1
        }
      ]
    },
    {
      name: "CSS",
      description: "style sheet language",
      proficiency: 0.9,
      subSkillList: [
        {
          name: "Sass",
          proficiency: 0.9,
        },
        {
          name: "Bootstrap",
          proficiency: 0.7,
        },
        {
          name: "PostCSS",
          proficiency: 0.5,
        }
      ]
    },
    {
      name: "JavaScript",
      description: "OOP language",
      proficiency: 0.9,
      subSkillList: [
        {
          name: "ES6",
          proficiency: 0.9,
        },
        {
          name: "DOM",
          proficiency: 0.9,
        },
        {
          name: "TypeScript",
          proficiency: 0.7,
        },
        {
          name: "jQuery",
          proficiency: 0.5,
        }
      ]
    },
    {
      name: "React.js",
      description: "JavaScript library",
      proficiency: 0.8,
      subSkillList: [
        {
          name: "State",
          proficiency: 0.8,
        },
        {
          name: "Functional Components and Props",
          proficiency: 0.8,
        },
        {
          name: "Hooks",
          proficiency: 0.8,
        }
      ]
    },
    {
      name: "react-static",
      description: "React.js static site generator",
      proficiency: 0.7,
      subSkillList: [
        {
          name: "react-static <Head>",
          proficiency: 0.9
        }
      ]
    },
    {
      name: "Next.js",
      description: "React.js development framework",
      proficiency: 0.6,
      subSkillList: [
        {
          name: "CSS Modules",
          proficiency: 0.9,
        },
        {
          name: "'next/head' <Head>",
          proficiency: 0.9,
        },
        {
          name: "SSG",
          proficiency: 0.6,
        }
      ]
    },
    {
      name: "Three.js",
      description: "JavaScript library",
      proficiency: 0.6,
      subSkillList: []
    },
    {
      name: "GSAP",
      description: "JavaScript library",
      proficiency: 0.6,
      subSkillList: []
    }
  ],
  "Backend": [
    {
      name: "Python",
      description: "OOP language",
      proficiency: 0.9,
      subSkillList: [
        {
          name: "Tkinter",
          proficiency: 0.8,
        },
        {
          name: "Pillow",
          proficiency: 0.8,
        }
      ]
    },
    {
      name: "Node.js",
      description: "JavaScript runtime environment",
      proficiency: 0.7,
      subSkillList: [
        {
          name: "npm - Node package manager",
          proficiency: 0.7,
        },
        {
          name: "npx - npm package runner",
          proficiency: 0.7,
        }
      ]
    },
    {
      name: "C++",
      description: "OOP language",
      proficiency: 0.6,
      subSkillList: []
    },
  ],
  "Integrated Development Environments": [
    {
      name: "Visual Studio Code",
      description: "IDE",
      proficiency: 0.8,
      subSkillList: [
        {
          name: "Localhost",
          proficiency: 1
        },
        {
          name: "Snippets",
          proficiency: 1
        },
        {
          name: "Shortcuts",
          proficiency: 0.8
        },
        {
          name: "Source control with Git",
          proficiency: 0.8
        },
        {
          name: "Extensions, .json's, customization",
          proficiency: 1
        },
      ]
    },
    {
      name: "Atom",
      description: "IDE",
      proficiency: 0.7,
      subSkillList: []
    }
  ],
  "Version Control": [
    {
      name: "Github",
      description: "internet hosted version control using Git",
      proficiency: 0.8,
      subSkillList: []
    },
    {
      name: "Git",
      description: "version control software",
      proficiency: 0.6,
      subSkillList: []
    },
  ],
  "Web Hosting": [
    {
      name: "Github Pages",
      description: "version control software",
      proficiency: 0.9,
      subSkillList: []
    },
    {
      name: "Netlify",
      description: "version control software",
      proficiency: 0.9,
      subSkillList: []
    }
  ],
  "Prototyping": [
    {
      name: "Figma",
      description: "layout prototyping tool",
      proficiency: 0.8,
      subSkillList: [
        {
          name: "Prototype smart animations",
          proficiency: 0.9,
        },
        {
          name: "Smart selection",
          proficiency: 0.9,
        },
        {
          name: "SVG Export",
          proficiency: 1,
        }
      ]
    },
    {
      name: "Affinity Designer",
      description: "vector graphics editor",
      proficiency: 0.9,
      subSkillList: [
        {
          name: "Masks",
          proficiency: 1,
        },
        {
          name: "Filters",
          proficiency: 0.9,
        },
        {
          name: "SVG Export",
          proficiency: 1
        }
      ]
    },
    {
      name: "InDesign",
      description: "vector graphics editor",
      proficiency: 0.5,
      subSkillList: []
    }
  ],
  "Image Editing": [
    {
      name: "Affinity Photo",
      description: "raster graphics editor",
      proficiency: 0.9,
      subSkillList: [
        {
          name: "Masks",
          proficiency: 1,
        },
        {
          name: "Post-processing",
          proficiency: 0.9,
        },
        {
          name: "Perspective manipulation",
          proficiency: 0.9
        }
      ]
    },
    {
      name: "Photoshop",
      description: "raster graphics editor",
      proficiency: 0.5,
      subSkillList: []
    }
  ],
  "Math Technologies": [
    {
      name: "Mathematica",
      description: "mathematical computation program",
      proficiency: 0.8,
      subSkillList: [
        {
          name: "Graphics and Plots",
          proficiency: 0.8,
        },
        {
          name: "Loops",
          proficiency: 1,
        }
      ]
    },
    {
      name: "LaTeX",
      description: "document preparation system",
      proficiency: 0.4,
      subSkillList: []
    },
  ]
};

export default skills;