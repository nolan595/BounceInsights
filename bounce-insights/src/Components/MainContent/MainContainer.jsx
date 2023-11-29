import React from "react";
import "../../styles/mainContainer.css";
import { useStateContext } from "../../contexts/ContextProvider";
import { Searchbar, TopLeft, TopRight, Cards } from "../";
function MainContainer() {
  const { countryData } = useStateContext();
  const hasCountryData = countryData && Object.keys(countryData).length > 0;

  return (
    <div className="main">
      <div className="search-bar">
        <Searchbar />
      </div>

      {hasCountryData && (
        <div className="data">
          <div className="top">
            <div className="top-left">
              <TopLeft />
            </div>
            <div className="top-right">
              <TopRight />
            </div>
          </div>
          <div className="bottom">
            <Cards />
          </div>
        </div>
      )}
    </div>
  );
}

export default MainContainer;
