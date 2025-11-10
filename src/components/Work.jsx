import React from "react";
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "images/project-1.jpg",
    title: "License Plate Detection System",
    tags: ["AI", "Computer Vision", "Real-time"],
    projectLink: "#",
  },
  {
    imgSrc: "images/project-2.jpg",
    title: "IT-Learning Platform",
    tags: ["Full Stack", "AI", "Education"],
    projectLink: "#",
  },
  {
    imgSrc: "images/project-3.jpg",
    title: "Modern Cafe Management System",
    tags: ["Spring Boot", "Angular", "Management"],
    projectLink: "#",
  },
  {
    imgSrc: "images/project-4.jpg",
    title: "Furniture E-commerce Tunisia",
    tags: ["E-commerce", "Full Stack", "Angular"],
    projectLink: "#",
  },
];

const Work = () => {
  return (
    <section id="work" className="section relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="container relative z-10">
        <h2 className="headline-2 mb-8 reveal-up bg-gradient-to-r from-zinc-50 via-sky-400 to-purple-400 bg-clip-text text-transparent">
          My portfolio highlights
        </h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
