import {SkillsLinks} from '../SkillsLinks/SkillsLinks';
import {motion} from 'framer-motion';
import { Gap } from '../Gap';
export function ProjectsCard({texts, titles, links, skills,  marge}) {
    return <div>
        <div className={marge}>
            {titles.map((title, index) => (
                <motion.a
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { opacity: 1 },
                        hidden: { opacity: 0 }
                    }}
                    transition={{delay : (index + 1) / 5}}
                    target="_blank" href={links[index]}  key={index} className="Card">
                        <div>
                            <h3 className="ProjectsCardTitle">{title}</h3>
                            <p className="ProjetcsCardText">{texts[index]}</p>
                            <div className='Space'/>
                            <SkillsLinks className="CardSkills" links={skills[index][1]} titles={skills[index][0]}/>
                            <Gap size={20}/>
                        </div>
                </motion.a>
            ))}
        </div>
    </div>
}