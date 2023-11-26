import type React from 'react';

export interface ProjectProps {
    ind: number;
    title: string;
    titleColor: string;
    content: string;
    tools: string[];
    hide: boolean
}

// Utility function to calculate images based on tools
const calculateImages = (tools: string[]): string[] => {
  // Map each tool to its corresponding image path in the public folder
  return tools.map(tool => {
    // Adjust this mapping according to your actual image paths
    switch (tool) {
      case 'node':
        return '/images/node.svg';
      case 'handlebars':
        return '/images/handlebars.svg';
      case 'angular':
        return '/images/angular.svg';
      case 'react': 
        return '/images/react.svg';
      case 'c#':
        return '/images/csharp.svg';
      case 'python':
        return '/images/python.svg';
      default:
        return null
    }
  });
};

export const Tile: React.FC<ProjectProps> = ({ind, title, titleColor, content, tools, hide}) => {
  const toolImages = calculateImages(tools);
  return (
    <div className={`w-400 p-4 ${!hide ? 'block' : 'hidden'}`}>
      <a className="min-h-full" href={content} target="_blank" rel="noopener noreferrer">
        <div key={ind} className="min-h-full break-words max-w-md mx-auto bg-opacity-40 bg-blur-md bg-gray-800 hover:bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md border border-gray-200 rounded-md shadow-lg p-6">
          <h2 className={`text-md underline font-bold mb-2 h-14 ${titleColor}`}>{title}</h2>
          <a href={content} target="_blank" rel="noopener noreferrer" />
          <div className="grid grid-cols-5">
            {toolImages.map((imgTool, index) => (
              <img className="w-8 h-8 mr-2" key={index} src={imgTool} alt={`Tool ${index + 1}`} />  
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}