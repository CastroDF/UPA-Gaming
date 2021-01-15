import React from "react";
import "./style.css";
import AMD from "../../assets/AMDPartner.svg";
import Aorus from "../../assets/AorusPartner.svg";
import LogitechG from "../../assets/LogitechGPartner.svg";
import Twitch from "../../assets/TwitchPartner.svg";


const PartnersBanner = () => {
    return (
        <div className="banner" >
            <img src={AMD} alt="AMD Logo" data-aos="fade-down" data-aos-duration="100" />
            <img src={Aorus} alt="Aorus Logo" data-aos="fade-down" data-aos-duration="200" />
            <img src={LogitechG} alt="LogitechG Logo" data-aos="fade-down" data-aos-duration="300" />
            <img src={Twitch} alt="Twitch Logo" data-aos="fade-down" data-aos-duration="400" />
        </div>
    )
}

export default PartnersBanner;
