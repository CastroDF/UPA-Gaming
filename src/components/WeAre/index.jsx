import React from "react";
import WeAreWrapper from "./WeAre";
import Logo from "assets/Logo.png";
import ScrollTo from "components/shared/ScrollTo";
import {useAppState} from "context/sectionsRef";

const WeAre = () => {
  const {partnersBannerHeight} = useAppState();

  return (
    <WeAreWrapper className="weAre">
      <div className="subSection">
        <p className="title">UPA GAMING</p>
        <div className="subtitle">
          <p>Somos una comunidad Gamer con base en Rosario, Argentina. El principal objetivo es crecer tanto como jugadores, como personas. Por eso es que queremos que todos los que se sumen amen lo que hacen, que se sientan cómodos. Luchamos por una meta, que es ni nada más ni nada menos que cumplir nuestos sueños.</p>
        </div>
      </div>
      <div className="subSection">
        <img className="upaLogo" src={Logo} alt="UPA Logo" />
      </div>
      <ScrollTo scrollTo={partnersBannerHeight + 50 || 0} />
    </WeAreWrapper>
  );
};

export default WeAre;
