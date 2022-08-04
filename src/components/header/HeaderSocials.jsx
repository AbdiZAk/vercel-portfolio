import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

const HeaderSocials = () => {

    return (
        <div className={"header__socials"}>
            <a href="https://www.linkedin.com/in/abdirezak-yusuf-a86944233/" target="_blank" rel={"noopener noreferrer"}><BsLinkedin /></a>
            <a href="https://github.com/AbdiZAk" target="_blank" rel={"noopener noreferrer"}><FaGithub /></a>
            <a href="https://www.instagram.com/updyzak/?hl=en" target="_blank" rel={"noopener noreferrer"}>< FaInstagram /></a>
        </div>
    )
}
export default HeaderSocials;