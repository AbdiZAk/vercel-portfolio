import React from "react";
import {BsFillPatchCheckFill} from 'react-icons/bs'


const ExperienceSkillsCard = (props) => {
    const {title, level} = props
    return (
            <article className={"experience__details"}>
                <BsFillPatchCheckFill className={'experience__details-icon'}/>

                <div>
                    <h4>{title}</h4>
                    <small className={"text-light"}>{level}</small>
                </div>
            </article>

    )
}

export default ExperienceSkillsCard;
