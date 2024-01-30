import '../../../css/component.css';
import {motion} from 'framer-motion';

export function ContactLinks({titles, links, wichBody}) {
    return <div className='ContactsLinksBodyDirector'>
        <div className={wichBody}>
            {titles.map((title, index) => (
                <motion.li animate={{y : [200, 0], opacity : [0, 0.999]}} transition={{y : {delay : (index + 1) / 6}, opacity : {delay : (index + 1) / 6}}} className="ContactLinks" key={index}><a href={links[index]} target='_blank'>{title}</a></motion.li>
            ))}
        </div>
    </div>
}