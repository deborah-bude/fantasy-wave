import React from "react";
import logo from "../assets/logo.svg"
import {NavLink} from "react-router-dom";

export function Header() {
    return (
        <header className="entete_page">
            <div className="entete_page__row">
                <img className="" src={logo} alt="Logo HR Net"/>

                <nav className="entete_page__nav">
                    <NavLink className="entete_page__nav-item" to="/">Accueil</NavLink>
                    <NavLink className="entete_page__nav-item" to="/univers-cosplay">L’univers du cosplay</NavLink>
                    <NavLink className="entete_page__nav-item" to="/premier-cosplay">Son premier cosplay</NavLink>
                    <NavLink className="entete_page__nav-item" to="/concevoir-costume">Concevez vos costumes</NavLink>
                    <NavLink className="entete_page__nav-item" to="/concours">Les concours</NavLink>
                </nav>
            </div>
        </header>
    )
}