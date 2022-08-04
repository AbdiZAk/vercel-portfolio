import React from 'react';
import './nav.css'
import {RiHome5Line} from "react-icons/ri";
import {BiUserCircle} from "react-icons/bi";
import {MdLibraryBooks} from "react-icons/md";
import {BiMessageAltDetail} from "react-icons/bi";
import {useState} from "react";

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')

    return (
        <nav>

            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>< RiHome5Line/>
                <p>Home</p></a>
            <a href="#about" onClick={() => setActiveNav('#about')}
               className={activeNav === '#about' ? 'active' : ''}>< BiUserCircle/> <p>About</p></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')}
               className={activeNav === '#experience' ? 'active' : ''}>< MdLibraryBooks/> <p>Experience</p></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')}
               className={activeNav === '#contact' ? 'active' : ''}>< BiMessageAltDetail/> <p>Contact</p></a>

        </nav>
    )
}
export default Nav;