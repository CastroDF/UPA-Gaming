import React, {useEffect} from "react";
import PlayerCard from "components/PlayerCard";
import StyledCarousel from "components/shared/carousel";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Players from "data";

const getSlides = (items) =>
  items.map((item, index) => (
    <div data-aos="fade-left" data-aos-delay={index * 100} key={index} >
      <PlayerCard key={item.firstName} card={item} />
    </div>
  ));

const slides = getSlides(Players);

const PlayersCarousel = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="playersCarousel">
      <StyledCarousel slidesPerPage={3} items={slides} />
    </section>
  );
};

export default PlayersCarousel;
