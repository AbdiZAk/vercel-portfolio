import React from 'react';
import './footer.css'
import {BsLinkedin, BsTwitter, BsFillArrowUpSquareFill} from 'react-icons/bs'
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";


const Footer = () => {

    return (
        <footer>
            <a href="#" className={"scroll__up"}><BsFillArrowUpSquareFill /></a>
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/abdirezak-yusuf-a86944233/" target="_blank"><BsLinkedin /></a>
                <a href="https://github.com/AbdiZAk" target="_blank"><FaGithub /></a>
                <a href="https://twitter.com/abdi_nimaan?lang=en" target="_blank"><BsTwitter /></a>
                <a href="https://www.instagram.com/updyzak/?hl=en" target="_blank"><FaInstagram /></a>
            </div>
            <div className="copyright">
                <small>&copy; Abdirezak Yusuf. All rights reserved.</small>
            </div>
        </footer>


    )
}
export default Footer;