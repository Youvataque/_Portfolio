import '../../css/text.css';
import { SkillsGenerator } from '../component/SkillsGenerator/SkillsGenerator';
import { Gap } from '../component/Gap';
export function About() {
    return <di>
        <p className='monText'>Page ou je parle de moi ^^</p>
        <Gap size={400}/>
        <h1 className='ProjectsSec'>My Personal Skills :</h1>
        <SkillsGenerator/>
    </di>
}