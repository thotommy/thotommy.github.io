import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'

export const MainTitleScreen: React.FC = () => {
  // const [count, setCount] = useState<number>(0);
            // animate-bounce hover:opacity-0 transition-opacity duration-200
  const [isHovered, setHovered] = useState(false);
  const [isNavShown, setNavShown] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    setNavShown(true);
  };

  const handleMouseLeave = () => {
    console.log("mouse leave")
    setHovered(false);
    setNavShown(false);
  };

  const handleAnimationEnd = () => {
    console.log("handleanend is" + isHovered)
    if (isHovered) {
      setNavShown(true);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center gap-y-10 h-screen font-medium mt-[-4rem]">
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
      <div className={`animate-bounce ${isHovered ? 'opacity-0' : 'opacity-100'}`} id="arrow" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onAnimationEnd={handleAnimationEnd}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="currentColor" className="w-10 h-10">
          <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
        </svg>
      </div>
      <div className={`absolute transition-opacity duration-500 ${isNavShown ? 'opacity-100' : 'opacity-0'}`}>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#">Projects</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
      {/* <div className={`${isNavShown ? 'animate-fade-in' : 'hidden'}`} id="nav">
        <div>hey there</div>
      </div> */}
    </div>
        
    </div>
  );
}