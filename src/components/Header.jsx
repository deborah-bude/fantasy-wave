import React from "react";
import logo from "../assets/logo.svg"
import {Link, NavLink} from "react-router-dom";

export function Header() {
    return (
        <header className="entete_page bg-white border-gray-200">
            <div className="entete_page__row max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <nav
                    className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={logo} className="h-10" alt="Fantasy Wave Logo"/>
                        </Link>
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button data-collapse-toggle="navbar-sticky" type="button"
                                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
                                    aria-controls="navbar-sticky" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                                </svg>
                            </button>
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                             id="navbar-sticky">
                            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                                <li>
                                    <NavLink className="entete_page__nav-item block py-2 px-3" to="/">Accueil</NavLink>
                                </li>
                                <li>
                                    <NavLink className="entete_page__nav-item block py-2 px-3" to="/univers-cosplay">L’univers du cosplay</NavLink>
                                </li>
                                <li>
                                    <NavLink className="entete_page__nav-item block py-2 px-3" to="/premier-cosplay">Son premier cosplay</NavLink>
                                </li>
                                <li>
                                    <NavLink className="entete_page__nav-item block py-2 px-3" to="/concevoir-costume">Concevez vos costumes</NavLink>
                                </li>
                                <li>
                                    <NavLink className="entete_page__nav-item block py-2 px-3" to="/concours">Les concours</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}