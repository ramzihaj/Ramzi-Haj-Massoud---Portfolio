import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes }
) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
      <div 
        className={`flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-all duration-300 group relative overflow-hidden ${classes}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'translateY(-5px) scale(1.02)' : 'translateY(0) scale(1)',
        }}
      >
          {/* Animated gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br from-sky-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
          
          {/* Shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>
          
          <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 p-2 h-12 group-hover:bg-zinc-900 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10">
              <img
                  src={imgSrc}
                  alt={label}
                  width={32}
                  height={32}
                  className="w-full h-full object-contain group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
              />
          </figure>
          <div className="relative z-10">
              <h3 className="font-semibold group-hover:text-sky-400 transition-colors duration-300">
                  {label}
              </h3>
              <p className="text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors duration-300">
                  {desc}
              </p>
          </div>
    </div>
  )
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string,
}

export default SkillCard
