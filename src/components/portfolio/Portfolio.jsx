import React from 'react';
import './portfolio.css'
// import Snippet from '../../assets/img/hsprojectsnippet.PNG'
import Data from './projects.json'
import PortfolioCard from "./PortfolioCard";

const CreateProjectCards = Data.map((project =>{
    return (
        <PortfolioCard
            key={project.key}
            {...project}

        />
    )
}))

const Portfolio = () => {

    return (
        <section id={'portfolio'}>
            <div className="title">
                <h6>Recent Projects</h6>
                <h2>Projects</h2>
            </div>
            <div className="container portfolio__container" id="portfolio-container">
                {CreateProjectCards}
            </div>

        </section>

    )}
export default Portfolio;


