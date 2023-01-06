import React from "react";


const ExperienceSkillsCard = (props) => {
    const {title, icon_slug} = props
    return (
            <article className={"experience__details"}>
    
                {icon_slug && <img className={'experience__details-icon'} src={require(`../../assets/icons/${icon_slug}.svg`)} alt=""/>}
                
                <div>
                    <h4>{title}</h4>
                   
                </div>
                
            </article>

    )
}

export default ExperienceSkillsCard;
