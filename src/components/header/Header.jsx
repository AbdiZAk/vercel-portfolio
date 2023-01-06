import React, { useState }from 'react';
import './header.css'
import CTA from "./CTA";
import Me from "../../assets/img/me.jpg"
import { BsFillArrowDownSquareFill } from 'react-icons/bs'

const Header = () => {

    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Abdirezak <span className={'span'}>Yusuf</span></h1>
                <h5>Full-Stack Developer</h5>
                <p> I'm an aspiring <span>Full Stack Developer</span> who is driven to constantly learn and improve my skills. 
                    I'm actively working on personal projects to gain expertise in new technologies and am eager
                    to apply my knowledge through an internship in Web Development.
                    </p>
                    <div className='cta-img'>
                        <img className={'me'} src={Me} alt="me"/>
                        <CTA />
                    </div>
                

                <a href="#contact" className={"scroll__down"}> <BsFillArrowDownSquareFill /> </a>

            </div>
        </header>
    )
}
export default Header;
