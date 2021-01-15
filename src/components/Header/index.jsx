import React from "react";
import "./style.css";

const Header = () => {
    return (
        <header>
            <nav className="navBar">
                <div className="navTab">Players</div>
                <div className="navTab">News</div>
                <div className="navTab">Contact</div>
                <div className="navTab">
                    <i className="fab fa-twitch twitch"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;
