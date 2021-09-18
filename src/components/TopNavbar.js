import React from "react";

import logoImage from "../img/fortierpm-logo.svg";

export default function TopNavbar() {

    return (
        <header className="top-navbar">
            <div className="header-logo">
                <img className="logo-image" src={logoImage} alt="Logo" />
            </div>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#hero" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills" className="nav-link">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}