import TempContext from '../../../TempContext';
import React, { useContext } from 'react';
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
    const {temp} = useContext(TempContext);

    const mySkills = {
        Design : [["Figma", "Pixel Mator"],  temp == 'dark'? [figmaD, pixelMatorD] : [figmaL, pixelMatorL]],
        Front : [["Flutter", "SwiftUI", "React"], temp == 'dark'? [flutterD, swiftD, reactD] : [flutterL, swiftL, reactL]],
        DataBase : [["Firebase", "Oracle sql"], temp == 'dark'? [firebaseD, sqlD] : [firebaseL, sqlL]]

    }
    return <div className="SkillsGenBody">
        {Object.keys(mySkills).map((section) => (
            <div key={section} className="SkillsSecBody">
                <h2 className="SkillsSec">{section}</h2>
                {mySkills[section][0].map((skill, index) =>(
                    <div className='SkillsPair'>
                        <img  className='SkillsImg' key={index} src={mySkills[section][1][index]}/>
                        <p key={index} className="Skill">{skill}</p>
                    </div>
                ))}
            </div>
        ))}
    </div>
}