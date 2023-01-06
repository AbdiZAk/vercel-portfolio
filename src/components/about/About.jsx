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


                </div>
                </div>
            </section>
        </div>
    )
}
export default About;