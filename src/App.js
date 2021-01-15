import "./styles/index.css";
import React from "react";
import Header from "./components/Header/";
import PlayersCarousel from "./components/PlayersCarousel";
import BeUPA from "./components/BeUPA";
import WeAre from "./components/WeAre";
import PartnersBanner from "./components/PartnersBanner";

const App = () => {
  return (
    <div className="container">
      <Header />
      <WeAre />
      <PartnersBanner />
      <PlayersCarousel />
      <BeUPA />
    </div>
  );
};

export default App;
