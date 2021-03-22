import React, { useState } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./style.css";
import cx from "classnames";

const StyledCarousel = ({ slidesPerPage, items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const showPrev = () => {
    return currentSlide !== 0 && setCurrentSlide(currentSlide - 1);
  };
  const showNext = () => {
    return currentSlide !== items.length - slidesPerPage && setCurrentSlide(currentSlide + 1);
  };

  return (
    <div className="carouselContainer">
      <Carousel
        className="styledCarousel"
        slidesPerPage={slidesPerPage}
        slides={items}
        value={currentSlide}
        draggable={false}
      />
      <button onClick={() => showPrev()} className={cx("arrowButton left", {
        "disabledButton": currentSlide === 0
      })}
      disabled={currentSlide === 0}>
        <i className="arrowIcon fas fa-angle-left"></i>
      </button>
      <button onClick={() => showNext()} className={cx("arrowButton right", {
        "disabledButton": currentSlide === items.length - slidesPerPage
      })}
      disabled={currentSlide === items.length - slidesPerPage}>
        <i className="arrowIcon fas fa-angle-right"></i>
      </button>
    </div>
  );
};

export default StyledCarousel;
