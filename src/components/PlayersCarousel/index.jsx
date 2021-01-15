import React, { useEffect } from "react";
import PlayerCard from "../PlayerCard";
import "./style.css";
import DiegoCastro from "../../assets/DiegoCastro.jpg";
import Thresh from "../../assets/Thresh.jpg";
import EstebanSola from "../../assets/EstebanSola.jpg";
import Camille from "../../assets/Camille.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const PlayersInformation = [
  {
    firstName: "Diego",
    lastName: "Castro",
    profileImage: {
      src: DiegoCastro,
      alt: "Diego Casto Picture",
    },
    champImage: {
      src: Thresh,
      alt: "Thresh Picture",
    },
    tag: "Bull Diego",
    age: 20,
    birthDate: "24/01/00",
    position: "support, adc",
    mains: ["Thresh", "Bardo", "Rakan"],
  },
  {
    firstName: "Esteban",
    lastName: "Sola",
    profileImage: {
      src: EstebanSola,
      alt: "Esteban Sola Picture",
    },
    champImage: {
      src: Camille,
      alt: "Camille Picture",
    },
    tag: "Cuchu3",
    age: 20,
    birthDate: "24/01/00",
    position: "Top, adc",
    mains: ["Camille", "Fiora", "Renek"],
  },
];

const getSlides = (items) =>
  items.map((item, index) => (
    <div data-aos="fade-left" data-aos-delay={index * 150}>
      <PlayerCard key={item.firstName} card={item} />
    </div>
  ));

const slides = getSlides(PlayersInformation);

const PlayersCarousel = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <section className="playersCarousel">
      {slides.map((slide) => slide)}
    </section>
  );
};

export default PlayersCarousel;
