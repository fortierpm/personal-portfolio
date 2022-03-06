const skills = {
  "Frontend": [
    {
      name: "HTML",
      description: "markup language",
      proficiency: 1,
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
      proficiency: 1,
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
          name: "Regex",
          proficiency: 0.5
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
      proficiency: 0.8,
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
      description: "JavaScript library for 3D visuals",
      proficiency: 0.5,
      subSkillList: []
    },
    {
      name: "GSAP",
      description: "JavaScript library for animations",
      proficiency: 0.5,
      subSkillList: []
    },
    {
      name: "D3.js",
      description: "JavaScript library for interative data graphics",
      proficiency: 0.4,
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
      name: "C/C++",
      description: "OOP language",
      proficiency: 0.9,
      subSkillList: [
        {
          name: "Dynamic memory",
          proficiency: 0.9
        },
        {
          name: "Pointers",
          proficiency: 1
        },
        {
          name: "Structs and Classes",
          proficiency: 0.9
        },
        {
          name: "File Reading/Writing",
          proficiency: 0.8
        }
      ]
    },
    {
      name: "Node.js",
      description: "JavaScript runtime environment",
      proficiency: 0.7,
      subSkillList: [
        {
          name: "npm package manager - npm and npx",
          proficiency: 0.7,
        }
      ]
    },
    {
      name: "JSON",
      description: "Data storage file format",
      proficiency: 0.9,
      subSkillList: []
    },
    {
      name: "Bash",
      description: "Linux shell and command language",
      proficiency: 0.7,
      subSkillList: [
        {
          name: "Git commands",
          proficiency: 0.9
        },
        {
          name: "Bash with C/C++",
          proficiency: 0.8
        },
        {
          name: "Directory/file creation & navigation",
          proficiency: 0.9
        },
        {
          name: "Directory/file permission control",
          proficiency: 0.6
        },
      ]
    },
    {
      name: "Firebase",
      description: "Google-backed application development software",
      proficiency: 0.5,
      subSkillList: []
    },
  ],
  "Integrated Development Environments": [
    {
      name: "Visual Studio Code",
      description: "IDE",
      proficiency: 0.9,
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
    },
    {
      name: "Replit",
      description: "Online Collaborative IDE",
      proficiency: 0.8,
      subSkillList: [
        {
          name: "Repl Databases",
          proficiency: 0.7
        },
        {
          name: "Secrets/Environment Variables",
          proficiency: 1
        },
        {
          name: "Express Webservers",
          proficiency: 0.6
        }
      ]
    }
  ],
  "Version Control": [
    {
      name: "GitHub",
      description: "web-hosted Git repository manager",
      proficiency: 0.8,
      subSkillList: []
    },
    {
      name: "GitLab",
      description: "web-hosted Git repository manager",
      proficiency: 0.3,
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
      description: "static site hosting service for GitHub repos",
      proficiency: 0.8,
      subSkillList: []
    },
    {
      name: "Netlify",
      description: "hosting and serverless backend services for web applications",
      proficiency: 0.8,
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
  "Math/Data Science Technologies": [
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
    {
      name: "R",
      description: "language for statistical computing and graphics",
      proficiency: 0.6,
      subSkillList: [
        {
          name: "RStudio",
          proficiency: 0.8
        },
        {
          name: "tidyverse",
          proficiency: 0.6
        },
        {
          name: "deplyr",
          proficiency: 0.6
        },
        {
          name: "ggplot2",
          proficiency: 0.8
        }
      ]
    },
    {
      name: "Microsoft Excel",
      description: "Spreadsheet and data handling software",
      proficiency: 0.8,
      subSkillList: []
    },
  ]
};

export default skills;
