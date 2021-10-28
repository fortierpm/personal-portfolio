import React from "react";

const ProjectCard = ({ project, year, month, day }) => {
  const singleAuthor = project.authors.length === 1;
  return (
    <article className="project-card">
      <div className="card-title">
        <p className="card-date"><time dateTime={`${year}-${month}-${day}`}>{project.date}</time></p>
        <h3><a href="#">{project.title}</a></h3>
      </div>
      <img className="card-thumb" src={project.thumb} alt="Project thumbnail" />
      <address className={`card-authorship ${singleAuthor ? "single" : ""}`}>
        <a className="author1-avatar" rel="author" href={project.authors[0][2]} >
          <img className="avatar-img" src={project.authors[0][1]} alt="" />
        </a>
        <div className="author-list">
          <div className="author-prefix">{singleAuthor ? "Designer" : "Designers"}</div>
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
}

export default ProjectCard;