import React, { useState } from "react";
import "./App.css";
import {
  GetDataButton,
  Searchbar,
  CountryContainer,
  Navbar,
  MainContainer,
} from "./Components";
import { useStateContext } from "./contexts/ContextProvider";

function App() {
  const { countryName, setCountryName } = useStateContext();
  const { countryData, setCountryData } = useStateContext();

  return (
    <div className="body">
      <Navbar />
      <MainContainer />
    </div>
  );
}
export default App;
