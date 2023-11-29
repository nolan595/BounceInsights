import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import "../../styles/searchbar.css";

function Searchbar() {
  const { countryName, setCountryName } = useStateContext();
  const { countryData, setCountryData } = useStateContext();

  const handleInputChange = (e) => {
    setCountryName(e.target.value);
  };

  const fetchCountryData = async () => {
    try {
      const response = await fetch(
        `https://bounce-insights-hf6n.onrender.com/api/countries/${countryName}`
      );
      const data = await response.json();
      const country = Array.isArray(data) ? data[0] : data;
      setCountryData(country);
      console.log(country);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        value={countryName}
        onChange={handleInputChange}
        placeholder="Search for a country..."
      />
      <button onClick={fetchCountryData}>Search</button>
    </div>
  );
}

export default Searchbar;
