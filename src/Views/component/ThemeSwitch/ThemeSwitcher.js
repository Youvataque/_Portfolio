import '../../../css/theme.css'
import '../../../css/component.css'

export function ThemeSwitcher() {
    const setDarkTheme= () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem("selectedItem", "dark");
    };

    const setLightTheme= () => {
        document.querySelector("body").setAttribute("data-theme", "light");
        localStorage.setItem("selectedItem", "light");

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
        <input className='switch' type="checkbox" onChange={toggle} defaultChecked={selectedItem == "dark"}></input>
        <span className='slider'></span>
    </label>
}