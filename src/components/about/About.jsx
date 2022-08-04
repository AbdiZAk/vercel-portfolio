import React from 'react';
import './about.css'
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {FiGrid} from 'react-icons/fi'

const About = () => {

    return (
        <div>
            <section id={"about"}>

                <div className="title">
                    <h6>Get to Know</h6>
                    <h2>About me</h2>
                </div>
                <div className="container about__container">

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className={'icons'}/>
                            <h5>Experience</h5>
                            <small>2+ Years of Coding</small>
                        </article>
                        {/*<article className="about__card">*/}
                        {/*    <FiUsers className={'icons'}/>*/}
                        {/*    <h5>Clients</h5>*/}
                        {/*    <small>200+ WorldWide</small>*/}
                        {/*</article>*/}
                        <article className="about__card">
                            <FiGrid className={'icons'}/>
                            <h5>Projects</h5>
                            <small>10+ Completed Projects</small>
                        </article>
                    </div>

                    <p> I'm Full Stack Developer with a curious mind that is constantly learning and experimenting
                        with new technologies. I'm always working on personal projects to  become proficient
                        at the technologies I'm learning. I spend my free time outdoors with friends and family
                        or at the local park playing soccer.

                    </p>
                </div>
                </div>
            </section>
        </div>
    )
}
export default About;