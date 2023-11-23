import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { Tile } from './tiles';

export const ProjectsComponent: React.FC = () => {
    const [responseText, setResponseText] = useState([{
        name: '',
        html_url: ''
      }]);

    useEffect(() => {
        const fetchData = async () => {
          try {

            const response = await fetch('https://api.github.com/users/thotommy/repos');
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const responseData = await response.json();
            setResponseText(responseData);
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
          <div className="tile-container flex flex-wrap left-align p-10">
            {responseText.map((proj, index) => (
              <Tile ind={index} title={proj.name} content={proj.html_url}></Tile>
            ))}
          </div>
        </div>
        
    );
}