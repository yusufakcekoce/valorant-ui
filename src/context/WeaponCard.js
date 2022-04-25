import React from "react";
import "../styles/WeaponStyle.css";

function WeaponCard({ wpimg, wpname, wpcategory }) {
  return (
    <div className="wp-container">
      <div className="wp-image-container">
        <img src={wpimg} alt="" />
      </div>
      <div className="wp-content">
        <div className="wp-title">
          <h3>{wpname}</h3>
        </div>
        <div className="wp-body">
          <p>{wpcategory}</p>
        </div>
      </div>
    </div>
  );
}

export default WeaponCard;
