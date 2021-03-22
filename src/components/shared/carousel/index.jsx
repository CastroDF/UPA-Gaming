import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./style.css";

const StyledCarousel = ({slidesPerPage, items}) => {
  return (
    <Carousel
      className="styledCarousel"
      slidesPerPage={slidesPerPage}
      slides={items}
      arrows
      infinite
    />
  );
};

export default StyledCarousel;
