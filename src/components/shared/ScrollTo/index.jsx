import React from "react";
import ScrollToWrapper from "./ScrollTo";

const scrollToRef = (height) => window.scrollTo(0, height);

const ScrollTo = ({scrollTo}) => {
  const executeScroll = () => scrollToRef(scrollTo);

  return (
    <ScrollToWrapper
      className="scrollTo"
      data-aos="fade-down"
      data-aos-delay="1000"
      data-aos-anchor="header"
      onClick={executeScroll}
    >
      <i className="arrowIcon fas fa-angle-down"></i>
    </ScrollToWrapper>
  );
};

export default ScrollTo;
