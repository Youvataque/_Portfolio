import {SkillsLinks} from '../SkillsLinks/SkillsLinks'

export function ProjectsCard({texts, titles, links, skills}) {
    return <div>
        <ul className="ProjectsCard">
            {titles.map((title, index) => (
                <a target="_blank" href={links[index]}  key={index} className="Card">
                    <div>
                        <h3 className="ProjectsCardTitle">{title}</h3>
                        <p className="ProjetcsCardText">{texts[index]}</p>
                        <div className='Space'/>
                        <SkillsLinks className="CardSkills" links={skills[index][1]} titles={skills[index][0]}/>
                    </div>
                </a>
            ))}
        </ul>
    </div>
}