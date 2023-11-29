import React from "react";
import "../../styles/topLeft.css";
import { useStateContext } from "../../contexts/ContextProvider";

function Topleft() {
  const { countryData } = useStateContext();

  const flagSrc = countryData?.flags?.svg;
  const commonName = countryData?.name?.common;
  const officialName = countryData?.name?.official;
  const capital = countryData?.capital?.[0]; // capital is an array, so take the first item
  const population = countryData?.population?.toLocaleString();

  return (
    <div className="top-left-container">
      {flagSrc && (
        <div className="flag-container">
          <img src={flagSrc} alt={`Flag of ${commonName}`} className="flag" />
        </div>
      )}

      <div className="divider"></div>

      {countryData && (
        <div className="flag-info">
          {commonName && (
            <div className="flag-info-title">
              <h1>{commonName}</h1>
            </div>
          )}
          {officialName && (
            <div className="flag-info-item">
              <p>Official Name</p>
              <h2>{officialName}</h2>
            </div>
          )}
          {capital && (
            <div className="flag-info-item">
              <p>Capital</p>
              <h3>{capital}</h3>
            </div>
          )}
          {population && (
            <div className="flag-info-item">
              <p>Population</p>
              <h3>{population}</h3>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Topleft;
