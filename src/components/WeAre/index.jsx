import React from "react";
import "./style.css";
import Logo from "../../assets/Logo.png";
import ScrollTo from "../shared/ScrollTo";

const WeAre = ({ scrollTo }) => {
    return (
        <section className="weAre">
            <div className="subSection">
                <p className="title">UPA GAMING</p>
                <p className="subtitle">
                    Somos una comunidad Gamer con base en Rosario, Argentina. El principal objetivo es crecer tanto como jugadores, como personas. Por eso es que queremos que todos los que se sumen amen lo que hacen, que se sientan cómodos. Luchamos por una meta, que es ni nada más ni nada menos que cumplir nuestos sueños.
                </p>
            </div>
            <div className="subSection">
                <img className="upaLogo" src={Logo} alt="UPA Logo" />
                <p></p>
            </div>
            <ScrollTo ref={scrollTo} />
        </section>
    )
}

export default WeAre;
