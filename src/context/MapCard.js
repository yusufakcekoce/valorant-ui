import React from "react";
import "../styles/MapStyle.css";

function MapCard({ mapimg, mapname, mapcategory }) {
  return (
    <div className="map-container">
      <div className="map-image-container">
        <img src={mapimg} alt="" />
      </div>
      <div className="map-content">
        <div className="map-title">
          <h3>{mapname}</h3>
        </div>
        <div className="map-body">
          <p>{mapcategory}</p>
        </div>
      </div>
    </div>
  );
}

export default MapCard;
