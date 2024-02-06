import '../../css/text.css';
import '../../css/text.css';
import '../../css/struct.css';
import '../../css/Image.css';
import { Gap } from '../component/Gap';
import profilPicBig from '../../img/profilPicBig.png'
import { SkillsGenerator } from '../component/SkillsGenerator/SkillsGenerator';
import { useContext } from 'react';
import Context from '../../Context';
export function About() {
    const {lang} = useContext(Context);
    return <di>
        <div className='GlobalAbout'>
            <div className='AboutPresentationRow'>
                <div className='AboutPresentation'> 
                    <p className='AboutName'>Yannis</p>
                    <p className='AboutName'>SEGUIN</p>
                    <div className='AboutTextLength'>
                        <p className='AboutTextPr'>
                            <b>{lang == "fr"? "Développeur mobile junior." : "Junior mobile developper."}</b>
                            &nbsp;{lang == "fr"? "Passioné de programmation depuis des années, j'ai commancé avec python en 2021 en programmant de petit virus." : "I have been passionate about programming for years and started with Python in 2021. I programmed small viruses for 2 years,"}<br/>{lang == "fr"? "Je suis passé à Swift en 2023 puis à Flutter la même année. J'ai vraiment apprécié cet aspect du développement en particulié grace à \"Mon Gestionnaire\" et \"Montpellier Transport\"." : "then switched to Swift in 2023 and to Flutter the same year. I particularly enjoyed this aspect of development, especially with the development of \"Mon Gestionnaire\" and \"Montpellier Transport\"."}<br/>{lang == "fr"? "Aujourd'hui je continue le développement mobile tout en apprenant le web avec React." : "Today, I continue with mobile development while also learning React for web."}
                        </p>
                    </div>
                </div>
                <img className='profilPicBigAbout' src={profilPicBig} draggable="false"/>
            </div>
            <Gap size={140}/>
        </div>
        <h1 className='AboutTitle'>{lang == "fr"? "Mes compétences" : "My Personal Skills"}</h1>
        <SkillsGenerator/>
    </di>
}