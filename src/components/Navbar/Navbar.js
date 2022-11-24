import "./Navbar.css";
import Logo from "../../assets/logo.jpeg";
import TwLogoOutline from "../../assets/tw-logo-outline.png";
import InstLogoOutline from "../../assets/inst-logo-outline.png";
import EspFlag from "../../assets/esp-flag.png";
import { useState } from "react";

function Navbar() {
    const [languageSelectorOpen, setLanguageSelectorOpen] = useState(false);
    return (
        <nav className="navbar">
            <a href="/">
                <img
                    className="navbar__logo"
                    src={Logo}
                    alt="Logo de nuestra página y link al inicio"
                />
            </a>
            {/* Wrapping icons to maintain parent flow */}
            <div className="navbar__icons">
                <div
                    className="navbar__language-selector"
                    onClick={() =>
                        setLanguageSelectorOpen(!languageSelectorOpen)
                    }
                >
                    <p>Español</p>
                    <img
                        className="navbar__icon navbar__icon__flag"
                        src={EspFlag}
                        alt="Bandera de seleccion de idioma"
                    />
                    <p>
                        <i
                            className={
                                "arrow " +
                                (!languageSelectorOpen
                                    ? "arrow-right"
                                    : "arrow-left")
                            }
                        ></i>
                    </p>
                    {languageSelectorOpen ? (
                        <div className="navbar__modal__language-selector">
                            <ul>
                                <li className="navbar__language-selector navbar__modal__language-selector__item">
                                    <p>Español</p>
                                    <img
                                        className="navbar__icon navbar__icon__flag"
                                        src={EspFlag}
                                        alt="Bandera de seleccion de idioma"
                                    />
                                </li>
                                <li className="navbar__language-selector navbar__modal__language-selector__item">
                                    <p>Español</p>
                                    <img
                                        className="navbar__icon navbar__icon__flag"
                                        src={EspFlag}
                                        alt="Bandera de seleccion de idioma"
                                    />
                                </li>
                            </ul>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                {/* Wrapping social icons to overpass grid */}
                <div className="navbar__icons__social separator">
                    <a
                        href="https://twitter.com/CaprichoDeCasa"
                        target="_blank"
                        rel="noreferrer"
                        className="navbar__icon__link"
                    >
                        <img
                            className="navbar__icon"
                            src={TwLogoOutline}
                            alt="Logo y link a nuestra cuenta de Twitter"
                        />
                    </a>
                    <a
                        href="https://instagram.com/CaprichoDeCasa"
                        target="_blank"
                        rel="noreferrer"
                        className="navbar__icon__link"
                    >
                        <img
                            className="navbar__icon"
                            src={InstLogoOutline}
                            alt="Logo y link a nuestra cuenta de Instagram"
                        />
                    </a>
                </div>
                {/* <img
                    className="navbar__icon__link navbar__icon navbar__icon-search"
                    src={SearchLogoOutline}
                    alt="Logo y link a nuestra cuenta de Instagram"
                /> */}
            </div>
        </nav>
    );
}

export default Navbar;
