import React, { createContext, useContext, useState } from "react";
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [countryName, setCountryName] = useState("");
  const [countryData, setCountryData] = useState(null);

  return (
    <StateContext.Provider
      value={{ countryData, setCountryData, countryName, setCountryName }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
