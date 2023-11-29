import React from "react";
import "../../styles/cards.css";
import { useStateContext } from "../../contexts/ContextProvider";
function Cards() {
  const { countryData } = useStateContext();
  const continent = countryData?.continents?.[0]; // Assuming it's an array with one item
  const region = countryData?.region;
  const subregion = countryData?.subregion;
  const borders = countryData?.borders;
  const languages = countryData?.languages;
  const currencies = countryData?.currencies;
  const idd = countryData?.idd;
  const iddCode = idd ? `${idd.root}${idd.suffixes?.join(", ")}` : null;
  const independence = countryData?.independent ? "Yes" : "No";
  const unMember = countryData?.unMember ? "Yes" : "No";

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-title">Region</div>
        <div className="title-divider"></div>
        <div className="card-info">
          {continent && (
            <div className="card-info-item">
              <p>Continent</p>
              <h1>{continent}</h1>
            </div>
          )}
          {region && (
            <div className="card-info-item">
              <p>Region</p>
              <h1>{region}</h1>
            </div>
          )}
          {subregion && (
            <div className="card-info-item">
              <p>Subregion</p>
              <h1>{subregion}</h1>
            </div>
          )}
        </div>
      </div>

      <div className="card">
        <div className="card-title">Borders</div>
        <div className="title-divider"></div>
        <div className="card-info">
          {borders && borders.length > 0 ? (
            <div className="card-info-item borders-list">
              <div className="border-countries">
                {borders.map((border, index) => (
                  <span key={index} className="border-country">
                    {border}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="card-info-item" value="no-data">
              <p>{countryData?.name?.common} has no bordering countries.</p>
            </div>
          )}
        </div>
      </div>

      <div className="card">
        <div className="card-title">Info</div>
        <div className="title-divider"></div>
        <div className="card-info">
          {/* ...other info items... */}

          {languages && (
            <div className="card-info-item">
              <p>Languages</p>
              <div>
                {Object.entries(languages).map(([code, name]) => (
                  <div key={code}>{name}</div>
                ))}
              </div>
            </div>
          )}
          {currencies && (
            <div className="card-info-item">
              <p>Currencies</p>
              <div>
                {Object.entries(currencies).map(([code, { name, symbol }]) => (
                  <div key={code}>{`${name} (${symbol})`}</div>
                ))}
              </div>
            </div>
          )}
          {iddCode && (
            <div className="card-info-item">
              <p>IDD Code</p>
              <h1>{iddCode}</h1>
            </div>
          )}
        </div>
      </div>

      <div className="card">
        <div className="card-title">Independent</div>
        <div className="title-divider"></div>
        <div className="card-info">
          <div className="card-info-item">
            <p>Independent</p>
            <h1>{independence}</h1>
          </div>
          <div className="card-info-item">
            <p>UN Member</p>
            <h1>{unMember}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
