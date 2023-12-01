import { useState, useEffect } from 'react';
import langs from './langs/langs.json';

const useLangs = () => {
    const [vocab, setVocab] = useState(langs.en);

    const getLang = () => {
        let lang = localStorage.getItem('lang');
        if (!lang) {
            lang = 'en';
            localStorage.setItem('lang', lang);
        }
        return lang;
    };

    const getVocab = (lang) => {
        return langs[lang] || langs.en;
    };

    const changeLang = (newLang) => {
        console.log(`Changing language to: ${newLang}`); // Debugging line
        localStorage.setItem('lang', newLang);
        setVocab(getVocab(newLang));
    };


    useEffect(() => {
        const currentLang = getLang();
        setVocab(getVocab(currentLang));
    }, []);

    const availableLanguages = Object.keys(langs);

    return [vocab, getLang, changeLang, availableLanguages];
};

export default useLangs;
