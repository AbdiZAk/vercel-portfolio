import React from 'react';
import './about.css'
import {GiAchievement} from "react-icons/gi";
import {FaTasks} from 'react-icons/fa'

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
                            <GiAchievement className={'icons'}/>
                            <h5>Experience</h5>
                            <small>2+ Years of Coding</small>
                        </article>
                        <article className="about__card">
                            <FaTasks className={'icons'}/>
                            <h5>Projects</h5>
                            <small>10+ Completed Projects</small>
                        </article>
                    </div>

                    <p> I'm a <span>Full Stack Developer</span> with a curious mind that is constantly learning.
                        I'm always working on personal projects to become proficient with new technologies.
                        I spend my free time outdoors with friends and family and on the afternoons I like to go to the local park to swim or play soccer.

                    </p>
                </div>
                </div>
            </section>
        </div>
    )
}
export default About;