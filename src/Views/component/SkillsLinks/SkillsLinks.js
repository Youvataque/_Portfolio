import '../../../css/component.css';

export function SkillsLinks({titles, links}) {
    return <div className='SkillsLinksBodyDirector'>
    <ul className='SkillsLinksBody'>
        {titles.map((title, index) => (
            <li className="SkillsLinks" key={index}><a href={links[index]} target='_blank'>{title}</a></li>
        ))}
    </ul>
</div>
}