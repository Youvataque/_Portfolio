import '../../css/text.css';
import '../../css/struct.css';
import { ProjectsCard } from '../component/ProjectsCard/ProjectsCard';
import { Gap } from '../component/Gap';
export function Projects() {
    // projets mobile
    const mobile = {
        titles : ["Mon Gestionnaire", "Montpellier Transport", "CoockLeen"],
        texts : [
            "Construction company? Tired of managing intervention schedules? Of constantly repeating yourself? Start your digital transformation! With \"Mon Gestionnaire\" !",
            "Are you tired of using a poorly designed application on a daily basis? Do you want to enjoy ergonomics and a design that suits today's tastes? Choose Montpellier Transport !",
            "Looking for a collaborative cooking app? Is the family spirit important to you? CookLeen is THE solution! This application is an unfinished initial project."
        ],
        links : ["https://github.com/Youvataque/gestionnaire-interventions" , "https://www.tam-voyages.com/index.asp", "https://github.com/Youvataque/Coockleen-Flutter"],
        skills : [
            [["Flutter", "Firebase", "Github", "Figma", "PixelMator"], ["https://flutter.dev", "https://firebase.google.com", "https://github.com", , "https://www.figma.com/fr/", "https://apps.apple.com/fr/app/pixelmator-pro/id1289583905?mt=12"]],
            [["Flutter", "Firebase", "Github"], ["https://flutter.dev", "https://firebase.google.com", "https://github.com"]],
            [["Flutter", "Firebase", "Github", "PixelMator"], ["https://flutter.dev", "https://firebase.google.com", "https://github.com", "https://apps.apple.com/fr/app/pixelmator-pro/id1289583905?mt=12"]],
        ]
    }
    // projets web
    const web = {
        titles : ["_Portfolio"],
        texts : ["The portfolio is an essential requirement for every developer. Eager to showcase my skills and achievements, here is mine. It also serves as my first project in React !"],
        links : ["https://github.com/Youvataque/_Portfolio"],
        skills : [
            [["React", "Github", "PixelMator"], ["https://fr.legacy.reactjs.org/", "https://github.com", "https://apps.apple.com/fr/app/pixelmator-pro/id1289583905?mt=12"]]
        ]
    }
    return <div>
        <h2 className='ProjectsSec'>Mobile Projects :</h2>
        <ProjectsCard texts={mobile.texts} titles={mobile.titles} links={mobile.links} skills={mobile.skills} marge='ProjectsCards'/>
        <Gap size={90}/>
        <h2 className='ProjectsSec'>Web Projects :</h2>
        <ProjectsCard texts={web.texts} titles={web.titles} links={web.links} skills={web.skills} marge='ProjectsCards'/>
        <Gap size={90}/>
    </div>
}