import React, { useEffect, useState } from 'react';

interface ProjectProps {
    ind: number;
    title: string;
    content: string;
}

export const Tile: React.FC<ProjectProps> = ({ind, title, content}) => {
  const [data, setData] = useState([{
    project: '',
    tools: [],
    hide: false
  }]);
  // TODO:TH Filter the project.json data to the data you need per tile
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/info/projects.json');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        const result = JSON.stringify(responseData)
        setData(responseData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency arr

  return (
    <div className="w-400 p-4">
      <a className="min-h-full" href={content} target="_blank" rel="noopener noreferrer">
        <div key={ind} className="min-h-full break-words max-w-md mx-auto bg-opacity-40 bg-blur-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md border border-gray-200 rounded-md shadow-lg p-6">
          <h2 className="text-md font-bold mb-4">{title}</h2>
          <a href={content} target="_blank" rel="noopener noreferrer" />
        </div>
        
      </a>
    </div>
  );
}