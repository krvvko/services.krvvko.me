import React, {useState} from "react";
import useLangs from "../../../utils/useLangs";

const LangsSwitcher = ({ getLang, changeLang, availableLanguages }) => {
    const [langsOpen, setLangsOpen] = useState(false);

    const langsOpenHandler = () => {
        setLangsOpen(!langsOpen);
    }


    return (
        <div className="langs-switcher-container">
            <button onClick={langsOpenHandler} className={`header-button lang ${langsOpen ? 'active' : ''}`}>
                <span>{getLang().toUpperCase()}</span>
            </button>
            <div className={`available-langs-container ${langsOpen ? 'visible' : 'invisible'}`}>
                {availableLanguages.map((langCode) => (
                    <button className={`available-langs-button ${getLang() === langCode ? 'active' : ''}`} onClick={() => {
                        changeLang(langCode);
                        langsOpenHandler();
                    }}>{langCode.toUpperCase()}</button>
                ))}
            </div>
        </div>
    )
}

export default LangsSwitcher;