import thumb1 from "../img/project-thumb.jpg";

import peterFortier from "../img/author.jpg";
import jacobMerrick from "../img/author.jpg";


let projectsArrange = {
  "Featured": [],
  "React": [
    {
      title: "Project 1",
      date: "Sep 17, 2021",
      thumb: thumb1,
      authors: [
        ["Peter Fortier", peterFortier, "https://google.com"],
      ],
      tags: [
        ["HTML", "#skills"],
        ["CSS", "#skills"],
        ["JavaScript", "#skills"]
      ],
      featured: 2
    },
    {
      title: "Project 2",
      date: "Sep 17, 2021",
      thumb: thumb1,
      authors: [
        ["Peter Fortier", peterFortier, "https://google.com"],
        ["Jacob Merrick", jacobMerrick, "https://google.com"]
      ],
      tags: [
        ["HTML", "#skills"],
        ["CSS", "#skills"],
        ["JavaScript", "#skills"]
      ],
      featured: 1
    }
  ],
  "Javascript": [
    {
      title: "Project 3",
      date: "Sep 17, 2021",
      thumb: thumb1,
      authors: [
        ["Peter Fortier", peterFortier, "https://google.com"],
        ["Jacob Merrick", jacobMerrick, "https://google.com"]
      ],
      tags: [
        ["HTML", "#skills"],
        ["CSS", "#skills"],
        ["JavaScript", "#skills"]
      ],
      featured: 4
    }
  ],
  "CSS": [
    {
      title: "Project 4",
      date: "Sep 17, 2021",
      thumb: thumb1,
      authors: [
        ["Peter Fortier", peterFortier, "https://google.com"],
        ["Jacob Merrick", jacobMerrick, "https://google.com"]
      ],
      tags: [
        ["HTML", "#skills"],
        ["CSS", "#skills"],
        ["JavaScript", "#skills"]
      ],
      featured: 3
    }
  ],
  "Python": [
    {
      title: "Project 5",
      date: "Sep 17, 2021",
      thumb: thumb1,
      authors: [
        ["Peter Fortier", peterFortier, "https://google.com"],
        ["Jacob Merrick", jacobMerrick, "https://google.com"]
      ],
      tags: [
        ["HTML", "#skills"],
        ["CSS", "#skills"],
        ["JavaScript", "#skills"]
      ],
      featured: 5
    }
  ],
  "Vector Graphics": [
    {
      title: "Project 6",
      date: "Sep 17, 2021",
      thumb: thumb1,
      authors: [
        ["Peter Fortier", peterFortier, "https://google.com"],
        ["Jacob Merrick", jacobMerrick, "https://google.com"]
      ],
      tags: [
        ["HTML", "#skills"],
        ["CSS", "#skills"],
        ["JavaScript", "#skills"]
      ],
      featured: 6
    }
  ]
}


//const projectGroupKeys = Object.keys(projectsArrange);

const handleProjects = (projectsObject) => {
  const projectGroupKeys = Object.keys(projectsObject);
  for (let i = 0; i < projectGroupKeys.length; i++) {
    let projectGroup = projectGroupKeys[i];
    for (let j = 0; j < projectsObject[projectGroup].length; j++) {
      let project = projectsObject[projectGroup][j];
      // console.log("project:", project);
      if (project.featured) {
        projectsObject["Featured"].splice(project.featured-1, 0, {...project});
      }
    }
  }
  // console.log("projects:", projectsObject);
  return projectsObject;
}

const projects = handleProjects(projectsArrange);

export default projects;