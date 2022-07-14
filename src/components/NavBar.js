import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import LogoTK from '../assets/LogoTK.png';
import LogoITS from '../assets/LogoITS.png';

function NavBar() {
    return (
        <nav className="bg-blue-600 w-screen">
            <div className="flex items-center font-medium justify-around text-white text-xl py-2">
                <div className="flex relative items-center px-3">
                    <div className="flex relative items-center gap-2">
                        <img src={LogoITS} alt="#" className="h-12"/>
                        <img src={LogoTK} alt="#" className="h-10" />
                        <h1>Teknik Komputer ITS</h1>
                    </div>
                </div>
                <ul className="md:flex hidden items-center gap-5 font-sans px-3">
                    <li>
                        <Link to="/">
                            Beranda
                        </Link>
                    </li>
                    <div>
                        <h1>Halaman Utama</h1>
                    </div>
                    <li>
                        <Link to="Portal">
                            Portal
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;