import React from "react";
import { ButtonPrimary, ButtonOutline } from "./Button";
import SpaceScene from "./SpaceScene";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36 relative overflow-hidden min-h-screen flex items-center">
      {/* 3D Space Background */}
      <SpaceScene />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10 relative z-10">
        <div className="reveal-up">
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg ring-2 ring-sky-400/50">
              <img
                src="images/avatar-1.jpg"
                width={40}
                height={40}
                alt="Ramzi haj massoud Portrait"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1 max-w-[18ch] sm:max-w-[24ch] lg:max-w-[20] mt-5 mb-4 lg:mb-6 drop-shadow-2xl">
            DevOps Engineer
          </h2>
          <p className="text-zinc-300 max-w-[40ch] mb-3 text-sm sm:text-base">
            I bring infrastructure, automation and deployment together to turn ideas into robust, scalable and reliable systems.
          </p>
          <div className="grid gap-3 mb-6 text-xs sm:text-sm">
            <div>
              <p className="text-zinc-300 font-medium mb-1">DevOps & Infrastructure</p>
              <p className="text-zinc-400">
                Git, GitHub, GitLab, Docker, Docker Compose, Jenkins, Kubernetes and Azure Cloud.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ButtonPrimary 
              label="View my Projects" 
              icon="arrow_forward"
              href="#work"
            />
            <ButtonOutline
              href="#contact"
              label="Contact Me"
              icon="mail"
            />
          </div>
        </div>
        <div className="hidden lg:block relative reveal-up">
          <div className="w-full max-w-[380px] ml-auto relative">
            {/* Professional Photo */}
            <figure className="relative group">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative rounded-full overflow-hidden border-4 border-zinc-800/50 backdrop-blur-sm bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 aspect-square">
                <img
                  src="images/ramzi2111.png"
                  alt="Ramzi Haj Massoud - Full Stack Developer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                  style={{
                    filter: 'brightness(1.1) contrast(1.15) saturate(1.2)',
                    mixBlendMode: 'luminosity',
                    opacity: 0.95
                  }}
                />
                
                {/* Overlay gradient - hero banner style */}
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 via-sky-700/20 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-sky-400/10 to-purple-600/30 pointer-events-none"></div>
                
                {/* Tech badge overlay - centered at bottom */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-zinc-900/80 rounded-full px-4 py-2 border border-sky-400/40 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-sky-400 font-semibold text-xs whitespace-nowrap">DevOps Engineer</span>
                </div>
              </div>
              
              {/* Floating code elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl rotate-12 flex items-center justify-center text-white font-bold text-xl shadow-2xl animate-bounce">
                &lt;/&gt;
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl -rotate-12 flex items-center justify-center text-white font-bold shadow-2xl" style={{ animationDelay: '0.5s' }}>
                { }
              </div>
            </figure>
            
            {/* Tech stack below photo */}
            <div className="mt-6 text-center backdrop-blur-sm bg-zinc-900/40 rounded-2xl p-3 border border-zinc-700/50">
              <p className="text-zinc-400 text-xs mb-2">Tech Stack</p>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-medium border border-emerald-500/40">Docker</span>
                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium border border-indigo-500/40">Kubernetes</span>
                <span className="px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-xs font-medium border border-sky-500/30">GitHub Actions</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-200 rounded-full text-xs font-medium border border-amber-500/40">CI/CD Pipelines</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
