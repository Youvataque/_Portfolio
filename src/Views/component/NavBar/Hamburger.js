import { useState } from "react";
import { Link } from 'react-router-dom';
import '../../../css/component.css';
import '../../../css/struct.css';


export function Hamburger() {
    const [open, setOpen] = useState(false);
    const change = () => {
        setOpen(!open);
    }
    return <div>
         <div className={`BlurHamburgerContent ${open ? "blur-active" : ""}`}>
        </div>
        <div className={`HamburgerStack ${open ? "open" : ""}`}>
            <button type="button" className="hamburger" onClick={change}></button>
            <div className="HamburgerStyle">
                <div className="HamburgerBarre"></div>
                <div className="HamburgerBarre"></div>
                <div className="HamburgerBarre"></div>
            </div>
        </div>
            <div className={`menu ${open ? "open" : ""}`}>
                {/* Les liens ou le contenu du menu ici */}
                <Link to="/chemin1">Lien 1</Link>
                <Link to="/chemin2">Lien 2</Link>
                <div className={`HamburgerStack ${open ? "open" : ""}`}>
            <button type="button" className="hamburger" onClick={change}></button>
            <div className="HamburgerStyle">
                <div className="HamburgerBarre"></div>
                <div className="HamburgerBarre"></div>
                <div className="HamburgerBarre"></div>
            </div>
        </div>
        </div>
    </div>
}