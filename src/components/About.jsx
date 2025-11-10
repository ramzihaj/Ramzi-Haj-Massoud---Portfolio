import React from "react";

const aboutItems = [
  {
    label: "Projects Completed",
    number: 4,
  },
  {
    label: "Technologies Mastered",
    number: 8,
  },
];

const About = () => {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up backdrop-blur-sm border border-zinc-700/50 hover:border-sky-400/50 transition-all duration-500 group">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
          
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] relative z-10 leading-relaxed">
            Welcome! I&apos;m Ramzi, a Full Stack Java Developer specialized 
            in creating modern and high-performance web applications. 
            Expert in Spring Boot, Angular, and DevOps technologies (Docker, Kubernetes, CI/CD), 
            I transform your ideas into robust and scalable digital solutions. 
            Passionate about innovation and technical excellence.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7 relative z-10">
            {aboutItems.map(({ label, number }, key) => (
              <div 
                key={key}
                className="group/stat hover:scale-110 transition-transform duration-300"
              >
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">{number}</span>
                  <span className="text-sky-400 font-semibold md:text-3xl animate-pulse">+</span>
                </div>
                <p className="text-sm text-zinc-400 group-hover/stat:text-zinc-300 transition-colors">{label}</p>
              </div>
            ))}
            <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px] hover:rotate-180 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
