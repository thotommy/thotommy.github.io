import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { ProjectProps, Tile } from './tiles';

// Utility function to calculate images based on tools
const calcTitleColor = (index: number): string => {
  const titleColorArr = ['text-accentPurple', 'text-accentGreen', 'text-accentBlue', 'text-accentYellow']
  return titleColorArr[index % 4]
  // Map each tool to its corresponding image path in the public folder
  
};

export const ProjectsComponent: React.FC = () => {
    const [tileData, setTileData] = useState([{
      name: '',
      nameColor: '',
      html_url: '',
      tools: [],
      hide: false
    }])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const [response, details] = await Promise.all([
              fetch('https://api.github.com/users/thotommy/repos'),
              fetch('/info/projects.json')
            ]);
    
            if (!response.ok || !details.ok) {
              throw new Error('Network response was not ok');
            }
          
            const [responseData, detailData] = await Promise.all([
              response.json(),
              details.json()
            ]);
            
            const combinedTileData = responseData.map((proj, index) => {
              const match = detailData.find((projDetail: { name: any; }) => projDetail.name === proj.name);
              if (match) {
                // Combine properties from both fetches
                return {
                  name: proj.name,
                  nameColor: calcTitleColor(index),
                  html_url: proj.html_url,
                  tools: match.tools,
                  hide: match.hide
                };
              }
            })

            setTileData(combinedTileData)
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchData();
        
      }, []); // Empty dependency arr

    return(
        <div>
          <h1 className="text-2xl">
            <Typewriter
                words={['$Projects']}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={30}
                deleteSpeed={50}
                delaySpeed={1000}
            />
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {tileData.map((proj, index) => (
              <Tile ind={index} title={proj.name} titleColor={proj.nameColor} content={proj.html_url} tools={proj.tools} hide={proj.hide}></Tile>
            ))}
          </div>
        </div>
        
    );
}