import React from "react";
import {FaCheckSquare} from 'react-icons/fa'

const ExperienceSkillsCard = (props) => {
    const {title, level} = props
    return (
            <article className={"experience__details"}>
                <FaCheckSquare className={'experience__details-icon'}/>
                <div>
                    <h4>{title}</h4>
                    <small className={"text-light"}>{level}</small>
                </div>
            </article>

    )
}
export default ExperienceSkillsCard;