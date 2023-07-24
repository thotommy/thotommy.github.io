import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'

export const MainTitleScreen: React.FC = () => {
  const [showBouncingDiv, setShowBouncingDiv] = useState(true);
  const [showNavigation, setShowNavigation] = useState(false);

  const handleBouncingDivMouseEnter = () => {
    setShowNavigation(true);
    setShowBouncingDiv(false);
  };

  const handleNavigationMouseLeave = () => {
    setShowBouncingDiv(true);
    setShowNavigation(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-10 h-screen font-medium mt-[-7rem]">
        <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-8xl">Tommy Ho</h1>
        <h2 className="sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl"><Typewriter
            words={['Software Engineer', 'Full Stack Developer', 'Angular Developer']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></h2>

      <div className="absolute mt-[39rem]">
        {showBouncingDiv && (
          <div className={`animate-bounce transition-opacity duration-500 ease-in-out ${
                showBouncingDiv ? 'opacity-100' : 'opacity-0'
              }`}id="arrow" onMouseEnter={handleBouncingDivMouseEnter} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="currentColor" className="w-10 h-10">
              <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        {showNavigation && (
          <div className={`transition-opacity duration-500 ease-in-out ${
            showNavigation ? 'opacity-100' : 'opacity-0'
          }`}
          onAnimationEnd={() => {
            if (!showNavigation) {
              setShowNavigation(true);
            }
          }}
          onMouseLeave={handleNavigationMouseLeave}>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="projects">Projects</a></li>
                <li><a href="skills">Skills</a></li>
                <li><a href="contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}