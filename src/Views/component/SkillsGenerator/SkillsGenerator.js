import Context from '../../../Context';
import { useContext } from 'react';
import {delay, motion} from 'framer-motion';
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
    const {theme} = useContext(Context);
    const {lang} = useContext(Context);
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
    return <div className="SkillsGenBody">
        {Object.keys(mySkills[lang]).map((section) => (
            <div key={section} className="SkillsSecBody">
                <h2 className="SkillsSec">{section}</h2>
                {mySkills[lang][section][0].map((skill, index) =>(
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                        visible: { opacity: 1 },
                        hidden: { opacity: 0 }
                        }}
                        transition={{delay : (index + 1) / 6}}
                        className='SkillsPair'>
                            <img  className='SkillsImg' key={index} src={mySkills[lang][section][1][index]} draggable="false"/>
                            <p className="Skill">{skill}</p>
                    </motion.div>
                ))}
            </div>
        ))}
    </div>
}