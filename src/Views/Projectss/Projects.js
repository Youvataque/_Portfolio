import '../../css/text.css';
import '../../css/struct.css';
import { ProjectsCard } from '../component/ProjectsCard/ProjectsCard';

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
            [["Flutter", "Firebase", "Github"], ["https://flutter.dev", "https://firebase.google.com", "https://github.com"]],
            [["Flutter", "Firebase", "Github"], ["https://flutter.dev", "https://firebase.google.com", "https://github.com"]],
            [["Flutter", "Firebase", "Github"], ["https://flutter.dev", "https://firebase.google.com", "https://github.com"]]
        ]
    }
    // projets web
    const web = {
        titles : ["_Portfolio"],
        texts : ["The portfolio is an essential requirement for every developer. Eager to showcase my skills and achievements, here is mine. It also serves as my first project in React !"],
        links : ["https://github.com/Youvataque/_Portfolio"],
        skills : [
            [["React", "Github"], ["https://fr.legacy.reactjs.org/", "https://github.com"]]
        ]
    }
    return <div>
        <h1 className='ProjectsSec'>Mobile Projetcs :</h1>
        <ProjectsCard texts={mobile.texts} titles={mobile.titles} links={mobile.links} skills={mobile.skills} marge='ProjectsCards'/>
        <div className='Space'></div>
        <div className='Space'></div>
        <h1 className='ProjectsSec'>Web Projetcs :</h1>
        <ProjectsCard texts={web.texts} titles={web.titles} links={web.links} skills={web.skills} marge='ProjectsCards'/>
        <div className='Space'></div>
        <div className='Space'></div>
    </div>
}