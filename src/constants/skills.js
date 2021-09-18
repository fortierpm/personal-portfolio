const skillList = {
    frontend: [
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
            name: "Next.js",
            description: "JavaScript development framework",
            proficiency: 0.8,
            subSkillList: [
                {
                    name: "SSG",
                    proficiency: 0.6,
                },
                {
                    name: "Routing",
                    proficiency: 0.8,
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
    backend: [
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
            description: "JavaScript runtime environment",
            proficiency: 0.6,
            subSkillList: []
        },
    ],
    integratedDevelopmentEnvironments: [
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
                    name: "Extensions, config.json's, and customization",
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
    versionControl: [
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
    webHosting: [
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
    prototyping: [
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
                    name: "SVG Export",
                    proficiency: 0.9,
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
    imageEditing: [
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
        }
    ],
    mathTechnologies: [
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
export default skillList;