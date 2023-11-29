/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "../../styles/topRight.css";
import { useStateContext } from "../../contexts/ContextProvider";

function TopRight() {
  const { countryData } = useStateContext();

  const latitude = countryData?.latlng?.[0];
  const longitude = countryData?.latlng?.[1];

  return (
    <div>
      {latitude && longitude && (
        <div className="map-container">
          <iframe
            width="100%"
            height="272px"
            style={{ border: 0, "border-radius": "10px" }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyAk576YZfG9uHRyxNTOP9NyKfoBE7MkVt4&center=${latitude},${longitude}&zoom=6`}
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default TopRight;
