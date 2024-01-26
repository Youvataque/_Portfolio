import { useState } from "react";
import { Link } from 'react-router-dom';
import '../../../css/component.css';
import '../../../css/struct.css';
import '../../../css/text.css';


export function Hamburger() {
    const [open, setOpen] = useState(false);
    const change = () => {
        setOpen(!open);
    }
    return <div>
        <div className={`BlurHamburgerContent ${open ? "blur-active" : ""}`}></div>
        <div className={`menu ${open ? "open" : ""}`}>
            <h1 className="HamburgerH1">Welcome,<br/>User !</h1>
            <ul className="HamburgerContentDirector">
                <li className="HamburgerNavItem">
                    <Link className='HamburgerNavLink' to='/' onClick={change}><p className="HamburgerPoint">1.&nbsp;</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home</Link>
                </li>
                <li className="HamburgerNavItem">
                    <Link className='HamburgerNavLink' to='/projects' onClick={change}><p className="HamburgerPoint">2.&nbsp;</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Projects</Link>
                </li>
                <li className="HamburgerNavItem">
                    <Link className='HamburgerNavLink' to='/about' onClick={change}><p className="HamburgerPoint">3.&nbsp;</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About</Link>
                </li>
                <li className="HamburgerNavItem">
                    <Link className='HamburgerNavLink' to='/contact' onClick={change}><p className="HamburgerPoint">4.&nbsp;</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact</Link>
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