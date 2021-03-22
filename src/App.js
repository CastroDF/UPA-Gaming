import "./styles/index.css";
import React from "react";
import Header from "./components/Header/";
import PlayersCarousel from "./components/PlayersCarousel";
import BeUPA from "./components/BeUPA";
import WeAre from "./components/WeAre";
import PartnersBanner from "./components/PartnersBanner";
import {AppStateProvider} from "./context/sectionsRef";

const App = () => {
  return (
    <AppStateProvider>
      <div className="container">
        <Header />
        <WeAre />
        <PartnersBanner />
        <PlayersCarousel />
        <BeUPA />
      </div>
    </AppStateProvider>
  );
};

export default App;
