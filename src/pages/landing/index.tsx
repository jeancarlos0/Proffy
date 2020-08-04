import React from 'react';
import './styles.css'
import logoImg from '../../assets/images/logo.svg'
import heroImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'


function Landing(){
    return (
        <div id="landing-page">
            <div id="landing-page-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                <img src={heroImg} alt="" className="hero-image"/>
                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </a>
                    <a href="" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aula"/>
                        Dar aula
                    </a>
                </div>
                <span>Total de 200 conexões já feitas <img src={purpleHeartIcon} alt="Conexões realizadas"/></span>
            </div>
        </div>    
    )
}

export default Landing;