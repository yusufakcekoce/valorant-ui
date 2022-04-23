import React from "react";
import "../styles/MapStyle.css";

function MapCard({ mapimg, mapname, mapcategory }) {
  return (
    <div className="map-container">
      <div className="map-img">
        <img src={mapimg} alt="" />
      </div>
      <div className="map-name">{mapname}</div>
      <div className="map-category">{mapcategory}</div>
    </div>
  );
}

export default MapCard;
