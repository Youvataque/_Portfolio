import { useState } from "react";
import { Link } from 'react-router-dom';
import '../../../css/component.css';
import '../../../css/struct.css';


export function Hamburger() {
    const [open, setOpen] = useState(false);
    const change = () => {
        setOpen(!open);
    }
    return <div className="HamburgerStack">
        <button type="button" className="hamburger" onClick={change}></button>
        <div className="HamburgerStyle">
            <div className="HamburgerBarre"></div>
            <div className="HamburgerBarre"></div>
            <div className="HamburgerBarre"></div>
        </div>
    </div>
}