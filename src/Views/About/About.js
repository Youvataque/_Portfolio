import '../../css/text.css';
import '../../css/text.css';
import '../../css/struct.css';
import '../../css/Image.css';
import { Gap } from '../component/Gap';
import profilPicBig from '../../img/profilPicBig.png'
import {motion} from 'framer-motion';
import { SkillsGenerator } from '../component/SkillsGenerator/SkillsGenerator';
export function About() {
    return <di>
        <div className='GlobalAbout'>
            <div className='AboutPresentationRow'>
                <div className='AboutPresentation'> 
                    <p className='AboutName'>Yannis</p>
                    <p className='AboutName'>SEGUIN</p>
                    <div className='AboutTextLength'>
                <p className='homeTextPr'>
                    <b> Junior mobile developper.</b>
                    &nbsp;I have been passionate about programming for years and started with Python in 2021. I programmed small viruses for 2 years,<br/> then switched to Swift in 2023 and to Flutter the same year. I particularly enjoyed this aspect of development, especially with the development of "Mon Gestionnaire" and "Montpellier Transport".<br/> Today, I continue with mobile development while also learning React for web.
                </p>
            </div>
                </div>
                <motion.img 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { opacity: 1, x : [2000, 0]},
                        hidden: { opacity: 0 }
                    }}
                    transition={{delay : 0.1}}
                    className='profilPicBigAbout' src={profilPicBig}/>
            </div>
            
            <Gap size={140}/>
        </div>
        <h1 className='ProjectsSec'>My Personal Skills :</h1>
        <SkillsGenerator/>
    </di>
}