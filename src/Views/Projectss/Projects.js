import '../../css/text.css';
import '../../css/struct.css';
import { ProjectsCard } from '../component/ProjectsCard/ProjectsCard';
import { Gap } from '../component/Gap';
import { useContext } from 'react';
import Context from '../../Context';
export function Projects() {
    const {lang} = useContext(Context); // var wich control en / fr

    // projets mobile
    const mobile = {
        titles : ["BatiConnect", "Montpellier Transports", "CoockLeen"],
        texts : lang == "fr"?
                [   
                    "Entreprise du batiment ? Vous souhaitez passer au numérique ? Avec BatiConnect entamez votre transition ! Gérez vos entretiens, vos chantiers ainsi que vos devis avec une simplicité encore inégalé.",
                    "Vous en avez assez d'utiliser une application mal conçue au quotidien ? Vous souhaitez profiter d'une ergonomie et d'un design adaptés aux goûts actuels ? Choisissez Montpellier Transport ! Attention est en cours de développement !",
                    "Vous cherchez une application de cuisine collaborative ? L'esprit familial vous tient à cœur ? CookLeen est LA solution ! Cette application est un premier projet inachevé."
                ]
            :    
                
                [
                    "Construction company? Are you looking to go digital? Start your transition with BatiConnect! Manage your maintenance, projects, and quotes with unmatched simplicity.",
                    "Are you tired of using a poorly designed application on a daily basis? Do you want to enjoy ergonomics and a design that suits today's tastes? Choose Montpellier Transport !",
                    "Looking for a collaborative cooking app? Is the family spirit important to you? CookLeen is THE solution! This application is an unfinished initial project."
                ],
        links : ["https://www.youtube.com/watch?v=GpcRevrvhY8" , "https://AppNonCommercialisé.com", "https://github.com/Youvataque/Coockleen-Flutter"],
        skills : [
            [["Flutter", "Firebase", "Github", "Figma", "PixelMator"], ["https://flutter.dev", "https://firebase.google.com", "https://github.com", , "https://www.figma.com/fr/", "https://apps.apple.com/fr/app/pixelmator-pro/id1289583905?mt=12"]],
            [["Flutter", "Firebase", "Github"], ["https://flutter.dev", "https://firebase.google.com", "https://github.com"]],
            [["Flutter", "Firebase", "Github", "PixelMator"], ["https://flutter.dev", "https://firebase.google.com", "https://github.com", "https://apps.apple.com/fr/app/pixelmator-pro/id1289583905?mt=12"]],
        ]
    }

    // projets web
    const web = {
        titles : ["_Portfolio", "SolsEnergiesBains"],
        texts : lang == "fr"?
                [
                    "Le portfolio est un essentiel pour tout développeur. Désireux de présenter mes réalisations et de mettre en avant mes compétences, voici le mien. Il sert également de premier projet en React !",
                    "SolsÉnergiesBains est aujourd'hui équipé d'un site internet sur mesure, piloté par une application mobile. Cela leur permet d'avoir toujours un site internet à la page, sans coûts mensuels."
                ]
            :
                [
                    "The portfolio is an essential requirement for every developer. Eager to showcase my skills and achievements, here is mine. It also serves as my first project in React !",
                    "SolsÉnergiesBains is now equipped with a custom website managed through a mobile app. This allows for an always up-to-date website without monthly costs."
                ],
        links : ["https://github.com/Youvataque/_Portfolio", "https://solsenergiesbains.fr/"],
        skills : [
            [["React", "Github", "PixelMator" ,"Firebase"], ["https://fr.legacy.reactjs.org/", "https://github.com", "https://apps.apple.com/fr/app/pixelmator-pro/id1289583905?mt=12", "https://firebase.google.com"]],
            [["React","TailWind","TypeScript", "Github", "PixelMator" ,"Firebase"], ["https://fr.legacy.reactjs.org/", "https://tailwindcss.com/", "https://www.typescriptlang.org/", "https://github.com", "https://apps.apple.com/fr/app/pixelmator-pro/id1289583905?mt=12", "https://firebase.google.com"]]
        ]
    }

    // main code
    return <div>
        <h2 className='ProjectsSec'>{lang == "fr"? "Projets mobiles :" : "Mobile Projects :"}</h2>
        <ProjectsCard texts={mobile.texts} titles={mobile.titles} links={mobile.links} skills={mobile.skills} marge='ProjectsCards'/> {/* Call ProjectsCardGenerator component */}
        <Gap size={90}/> {/* Call mySpacer component */}
        <h2 className='ProjectsSec'>{lang == "fr"? "Projets Web :" : "Web Projects :"}</h2>
        <ProjectsCard texts={web.texts} titles={web.titles} links={web.links} skills={web.skills} marge='ProjectsCards'/> {/* Call ProjectsCardGenerator component */}
        <Gap size={90}/> {/* Call mySpacer component */}
    </div>
}