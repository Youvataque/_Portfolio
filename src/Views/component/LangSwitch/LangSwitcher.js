import { useContext } from "react";
import Context from "../../../Context";
import {motion} from 'framer-motion';
export function LangSwitcher() {
    const { lang, setLang } = useContext(Context);
    const switchLang = () => {
        if (lang == "fr") {
            localStorage.setItem("lang", "en");
            setLang("en");
        } else {
            localStorage.setItem("lang", "fr");
            setLang("fr");
        }
      }
    const toPrint = (e) => {
        if (e == "fr") {
            return "Fr";
        } else {
            return "En";
        }
    }
    return <div>
        <motion.button className="LangButton" onClick={switchLang}>{toPrint(lang)}</motion.button>
    </div>  
}