import '../../css/text.css';
import '../../css/struct.css';
import { Gap } from '../component/Gap';
import { ContactUs } from '../component/emailSend';
import { ContactLinks } from '../component/ContactLinks/ContactLinks';

export function Contact() {
    const socialContact = {
        titles : ["Linkedin", "Github", "Youtube", "Twitter"],
        links : ["https://www.linkedin.com/in/yannis-seguin-540432161/", "https://github.com/Youvataque", "https://www.youtube.com/channel/UCQUgpvsakyzaLKko-a4lfBA", "https://twitter.com/SEGUIN_Yannis"]
    }
    return <div>
        <Gap size={100}/>
        <div className='ContactRow'>
            <ContactUs/>
            <div className='ContactColumn'>
                <h2 className='ContactTitle'>Or Contact me on my socials networks ;)</h2>
                <p className='ContactText'>I'm not a big social media user, but I will do my best to respond to you as quickly as possible. I can also be reached at <b>06 28 26 45 61</b></p>
                <div className='CenterContactL'>
                    <ContactLinks titles={socialContact.titles} links={socialContact.links}/>
                </div>
            </div>
        </div>
    </div>
}