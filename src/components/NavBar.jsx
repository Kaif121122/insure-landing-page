import React, { useState } from 'react'
import logo from '../images/logo.svg'

const NavBar = () => {

    const [menu, setMenu] = useState(false);

    const openMenu = () => {
        setMenu(true)
    }

    const closeMenu = () => {
        setMenu(false)
    }
    return (
        <div className="nav-bar container flex justify-between align-center">
            <div className="logo-container">
                <img src={logo} alt="" className="logo" />
            </div>

            <div className="hamburger">
                <svg onClick={() => openMenu()} className={menu ? 'menu-icons none open-menu' : 'menu-icons open-menu'} xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g fill="none" fill-rule="evenodd"><path fill="#FFF" stroke="#2C2830" stroke-width="1.5" d="M.75.75h30.5v30.5H.75z" /><g fill="#2C2830"><path d="M8 10h16v1.5H8zM8 15h16v1.5H8zM8 20h16v1.5H8z" /></g></g></svg>
                <svg onClick={() => closeMenu()} className={menu ? 'menu-icons show close-menu' : 'menu-icons close-menu'} xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g fill="none" fill-rule="evenodd"><path fill="#FFF" stroke="#2C2830" stroke-width="1.5" d="M.75.75h30.5v30.5H.75z" /><g fill="#2C2830"><path d="M10.873 9.563l11.314 11.314-1.06 1.06L9.813 10.623z" /><path d="M9.813 20.877L21.127 9.563l1.06 1.06-11.314 11.314z" /></g></g></svg>

            </div>
            <div className={menu ? "nav-container show flex align-center" : "nav-container none flex align-center"}>
                <ul className="nav-ul flex">
                    <li className="nav-li"><a href="" className="nav-link">How we work</a></li>
                    <li className="nav-li"><a href="" className="nav-link">Blog</a></li>
                    <li className="nav-li"><a href="" className="nav-link">Account</a></li>
                </ul>

                <div className="btn-container">
                    <button className="btn nav-btn">View plans</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar