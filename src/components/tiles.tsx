import type React from 'react';

interface ProjectProps {
    ind: number;
    title: string;
    content: string;
}

export const Tile: React.FC<ProjectProps> = ({ind, title, content}) => {
  return (
    <div className="flex-none w-full md:w-1/3 p-4">
      <a href={content} target="_blank" rel="noopener noreferrer">
        
          <div key={ind} className="max-w-md mx-auto bg-opacity-40 bg-blur-md bg-white bg-clip-padding backdrop-filter backdrop-blur-md border border-gray-200 rounded-md shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <a href={content} target="_blank" rel="noopener noreferrer" />
          </div>
        
      </a>
    </div>
  );
}