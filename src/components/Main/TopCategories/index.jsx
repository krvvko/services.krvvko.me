import React from "react";
import './index.css';
import {Link} from "react-router-dom";

const TopCategories = () => {
    return (
        <section className="top-category-container">
            <Link to="/about" className="top-category-element">
                <span className="category-headline">Кто я?</span>
                <div className="category-text-container">
                    <div className="category-text-container-inner">
                        <p>Я - веб разработчик с большим коммерческим и индивидуальным опытом работы. Занимаюсь разработкой сайтов начиная с 2020 года.</p>
                        <p>В своих проектах я использую современные технологии, которые позволяют создавать оптимизированные, функциональные и красивые веб-приложения.</p>
                    </div>
                </div>
            </Link>
            <Link to="/services" className="top-category-element">
                <span className="category-headline">Услуги</span>
                <div className="category-text-container">
                    <div className="category-text-container-inner">
                        <p>В перечень моих услуг входит разработка сайтов различной сложности, и для различных целей</p>
                        <p>Если вам необходим коммерческий сайт для вашей компании, сайт-визитка, витрина ваших работ или услуг, или любой иной сайт - то я  радостью помогу вам реализовать вашу задумку.</p>
                    </div>
                </div>
            </Link>
            <Link to="/projects" className="top-category-element">
                <span className="category-headline">Проекты</span>
                <div className="category-text-container">
                    <div className="category-text-container-inner">
                        <p>За годы моей работы я разработал большое колл-во веб-приложений, которыми я могу гордится, и выставлять в виде портфолио.</p>
                        <p>Мною было создано множество коммерческих сайтов для компаний разных велечин, сайты-визитки, личные проекты и многое другое</p>
                    </div>
                </div>
            </Link>
        </section>
    )
}

export default TopCategories;