import React, { useState } from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={`relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-all duration-300 group overflow-hidden ${classes}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-10px) rotateX(5deg)' : 'translateY(0) rotateX(0deg)',
        boxShadow: isHovered ? '0 20px 40px rgba(56,189,248,0.2)' : '0 0 0 rgba(0,0,0,0)',
      }}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/50 via-purple-500/50 to-pink-500/50 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
      
      {/* Content wrapper */}
      <div className="relative bg-zinc-800 rounded-2xl p-4">
        <figure className="img-box aspect-square rounded-lg mb-4 overflow-hidden relative">
          <img 
            src={imgSrc} 
            alt={title} 
            loading="lazy" 
            className="img-cover group-hover:scale-110 transition-transform duration-500" 
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-sky-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </figure>
        
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="title-1 mb-3 group-hover:text-sky-400 transition-colors duration-300">{title}</h3>
            <div className="flex flex-wrap items-center gap-2">
              {tags.map((label, key) => (
                <span 
                  key={key} 
                  className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg group-hover:bg-sky-400/20 group-hover:text-sky-300 transition-all duration-300"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0 group-hover:bg-purple-500 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            <span className="material-symbols-rounded" aria-hidden="true">
              arrow_outward
            </span>
          </div>
        </div>
      </div>
      
      <a href={projectLink} target="_blank" className="absolute inset-0"></a>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default ProjectCard;
