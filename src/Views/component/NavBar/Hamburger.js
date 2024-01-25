import { useState } from "react";
import { Link } from 'react-router-dom';
import '../../../css/component.css';

export function Hamburger() {
    const [open, setOpen] = useState(false);
    const change = () => {
        setOpen(!open);
    }
    return <button type="button" className="hamburger" onClick={change}></button>
}