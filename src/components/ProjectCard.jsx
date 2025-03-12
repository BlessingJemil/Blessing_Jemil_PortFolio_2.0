import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, duration,role, classes }) => {
  return (
    <div
      className={`relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors cursor-pointer ${classes}`}
    >
      <figure className="img-box aspect-square rounded-lg mb-4">
        <img src={imgSrc[0]} alt={title} loading="lazy" className="img-cover" />
      </figure>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-1">{title}</h3>
          <p className="text-sm font-medium mb-2">
              {role} 
            </p>
          <p className=" text-sm text-zinc-200  grid items-center px-0 rounded-lg mb-3">
            {duration}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-300 bg-zinc-50/5 grid items-center px-3 rounded-lg"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
