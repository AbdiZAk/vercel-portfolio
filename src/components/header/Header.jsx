import React from 'react';
import './header.css'
import CTA from "./CTA";
import Me from "../../assets/img/me.jpg"
import HeaderSocials from "./HeaderSocials";

const Header = () => {

    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Abdirezak <span className={'span'}>Yusuf</span></h1>
                <h5 className="text-gold">Full-Stack Developer</h5>
                <CTA />
                <HeaderSocials />

                <img className={'me'} src={Me} alt="me"/>

                <a href="#contact" className={"scroll__down"}> Scroll Down</a>
            </div>
        </header>
    )
}
export default Header;
