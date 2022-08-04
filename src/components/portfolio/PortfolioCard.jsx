import React from 'react';

const PortfolioCard = (props) => {

    return (
        <>
            <div className="portfolio__card">
                <div className="portfolio__card-content">
                    {props.vid && <video controls>
                        <source src={require(`../../assets/vids/${props.vid}`)} type="video/mp4">

                        </source>
                    </video>}
                    {props.img && <img src={require(`../../assets/img/${props.img}`)} alt=""/>}

                </div>
                <div className="portfolio__content">
                    <p>{props.description}</p>
                    <a className={'btn btn-primary'} href={props.githublink} target="_blank">GitHub</a>
                    {props.demolink &&  <a className={'btn'} href={props.demolink} target="_blank">Demo</a>}

                </div>

            </div>

        </>
    )
}
export default PortfolioCard;