import '../../../css/component.css';
import {motion} from 'framer-motion';

export function ContactLinks({titles, links}) {
    return <div className='ContactsLinksBodyDirector'>
        <ul className='ContactLinksBody'>
            {titles.map((title, index) => (
                <motion.li animate={{y : [100, 0], opacity : 1}} transition={{delay : (index + 1) / 6}} className="ContactLinks" key={index} href={links[index]} target='_blank' >{title}</motion.li>
            ))}
        </ul>
    </div>
}