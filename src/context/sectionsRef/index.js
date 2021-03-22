import React, { createContext, useContext, useState } from "react";

export const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [weAreHeight, setWeAreHeight] = useState();
  const [playersCarouselHeight, setPlayersCarouselHeight] = useState();
  const [partnersBannerHeight, setPartnersBannerHeight] = useState();

  return <AppStateContext.Provider value={{
    weAreHeight,
    playersCarouselHeight,
    partnersBannerHeight,
    setWeAreHeight,
    setPlayersCarouselHeight,
    setPartnersBannerHeight,
  }}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error(
      "Wrap your application with <AppStateProvider /> to useAppState().",
    );
  }
  return context;
};
