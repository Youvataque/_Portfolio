import { useState } from "react";
import { Link } from 'react-router-dom';
import '../../../css/component.css';
import '../../../css/struct.css';
import '../../../css/text.css';
import { useContext } from "react";
import Context from "../../../Context";

export function Hamburger() {
    const {lang} = useContext(Context);
    const [open, setOpen] = useState(false);
    const change = () => {
        setOpen(!open);
    }
    return <div>
        <div className={`BlurHamburgerContent ${open ? "blur-active" : ""}`}></div>
        <div className={`menu ${open ? "open" : ""}`}>
            <h2 className="HamburgerH2">Seguin-dev</h2>
            <div className="HamburgerContentDirector">
                <Link className='HamburgerNavLink' to='/' onClick={change}>{lang == "fr"? "Accueil" : "Home"}</Link>
                <Link className='HamburgerNavLink' to='/projects' onClick={change}>{lang == "fr"? "Projets" : "Projects"}</Link>
                <Link className='HamburgerNavLink' to='/about' onClick={change}>{lang == "fr"? "À propos" : "About"}</Link>
                <Link className='HamburgerNavLink' to='/contact' onClick={change}>{lang == "fr"? "Contact" : "Contact"}</Link>
            </div>
            <div className={`HamburgerStack ${open ? "open" : ""}`}>
                <button type="button" className="hamburger" onClick={change}></button>
                <div className="HamburgerStyle">
                    <div className={`HamburgerBarreL ${open ? "open" : ""}`}></div>
                    <div className={`HamburgerBarreR ${open ? "open" : ""}`}></div>
                    <div className={`HamburgerBarre ${open ? "open" : ""}`}></div>
                </div>
            </div>
        </div>
    </div>
}