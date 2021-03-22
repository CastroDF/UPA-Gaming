import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header>
      <nav className="navBar">
        <div className="navTab">Players</div>
        <div className="navTab">News</div>
        <div className="navTab">Contact</div>
        <a href="https://www.twitch.tv/chanobarrile" className="navTab" target="_blank" rel="noreferrer">
          <i className="fab fa-twitch twitch"></i>
        </a>
      </nav>
    </header>
  );
};

export default Header;
