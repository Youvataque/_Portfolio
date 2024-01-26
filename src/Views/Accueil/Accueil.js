import darkBack from '../../svg/FlutterDark.svg';
import lightBack from '../../svg/FlutterLight.svg';
import profilPicBig from '../../img/profilPicBig.png'
import '../../css/text.css';
import '../../css/struct.css';
import '../../css/Image.css';
import React, { useContext } from 'react';
import TempContext from '../../TempContext';
import {motion} from 'framer-motion';
import { ContactLinks } from '../component/ContactLinks/ContactLinks';
export function Accueil() {
    const { temp } = useContext(TempContext);
    const titles = ["Linkedin", "Github", "Youtube", "Twitter"];
    const links = ["https://www.linkedin.com/in/yannis-seguin-540432161/", "https://github.com/Youvataque", "https://www.youtube.com/channel/UCQUgpvsakyzaLKko-a4lfBA", "https://twitter.com/SEGUIN_Yannis"]
    return <div>
       <div className='GlobalHome'>
            <div className='homePresentationRow'>
                <motion.div className='homePresentationStack'animate={{y :[140, 0], opacity : 1}} transition={{delay : 0.2}}>
                    <motion.img animate={{x :[0, 150], y : [0, 20], rotate: [0, -45]}} transition={{x : {delay: 1.3, duration: 0.1}, y : {delay: 1.3, duration: 0.1}, rotate : {delay: 1.8}} } className='App-logo' src={temp == "dark"? darkBack : lightBack}/>
                    <div className='homePresentation'> 
                        <p className='homeHello'>Hey there! I'm -</p>
                        <p className='homeName2'>Yannis</p>
                        <p className='homeName'>SEGUIN</p>
                    </div>
                </motion.div>
                <motion.img animate={{rotate: -360, opacity : 1, y : [80, 0]}} transition={{duration: 0.4, delay: 1}} className='profilPicBig' src={profilPicBig}/>
            </div>
            <motion.div className='TextLength' animate={{y :[70, 0], opacity : 1}} transition={{delay: 0.4}}>
                <p className='homeTextPr'>
                    <b> Junior mobile developper.</b>
                    &nbsp;Passionate about programming, once I start working, nothing can stop me! Learning is, for me, the greatest pleasure.
                </p>
            </motion.div>
        <ContactLinks titles={titles} links={links}/>
        </div>
    </div>
}