import React from "react";
import "../styles/MapStyle.css";
import { Link } from "react-router-dom";

function MapCard({ mapimg, mapname, mapcategory, page, uuid }) {
  return (
    <Link to={`${page}${uuid}`} key={uuid}>
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
    </Link>
  );
}

export default MapCard;
