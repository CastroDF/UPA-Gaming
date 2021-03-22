import React, {useState} from "react";
import HeaderWrapper from "./header";
import cx from "classnames";

const Header = () => {
  const [scrollTop, setScrollTop] = useState(0);
  document.addEventListener("scroll", function () {
    setScrollTop(window.scrollY);
  });

  return (
    <HeaderWrapper className={cx({ "headerShadow": scrollTop > 0 })} >
      <nav className="navBar">
        <div className="navTab">Players</div>
        <div className="navTab">News</div>
        <div className="navTab">Contact</div>
        <a href="https://www.twitch.tv/chanobarrile" className="navTab" target="_blank" rel="noreferrer">
          <i className="fab fa-twitch twitch"></i>
        </a>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
