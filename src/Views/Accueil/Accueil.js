import darkBack from '../../svg/FlutterDark.svg';
import lightBack from '../../svg/FlutterLight.svg';
import profilPicBig from '../../img/profilPic.png'
import '../../css/text.css';
import '../../css/struct.css';
import '../../css/Image.css';
import React, { useContext } from 'react';
import Context from '../../Context';
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
        titles : ["NewBat", "Montpellier Transports", "SolsEnergiesBains"],
        texts : lang == "fr"?
                [   
                    "Entreprise du batiment ? Vous souhaitez passer au numérique ? Avec NewBat entamez votre transition ! Gérez vos entretiens, vos chantiers ainsi que vos devis avec une simplicité encore inégalé.",
                    "Vous en avez assez d'utiliser une application mal conçue au quotidien ? Vous souhaitez profiter d'une ergonomie et d'un design adaptés aux goûts actuels ? Choisissez Montpellier Transport ! Attention est en cours de développement !",
                    "SolsÉnergiesBains est aujourd'hui équipé d'un site internet sur mesure, piloté par une application mobile. Cela leur permet d'avoir toujours un site internet à la page, sans coûts mensuels."                ]
            :    
                [
                    "Construction company? Are you looking to go digital? Start your transition with NewBat ! Manage your maintenance, projects, and quotes with unmatched simplicity.",
                    "Are you tired of using a poorly designed application on a daily basis? Do you want to enjoy ergonomics and a design that suits today's tastes? Choose Montpellier Transport ! This app is in development!",
                    "SolsÉnergiesBains is now equipped with a custom website managed through a mobile app. This allows for an always up-to-date website without monthly costs."
                ],
        links : ["https://www.youtube.com/watch?v=GpcRevrvhY8" , "https://AppNonCommercialisé.com", "https://www.solsenergiesbains.com/"],
        skills : [
            [["Flutter", "Firebase", "Github", "Figma", "PixelMator"], ["https://flutter.dev", "https://firebase.google.com", "https://github.com", , "https://www.figma.com/fr/", "https://apps.apple.com/fr/app/pixelmator-pro/id1289583905?mt=12"]],
            [["Flutter", "Firebase", "Github"], ["https://flutter.dev", "https://firebase.google.com", "https://github.com"]],
            [["React","TailWind","TypeScript", "Github", "PixelMator" ,"Firebase"], ["https://fr.legacy.reactjs.org/", "https://tailwindcss.com/", "https://www.typescriptlang.org/", "https://github.com", "https://apps.apple.com/fr/app/pixelmator-pro/id1289583905?mt=12", "https://firebase.google.com"]]
        ]
    }
    // Main code
    return <div>
       <div className='GlobalHome'>
            <div className='homePresentationRow'>
                <div className='homePresentationStack'>
                    <img className='App-logo' draggable="false" src={theme == "dark"? darkBack : lightBack}/> {/* Flutter logo */}
                    <div className='homePresentation'> {/* basic informations */}
                        <p className='homeHello'>{lang == "fr"? "Bienvenue ! Je suis -" : "Hey there! I'm -"}</p>
                        <p className='homeName2'>Yannis</p>
                        <p className='homeName'>SEGUIN</p>
                    </div>
                </div>
                <img className='profilPicBig' src={profilPicBig}draggable="false"/> {/* me */}
            </div>
            <div className='HomeTextLength'> {/* litle presentation */}
                <p className='homeTextPr'>
                    <b>{lang == "fr"? "Developpeur mobile Junior." : "Junior mobile developper."}</b>
                    &nbsp;{lang == "fr"?  "Passionné d'informatique, lorsque je commence à travailler, rien ne peut m'arrêter ! Apprendre est, pour moi, un plaisir sans fin." : "Passionate about programming, once I start working, nothing can stop me! Learning is, for me, the greatest pleasure."}
                </p>
            </div>
            <ContactLinks titles={socialContact.titles} links={socialContact.links} wichBody={'ContactLinksBody1'}/> {/* Call ContactGenerator component */}
            <Gap size={140}/> {/* Call mySpacer component */}
        </div>
        <h1 className='HomeSecTitle'>{lang == "fr"? "Projets importants" : "Importants Projects"}</h1>
        <ProjectsCard texts={importantProj.texts} titles={importantProj.titles} links={importantProj.links} skills={importantProj.skills} marge={'HomeCards'}/> {/* Call ProjetctsCardGenerator component */}
        <Gap size={140}/> {/* Call mySpacer component */}
        <h1 className='HomeSecTitle'>{lang == "fr"? "Mes compétences" : "My Personal Skills"}</h1>
        <SkillsGenerator/> {/* Call skillsGenerator component */}
        <Gap size={90}/> {/* Call mySpacer component */}
    </div>
}