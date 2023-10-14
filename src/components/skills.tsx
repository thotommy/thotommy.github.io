import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'

export const SkillsComponent: React.FC = () => {
    const [data, setData] = useState({
      intro: '',
      languages: [],
      frameworksLibraries: [],
      toolsMethods: [],
      others: []
    });

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/info/skills.json');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);   
    
    return(
        <div className="flex flex-col gap-5 skillContainer">
        <h1 className="text-2xl">
        <Typewriter
            words={['$Skills']}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={30}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </h1>
        <div className="skillIntro grid grid-rows-1 grid-flow-row">
          {data.intro}
        </div>
        <div className="tilesPanel grid sm:grid-cols-4 xs:grid-cols-1 gap-x-4 gap-y-10">
          <div className="skillTiles">
            <h2><strong>Languages</strong></h2>
            <ul className="l">
              {data.languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
          <div className="skillTiles">
            <h2><strong>Frameworks &amp; Libs</strong></h2>
            <ul className="fnl">
              {data.frameworksLibraries.map((fL, index) => (
                <li key={index}>{fL}</li>
              ))}
            </ul>
          </div>
          <div className="skillTiles">
            <h2><strong>Tools &amp; Methods</strong></h2>
            <ul className="tnm">
              {data.toolsMethods.map((sT, index) => (
                <li key={index}>{sT}</li>
              ))}
            </ul>
          </div>
          <div className="skillTiles">
            <h2><strong>Others</strong></h2>
            <ul className="o">
              {data.others.map((other, index) => (
                <li key={index}>{other}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
}