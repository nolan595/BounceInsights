import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import Button from "@mui/material/Button";

function GetDataButton() {
  const { countryName, setCountryName } = useStateContext();
  const { countryData, setCountryData } = useStateContext();

  const fetchCountryData = async () => {
    try {
      const response = await fetch(`/api/countries/${countryName}`);
      const data = await response.json();
      setCountryData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  function CountryInfo({ countryData }) {
    if (!countryData) return <div>No country data available.</div>;

    const {
      name, // Object with common and official names
      capital, // Array of capital city names
      population,
      languages, // Object of languages spoken
      flags, // Object with various flag images
    } = countryData[0]; // Assuming countryData is an array of countries, and you're interested in the first one

    return (
      <div>
        <h2>{name.common}</h2>
        <img
          src={flags.png}
          alt={`Flag of ${name.common}`}
          style={{ width: "150px" }}
        />
        <p>
          <strong>Capital:</strong> {capital && capital[0]}
        </p>
        <p>
          <strong>Population:</strong> {population.toLocaleString()}
        </p>
        <p>
          <strong>Languages:</strong> {Object.values(languages).join(", ")}
        </p>
      </div>
    );
  }
  return (
    <div>
      {" "}
      <Button
        variant="outlined"
        onClick={fetchCountryData}
        sx={{
          p: 1.75,
          m: 1, // margin
          width: "25ch", // width
          backgroundColor: "#DE4BD9", // background color
          color: "white", // text color
          "&:hover": {
            backgroundColor: "#C32CCB", // background color on hover
          },
          // Add more styles as needed
        }}
      >
        Search Country
      </Button>
    </div>
  );
}

export default GetDataButton;
