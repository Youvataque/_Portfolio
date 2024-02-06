import {SkillsLinks} from '../SkillsLinks/SkillsLinks';
import { useEffect } from 'react';
export function ProjectsCard({texts, titles, links, skills,  marge}) {
    useEffect(() => {
        const elements = document.querySelectorAll('.Card');
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
    return <div>
        <div className={marge}>
            {titles.map((title, index) => (
                <a target="_blank" href={links[index]} style={{animationDelay : `${(index + 1) / 5}s`}} key={index} className="Card">
                    <div>
                        <h3 className="ProjectsCardTitle">{title}</h3>
                        <p className="ProjetcsCardText">{texts[index]}</p>
                        <div className='Space'/>
                        <SkillsLinks className="CardSkills" links={skills[index][1]} titles={skills[index][0]}/>
                    </div>
                </a>
            ))}
        </div>
    </div>
}