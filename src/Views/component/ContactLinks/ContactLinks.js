import '../../../css/component.css';
import {motion} from 'framer-motion';

// Create modulable contact button
export function ContactLinks({titles, links, wichBody}) {
    return <div className='ContactsLinksBodyDirector'>
        <div className={wichBody}>
            {titles.map((title, index) => (
                <motion.li 
                style={{
                    animationName: 'fadeOut',
                    animationDuration: '1s',
                    animationFillMode: 'forwards',
                    animationDelay: `${(index + 1) / 6}s`
                }}
                animate={{y : [200, 0]}}
                transition={{y : {delay : (index + 1) / 6},opacity : {delay : (index + 1) / 6}}}
                className="ContactLinks"
                key={index}>
                    <a href={links[index]} target='_blank'>{title}</a>
                </motion.li>
            ))}
        </div>
    </div>
}