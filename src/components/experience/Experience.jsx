import React from 'react';
import './experience.css'
import './ExperienceSkillsCard'
import ExperienceSkillsCard from "./ExperienceSkillsCard";
import FrontEndSkills from '../../assets/frontend_skills.json'
import BackEndSkills from '../../assets/backend_skills.json'


const Experience = () => {

    const FrontEndCard = FrontEndSkills.map((skill =>{
        return (

            <ExperienceSkillsCard
                key={skill.key}
                {...skill}
                
            />
        )
    }))

    const BackEndCard = BackEndSkills.map((skill => {
        return (

            <ExperienceSkillsCard
                key={skill.key}
                {...skill}
                
            />
        )
    }))

    return (
        <section id={"experience"}>
            <div className="title">
                <h6>My Skills</h6>
                <h2>Experience</h2>
            </div>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>FrontEnd Development</h3>
                    <div className={"experience__content"}>
                        {FrontEndCard}
                    </div>
                </div>

                <div className="experience__backend">
                    <h3>BackEnd Skills</h3>
                    <div className={"experience__content"}>
                        {BackEndCard}
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Experience;