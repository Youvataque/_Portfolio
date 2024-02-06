import '../../../css/component.css';

// create modulable links for a skill
export function SkillsLinks({titles, links}) {
    return <div className='SkillsLinksBodyDirector'>
    <ul className='SkillsLinksBody'>
        {titles.map((title, index) => (
            <li className="SkillsLinks" key={index}><a href={links[index]} target='_blank'>{title}</a></li>
        ))}
    </ul>
</div>
}