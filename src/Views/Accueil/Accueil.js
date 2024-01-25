import darkBack from '../../svg/FlutterDark.svg';
import lightBack from '../../svg/FlutterLight.svg';
import '../../css/text.css';
import '../../css/Image.css';
import profilPicBig from '../../img/profilPicBig.png'
import React, { useContext } from 'react';
import TempContext from '../../TempContext';

export function Accueil() {
    const { temp, setTemp } = useContext(TempContext);
    return <div>
       <div className='GlobalHome'>
            <div className='homePresentationRow'>
                <div className='homePresentationStack'>
                    <img className='App-logo' src={temp == "dark"? darkBack : lightBack}/>
                    <div className='homePresentation'> 
                        <p className='homeHello'>Hey there! I'm -</p>
                        <p className='homeName2'>Yannis</p>
                        <p className='homeName'>SEGUIN</p>
                    </div>
                </div>
                <img className='profilPicBig' src={profilPicBig}/>
            </div>
            <div className='TextLength'>
                <p className='homeTextPr'>
                    <b> Junior mobile developper.</b>
                    &nbsp;Passionate about programming, once I start working, nothing can stop me! Learning is, for me, the greatest pleasure.
                </p>
            </div>
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