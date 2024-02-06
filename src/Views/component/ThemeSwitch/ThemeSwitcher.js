import '../../../css/theme.css'
import '../../../css/component.css'
import React, { useContext } from 'react';
import Context from '../../../Context';
export function ThemeSwitcher() {
    const { setTheme } = useContext(Context); // global var wich control theme

    // set dark theme to the page
    const setDarkTheme= () => {
        document.querySelector("html").setAttribute("data-theme", "dark");
        localStorage.setItem("selectedItem", "dark");
        setTheme("dark");
    };

    // set light theme to the page
    const setLightTheme= () => {
        document.querySelector("html").setAttribute("data-theme", "light");
        localStorage.setItem("selectedItem", "light");
        setTheme("light");
    };

    // apply the selected theme
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

    // create a usable switcher
    return <label className='switcher'>
        <input className='switch' type="checkbox" onChange={toggle} defaultChecked={selectedItem=="dark"}></input>
        <span className='slider'></span>
    </label>
}