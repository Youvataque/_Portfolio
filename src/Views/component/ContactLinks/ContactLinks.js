import '../../../css/component.css';
import {motion} from 'framer-motion';

export function ContactLinks({titles, links}) {
    return <div className='ContactsLinksBodyDirector'>
        <ul className='ContactLinksBody'>
            {titles.map((title, index) => (
                <motion.li animate={{y : [200, 0], opacity : 1}} transition={{y : {delay : (index + 1) / 6}, opacity : {delay : (index + 1) / 6}}} className="ContactLinks" key={index}><a href={links[index]} target='_blank'>{title}</a></motion.li>
            ))}
        </ul>
    </div>
}