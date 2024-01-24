import darkBack from '../../svg/FlutterDark.svg';
import lightBack from '../../svg/FlutterLight.svg';
import { useState } from 'react';
import '../../css/text.css';
import '../../css/Image.css';
import profilPicBig from '../../img/profilPicBig.png'


export function Accueil() {
    const [temp, setTemp] = useState(localStorage.getItem("selectedItem"));
  
    return <div>
       <div className='homePresentationRow'>
            <div className='homePresentationStack'>
                <img className='App-logo' src={darkBack}/>
                <div className='homePresentation'> 
                    <p className='homeHello'>Hey there! I'm -</p>
                    <p className='homeName'>Yannis</p>
                    <p className='homeName'>SEGUIN</p>
                </div>
            </div>
            <img className='profilPicBig' src={profilPicBig}/>
       </div>
       

        <p className='monText'>test</p>
        <p className='monText'>test</p>
        <p className='monText'>test</p>
        v
        <p className='monText'>test</p>
        <p className='monText'>test</p>
        <p className='monText'>test</p>
        <p className='monText'>test</p>
        <p className='monText'>test</p>

        <p className='monText'>test</p>
        <p className='monText'>test</p>
        <p className='monText'>test</p>
        <p className='monText'>test</p>
        <p className='monText'>test</p>
        <p className='monText'>test</p>

        <p className='monText'>test</p>
        <p className='monText'>test</p>
        <p className='monText'>test</p>
        <p className='monText'>test</p>
        <p className='monText'>test</p>
        <p className='monText'>test</p>

        <p className='monText'>test</p>
        <p className='monText'>test</p>
        <p className='monText'>test</p>
        <p className='monText'>test</p>

        <p className='monText'>test</p>
        <p className='monText'>test</p>
        <p className='monText'>test</p>

     </div>
}