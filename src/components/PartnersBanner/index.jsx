import React, {useEffect, createRef} from "react";
import "./style.css";
import AMD from "assets/partners/AMDPartner.svg";
import Aorus from "assets/partners/AorusPartner.svg";
import LogitechG from "assets/partners/LogitechGPartner.svg";
import Twitch from "assets/partners/TwitchPartner.svg";
import {useAppState} from "context/sectionsRef";


const PartnersBanner = () => {
  const {setPartnersBannerHeight} = useAppState();
  const partnersBannerRef = createRef();
  useEffect(() => {
    setPartnersBannerHeight(partnersBannerRef.current.offsetTop);
  }, [partnersBannerRef, setPartnersBannerHeight]);
  return (
    <div className="banner" ref={partnersBannerRef} >
      <a href="https://www.amd.com/" target="_blank" rel="noreferrer">
        <img src={AMD} alt="AMD Logo" data-aos="fade-down" data-aos-duration="100" />
      </a>
      <a href="https://www.aorus.com/" target="_blank" rel="noreferrer">
        <img src={Aorus} alt="Aorus Logo" data-aos="fade-down" data-aos-duration="200" />
      </a>
      <a href="https://www.logitech.com/" target="_blank" rel="noreferrer">
        <img src={LogitechG} alt="LogitechG Logo" data-aos="fade-down" data-aos-duration="300" />
      </a>
      <a href="https://www.twitch.tv/" target="_blank" rel="noreferrer">
        <img src={Twitch} alt="Twitch Logo" data-aos="fade-down" data-aos-duration="400" />
      </a>
    </div>
  );
};

export default PartnersBanner;
