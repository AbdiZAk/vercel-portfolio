import React, { useState }from 'react';
import './header.css'
import CTA from "./CTA";
import Me from "../../assets/img/me2.JPG"
import HeaderSocials from "./HeaderSocials";
import { BsFillArrowDownSquareFill } from 'react-icons/bs'

const Header = () => {

    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Abdirezak <span className={'span'}>Yusuf</span></h1>
                <h5>Full-Stack Developer</h5>
                <CTA />
                <HeaderSocials />

                <img className={'me'} src={Me} alt="me"/>

                <a href="#contact" className={"scroll__down"}> <BsFillArrowDownSquareFill /> </a>

            </div>
        </header>
    )
}
export default Header;
