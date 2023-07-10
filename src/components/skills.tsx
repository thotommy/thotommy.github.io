import type React from 'react';
import { Typewriter } from 'react-simple-typewriter'

export const SkillsComponent: React.FC = () => {
    const skillData = {
        intro: 'Introduction text goes here',
        languages: ['Language 1', 'Language 2', 'Language 3'],
        frameworksLibraries: ['Framework 1', 'Framework 2', 'Library 1'],
        toolsMethods: ['Tool 1', 'Method 1', 'Tool 2'],
        others: ['Other 1', 'Other 2', 'Other 3'],
      };
    
    return(
        <div className="flex flex-col gap-5 skillContainer pt-10">
        <h1 id="skillTypeWriter">$</h1>
        <div className="skillIntro grid grid-rows-1 grid-flow-row">
          {skillData.intro}
        </div>
        <div className="tilesPanel grid grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">
          <div className="skillTiles">
            <h2>Languages</h2>
            <ul className="l">
              {skillData.languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
          <div className="skillTiles">
            <h2>Frameworks &amp; Libs</h2>
            <ul className="fnl">
              {skillData.frameworksLibraries.map((fL, index) => (
                <li key={index}>{fL}</li>
              ))}
            </ul>
          </div>
          <div className="skillTiles">
            <h2>Tools &amp; Methods</h2>
            <ul className="tnm">
              {skillData.toolsMethods.map((sT, index) => (
                <li key={index}>{sT}</li>
              ))}
            </ul>
          </div>
          <div className="skillTiles">
            <h2>Others</h2>
            <ul className="o">
              {skillData.others.map((other, index) => (
                <li key={index}>{other}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
}