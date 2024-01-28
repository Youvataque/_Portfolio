export function SkillsGenerator({}) {
    const mySkills = {
        Design : ["Figma", "Pixel Mator"],
        Front : ["Flutter", "SwiftUI", "React"],
        DataBase : ["Firebase", "Oracle sql"]

    }
    return <div className="SkillsGenBody">
        {Object.keys(mySkills).map((section) => (
            <div key={section} className="SkillsSecBody">
                <h2 className="SkillsSec">{section}</h2>
                {mySkills[section].map((skill) =>(
                    <p key={skill} className="Skill">{skill}</p>
                ))}
            </div>
        ))}
    </div>
}