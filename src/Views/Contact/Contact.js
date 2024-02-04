import '../../css/text.css';
import '../../css/struct.css';
import { Gap } from '../component/Gap';
import { ContactUs } from '../component/emailSend';
import { ContactLinks } from '../component/ContactLinks/ContactLinks';
import { useContext } from 'react';
import Context from '../../Context';
export function Contact() {
    const { lang } = useContext(Context);
    const socialContact = {
        titles : ["Linkedin", "Github", "Youtube", "Twitter", "Malt"],
        links : ["https://www.linkedin.com/in/yannis-seguin-540432161/", "https://github.com/Youvataque", "https://www.youtube.com/channel/UCQUgpvsakyzaLKko-a4lfBA", "https://twitter.com/SEGUIN_Yannis", "https://www.malt.fr/profile/yannisseguin"]
    }
    return <div className='Contact'>
        <Gap size={100}/>
        <div className='ContactRow'>
            <ContactUs/>
            <div className='ContactColumn'>
                <h2 className='ContactTitle'>{lang == "fr"? "Ou contactez moi sur mes réseaux ;)" : "Or Contact me on my socials networks ;)"}</h2>
                <Gap size={-25}/>
                <p className='ContactText'>{lang == "fr"? "Je ne suis pas un grand utilisateur des réseaux sociaux, mais je ferais en sorte de vous répondre le plus rapidement possible. Vous pouvez aussi m'appeller sur ce numéro :" : "I'm not a big social media user, but I will do my best to respond to you as quickly as possible. I can also be reached at"} <b>06 28 26 45 61</b></p>
                <div className='CenterContactL'>
                    <ContactLinks titles={socialContact.titles} links={socialContact.links} wichBody={'ContactLinksBody2'}/>
                </div>
            </div>
        </div>
    </div>
}