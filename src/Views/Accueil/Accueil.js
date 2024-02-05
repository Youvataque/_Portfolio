import darkBack from '../../svg/FlutterDark.svg';
import lightBack from '../../svg/FlutterLight.svg';
import profilPicBig from '../../img/profilPicBig.png'
import '../../css/text.css';
import '../../css/struct.css';
import '../../css/Image.css';
import React, { useContext } from 'react';
import Context from '../../Context';
import {motion} from 'framer-motion';
import { ContactLinks } from '../component/ContactLinks/ContactLinks';
import { ProjectsCard } from '../component/ProjectsCard/ProjectsCard';
import { SkillsGenerator } from '../component/SkillsGenerator/SkillsGenerator';
import { Gap } from '../component/Gap';
export function Accueil() {
    const { theme } = useContext(Context);
    const { lang } = useContext(Context);
    // contacts 
    const socialContact = {
        titles : ["Linkedin", "Github", "Youtube", "Twitter", "Malt"],
        links : ["https://www.linkedin.com/in/yannis-seguin-540432161/", "https://github.com/Youvataque", "https://www.youtube.com/channel/UCQUgpvsakyzaLKko-a4lfBA", "https://twitter.com/SEGUIN_Yannis", "https://www.malt.fr/profile/yannisseguin"]
    }
    // Projets 
    const importantProj = {
        titles : ["Mon Gestionnaire", "Montpellier Transport", "_Portfolio"],
        texts : lang == "fr"?
                [   
                    "Entreprise du batiment ? Vous en avez assez de gérer les fiches d'interventions ? De vous répéter constamment ? Commencez votre transition numérique dès maintenant Avec \"Mon Gestionnaire\" !",
                    "Vous en avez assez d'utiliser une application mal conçue au quotidien ? Vous souhaitez profiter d'une ergonomie et d'un design adaptés aux goûts actuels ? Choisissez Montpellier Transport ! Attention est en cours de développement !",
                    "Le portfolio est un essentiel pour tout développeur. Désireux de présenter mes réalisations et de mettre en avant mes compétences, voici le mien. Il sert également de premier projet en React !"                ]
            :    
                [
                    "Construction company? Tired of managing intervention schedules? Of constantly repeating yourself? Start your digital transformation! With \"Mon Gestionnaire\" !",
                    "Are you tired of using a poorly designed application on a daily basis? Do you want to enjoy ergonomics and a design that suits today's tastes? Choose Montpellier Transport ! This app is in development!",
                    "The portfolio is an essential requirement for every developer. Eager to showcase my skills and achievements, here is mine. It also serves as my first project in React !"
                ],
        links : ["https://github.com/Youvataque/gestionnaire-interventions" , "https://www.tam-voyages.com/index.asp", "https://github.com/Youvataque/_Portfolio"],
        skills : [
            [["Flutter", "Firebase", "Github", "Figma", "PixelMator"], ["https://flutter.dev", "https://firebase.google.com", "https://github.com", , "https://www.figma.com/fr/", "https://apps.apple.com/fr/app/pixelmator-pro/id1289583905?mt=12"]],
            [["Flutter", "Firebase", "Github"], ["https://flutter.dev", "https://firebase.google.com", "https://github.com"]],
            [["React", "Github", "PixelMator" ,"Firebase"], ["https://fr.legacy.reactjs.org/", "https://github.com", "https://apps.apple.com/fr/app/pixelmator-pro/id1289583905?mt=12", "https://firebase.google.com"]]
        ]
    }
    //skills
    return <div>
       <div className='GlobalHome'>
            <div className='homePresentationRow'>
                <motion.div className='homePresentationStack'animate={{y :[140, 0],}} transition={{delay : 0.2}}>
                    <motion.img animate={{x :[0, 150], y : [0, 20], rotate: [0, -45]}} transition={{x : {delay: 1.3, duration: 0.1}, y : {delay: 1.3, duration: 0.1}, rotate : {delay: 1.8}} } className='App-logo' draggable="false" src={theme == "dark"? darkBack : lightBack}/>
                    <div className='homePresentation'> 
                        <p className='homeHello'>{lang == "fr"? "Bienvenue ! Je suis -" : "Hey there! I'm -"}</p>
                        <p className='homeName2'>Yannis</p>
                        <p className='homeName'>SEGUIN</p>
                    </div>
                </motion.div>
                <motion.img animate={{rotate: -360, y : [80, 0]}} transition={{duration: 0.4, delay: 1}} className='profilPicBig' src={profilPicBig}draggable="false"/>
            </div>
            <motion.div className='HomeTextLength' animate={{y :[70, -20]}} transition={{delay: 0.4}}>
                <p className='homeTextPr'>
                    <b>{lang == "fr"? "Developpeur mobile Junior." : "Junior mobile developper."}</b>
                    &nbsp;{lang == "fr"?  "Passionné d'informatique, lorsque je commence à travailler, rien ne peut m'arrêter ! Apprendre est, pour moi, un plaisir sans fin." : "Passionate about programming, once I start working, nothing can stop me! Learning is, for me, the greatest pleasure."}
                </p>
            </motion.div>
            <ContactLinks titles={socialContact.titles} links={socialContact.links} wichBody={'ContactLinksBody1'}/>
            <Gap size={140}/>
        </div>
        <h1 className='HomeSecTitle'>{lang == "fr"? "Projets importants" : "Importants Projects"}</h1>
        <ProjectsCard texts={importantProj.texts} titles={importantProj.titles} links={importantProj.links} skills={importantProj.skills} marge={'HomeCards'}/>
        <Gap size={140}/>
        <h1 className='HomeSecTitle'>{lang == "fr"? "Mes compétences" : "My Personal Skills"}</h1>
        <SkillsGenerator/>
        <Gap size={90}/>
    </div>
}