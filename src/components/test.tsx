import React, { useState } from 'react';

const BouncingDivWithNavigation: React.FC = () => {
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
    <div className="flex items-center justify-center h-screen">
      {showBouncingDiv && (
        <div
          id="bounceIcon"
          className={`animate-bounce bg-blue-500 text-white transition-opacity duration-500 ease-in-out ${
            showBouncingDiv ? 'opacity-100' : 'opacity-0'
          }`}
          onMouseEnter={handleBouncingDivMouseEnter}
        >
          <svg className="icon w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14H8v-2h2v2zm0-4H8V8h2v4zm4 4h-2v-2h2v2zm0-4h-2V8h2v6zm2-8h-1.58l-1-2H9.58l-1 2H6v2h12V6z" />
          </svg>
        </div>
      )}
      {showNavigation && (
        <div
          id="navElement"
          className={`navigation bg-gray-200 text-gray-800 rounded-lg p-4 ml-4 cursor-pointer transition-opacity duration-500 ease-in-out ${
            showNavigation ? 'opacity-100' : 'opacity-0'
          }`}
          onAnimationEnd={() => {
            if (!showNavigation) {
              setShowNavigation(true);
            }
          }}
          onMouseLeave={handleNavigationMouseLeave}
        >
          <nav>
          <ul className="flex space-x-4">
            <li><a href="#">Projects</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        </div>
      )}
    </div>
  );
};

export default BouncingDivWithNavigation;
