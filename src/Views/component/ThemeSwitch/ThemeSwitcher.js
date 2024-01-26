import '../../../css/theme.css'
import '../../../css/component.css'
import React, { useContext } from 'react';
import TempContext from '../../../TempContext';
export function ThemeSwitcher() {
    const { temp, setTemp } = useContext(TempContext);

    const setDarkTheme= () => {
        document.querySelector("html").setAttribute("data-theme", "dark");
        localStorage.setItem("selectedItem", "dark");
        setTemp("dark");
    };

    const setLightTheme= () => {
        document.querySelector("html").setAttribute("data-theme", "light");
        localStorage.setItem("selectedItem", "light");
        setTemp("light");

    };

    const selectedItem = localStorage.getItem("selectedItem");

    if (selectedItem == "dark") {
        setDarkTheme();
    } else {
        setLightTheme();
    }

    const toggle = (e) => {
        if (e.target.checked) {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    };

    return <label className='switcher'>
        <input className='switch' type="checkbox" onChange={toggle} defaultChecked={selectedItem=="dark"}></input>
        <span className='slider'></span>
    </label>
}