import React from "react";
import logo from "../images/bounce.svg";
import reset from "../images/reset.svg";
import "../styles/navbar.css";
import { useStateContext } from "../contexts/ContextProvider";

function Navbar() {
  const { countryName, setCountryName } = useStateContext();
  const { countryData, setCountryData } = useStateContext();
  const countryReset = () => {
    setCountryData({});
    setCountryName("");
  };
  return (
    <div>
      <div className="navbar">
        <img src={logo} alt="Bounce Logo" className="navbar-logo" />
        <h1 className="navbar-title">Bounce Insights</h1>
        <img
          src={reset}
          alt="Reset Button"
          className="navbar-reset"
          onClick={countryReset}
        />
      </div>
      <div className="line"></div>
    </div>
  );
}

export default Navbar;
