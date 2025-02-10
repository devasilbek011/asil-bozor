import React, { useState } from 'react';
import i18n from "i18next";
import { SiGooglemaps } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import './navbar.css';
import { FaTelegram } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {
    const { t, i18n } = useTranslation();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setDropdownOpen(false); // Tanlangandan keyin dropdownni yopish
    };

    return (
        <div>
            <div className="kheadersl">
                <div>
              
                    <Link className="headersl" to={'/'}>
                        <img className="lagatib" src="lagatib.png" alt="Logo" />
                        <h1><a>Asil Bozor</a></h1>
                        
                    </Link>
                </div>
                <div className="two">
                    <div className="language-dropdown">
                        <button className="dropdown-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                            🌍 {t('title12')} 
                        </button>
                        {dropdownOpen && (
                            <div className="dropdown-menu">
                                <div className='bst'>
                                    <img className='imsg' src="./uzbekiston.jpg" onClick={() => changeLanguage("uz")} alt="" />
                                <button className="lang-button" onClick={() => changeLanguage("uz")}>O'zbek</button>
                                </div>
                                <div className='bst'>
                                <img className='imsg' src="./Rossiya_bayrog'i.jpg" onClick={() => changeLanguage("ru")} alt="" />
                                <button className="lang-button" onClick={() => changeLanguage("ru")}>Русский</button>
                                </div>
                                <div className='bst'>
                                <img className='imsg' src="./Engilsh.jpg" onClick={() => changeLanguage("en")} alt="" />
                                <button className="lang-button" onClick={() => changeLanguage("en")}>English</button>
                                </div>
                                <div className='bst'>
                                <img className='imsg' src="./Turk.jpg" onClick={() => changeLanguage("tr")} alt="" />
                                <button className="lang-button" onClick={() => changeLanguage("tr")}>Türkçe</button>
                                </div>
                            </div>
                        )}
                    </div>

                   
                    <h1 className="nummber">+998 88 586 7679</h1>
                    <div className='brs'>
                   <a target="_blank" href="https://www.instagram.com/asil_bozor/"> <FaInstagram className='ions' /></a>
                   <a target="_blank" href="https://t.me/ASIL_BOZOR_OPTOM"> <FaTelegram className='ions1' /></a>
                   <a target="_blank" href="https://vm.tiktok.com/ZSMJuKnTh/"> <AiFillTikTok className='ions2' /></a>
                    </div>

                    <div className="maps">
                        <Link to={"/maps"}>
                            <SiGooglemaps />
                            <a target="_blank">{t("title")}</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
