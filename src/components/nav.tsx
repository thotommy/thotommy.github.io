import type React from 'react';

export const NavComponent: React.FC = () => {
    return(
        <nav>
        <ul className="flex space-x-4">
          <li><a href="skills">Skills</a></li>
          <li><a href="projects">Projects</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
      </nav>
    );
}