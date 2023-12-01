import React, {useState} from "react";
import './index.css';
import useLangs from "../../utils/useLangs";
import {Link} from "react-router-dom";
import LangsSwitcher from "./LangsSwitcher";

const Header = () => {
    const [vocab, getLang, changeLang, availableLanguages] = useLangs();

    return (
        <header>
            <div className="header-left">
                <div className="header-logo">
                    <img className="logo" src="" alt=""/>
                </div>
                <Link className="header-link" to="/">{vocab.urls.home}</Link>
                <Link className="header-link" to="/services">{vocab.urls.services}</Link>
                <Link className="header-link" to="/projects">{vocab.urls.projects}</Link>
                <Link className="header-link" to="/about">{vocab.urls.about}</Link>
            </div>
            <div className="header-right">
                <LangsSwitcher getLang={getLang} changeLang={changeLang} availableLanguages={availableLanguages}/>
            </div>
        </header>
    )
}

export default Header;