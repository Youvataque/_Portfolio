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
        
            <div className={`menu ${open ? "open" : ""}`}>
                {/* Les liens ou le contenu du menu ici */}
                <ul className="">
                    <li className="nav-item">
                    <Link className='nav-link' to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link' to='/projects'>Projects</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link' to='/about'>About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link' to='/contact'>Contact</Link>
                    </li>
                </ul>
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