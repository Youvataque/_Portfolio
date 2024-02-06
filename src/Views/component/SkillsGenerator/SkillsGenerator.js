import Context from '../../../Context';
import { useContext, useEffect } from 'react';
// dark
import figmaD from '../../../svg/skills/Dark/figmaD.svg';
import pixelMatorD from '../../../svg/skills/Dark/pixelmatorD.svg';
import firebaseD from '../../../svg/skills/Dark/firebaseD.svg';
import flutterD from '../../../svg/skills/Dark/flutterD.svg';
import reactD from '../../../svg/skills/Dark/reactD.svg';
import sqlD from '../../../svg/skills/Dark/sqlD.svg';
import swiftD from '../../../svg/skills/Dark/swiftD.svg';

// Light

import figmaL from '../../../svg/skills/Light/figmaL.svg';
import pixelMatorL from '../../../svg/skills/Light/pixelmatorL.svg';
import firebaseL from '../../../svg/skills/Light/firebaseL.svg';
import flutterL from '../../../svg/skills/Light/flutterL.svg';
import reactL from '../../../svg/skills/Light/reactL.svg';
import sqlL from '../../../svg/skills/Light/sqlL.svg';
import swiftL from '../../../svg/skills/Light/swiftL.svg';

export function SkillsGenerator({}) {

    const {theme} = useContext(Context); // global var wich control theme
    const {lang} = useContext(Context); // global var wich control en / fr

    // listen viewPort aparition and add animation to css class at this moment
    useEffect(() => {
        const elements = document.querySelectorAll('.SkillsPair');
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting && !entry.target.classList.contains('SkillsOnScreen')) {
                entry.target.classList.add('SkillsOnScreen');
              } 
            });
          }
        );
    
        elements.forEach(element => {
          observer.observe(element);
        });
    
        return () => observer.disconnect();
      });
    
    // my skills to generate
    const mySkills = {
        'en' : {
            'Designing' : [["Figma", "Pixel Mator"],  theme == 'dark'? [figmaD, pixelMatorD] : [figmaL, pixelMatorL]],
            'Front-end' : [["Flutter", "SwiftUI", "React"], theme == 'dark'? [flutterD, swiftD, reactD] : [flutterL, swiftL, reactL]],
            'DataBase' : [["Firebase", "Sql"], theme == 'dark'? [firebaseD, sqlD] : [firebaseL, sqlL]]
    
        },
        'fr' : {
            'Graphisme' : [["Figma", "Pixel Mator"],  theme == 'dark'? [figmaD, pixelMatorD] : [figmaL, pixelMatorL]],
            'Interface' : [["Flutter", "SwiftUI", "React"], theme == 'dark'? [flutterD, swiftD, reactD] : [flutterL, swiftL, reactL]],
            'Données' : [["Firebase", "Sql"], theme == 'dark'? [firebaseD, sqlD] : [firebaseL, sqlL]]
        }
    }
    // create modulable skills panel
    return <div className="SkillsGenBody">
        {Object.keys(mySkills[lang]).map((section) => (
            <div key={section} className="SkillsSecBody">
                <h2 className="SkillsSec">{section}</h2>
                {mySkills[lang][section][0].map((skill, index) =>(
                    <div className='SkillsPair' style={{animationDelay: `${(index + 1) / 6}s`}}>
                            <img  className='SkillsImg' key={index} src={mySkills[lang][section][1][index]} draggable="false"/>
                            <p className="Skill">{skill}</p>
                    </div>
                ))}
            </div>
        ))}
    </div>
}