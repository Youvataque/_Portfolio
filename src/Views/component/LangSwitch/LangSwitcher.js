import { useContext } from "react";
import Context from "../../../Context";
import {motion} from 'framer-motion';
export function LangSwitcher() {
    // var wich control en / fr
    const { lang, setLang } = useContext(Context);

    // the lang switcher func
    const switchLang = () => {
        if (lang == "fr") {
            localStorage.setItem("lang", "en");
            setLang("en");
        } else {
            localStorage.setItem("lang", "fr");
            setLang("fr");
        }
    }
    
    // Print in maj
    const toPrint = (e) => {
        if (e == "fr") {
            return "Fr";
        } else {
            return "En";
        }
    }

    // Main code
    return <div>
        <motion.button className="LangButton" onClick={switchLang}>{toPrint(lang)}</motion.button>
    </div>  
}