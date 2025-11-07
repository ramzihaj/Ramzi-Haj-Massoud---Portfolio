import React from "react";
import { ButtonPrimary, ButtonOutline } from "./Button";
import SpaceScene from "./SpaceScene";
import Avatar3D from "./Avatar3D";

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
                src="/images/avatar-1.jpg"
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
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15] mt-5 mb-8 lg:mb-10 drop-shadow-2xl">
            Building Scalable Modern Websites for the Future
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" />
            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>
        <div className="hidden lg:block relative reveal-up">
          <div className="w-full max-w-[480px] h-[600px] ml-auto relative">
            {/* 3D Avatar */}
            <div className="absolute inset-0">
              <Avatar3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
