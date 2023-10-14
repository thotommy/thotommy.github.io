import type React from 'react';

export const NavComponent: React.FC = () => {
    return(
        <nav>
        <ul className="flex space-x-4">
          <li className="hover:underline"><a href="/">Home</a></li>      
          <li className="hover:underline"><a href="skills">Skills</a></li>
          <li className="hover:underline"><a href="projects">Projects</a></li>
          <li className="hover:underline"><a href="contact">Contact</a></li>
        </ul>
      </nav>
    );
}