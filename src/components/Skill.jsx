import React from 'react'
import SkillCard from './SkillCard';

const skillItem = [
  {
    imgSrc: 'images/python.svg',
    label: 'Python',
    desc: 'Programming Language'
  },
  {
    imgSrc: 'images/react.svg',
    label: 'Spring Boot',
    desc: 'Java Framework'
  },
  {
    imgSrc: 'images/react.svg',
    label: 'Angular',
    desc: 'Frontend Framework'
  },
  {
    imgSrc: 'images/javascript.svg',
    label: 'JavaScript',
    desc: 'Programming'
  },
  {
    imgSrc: 'images/docker.webp',
    label: 'Docker',
    desc: 'Containerization'
  },
  {
    imgSrc: 'images/kube.webp',
    label: 'Kubernetes',
    desc: 'Orchestration'
  },
  {
    imgSrc: 'images/gitactions.webp',
    label: 'CI/CD',
    desc: 'Git Actions'
  },
  {
    imgSrc: 'images/devops.webp',
    label: 'DevOps',
    desc: 'Automation'
  },
];

const Skill = () => {
  return (
      <section className="section relative overflow-hidden">
          {/* Background gradient effects */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          
          <div className="container relative z-10">
              <h2 className="headline-2 reveal-up bg-gradient-to-r from-zinc-50 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Essential Tools I use
              </h2>
              <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                  Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
              </p>
              <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                  {
                      skillItem.map(({ imgSrc, label, desc }, key) =>
                      (
                          <SkillCard
                              key={key}
                              imgSrc={imgSrc}
                              label={label}
                              desc={desc}
                              classes="reveal-up"
                          />
                    ))
                  }
              </div>
          </div>
    </section>
  )
}

export default Skill
