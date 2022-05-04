import React from "react";
import "../styles/WeaponStyle.css";

function WeaponCard({ wpimg, wpname, wpcategory, wphs, wpbody, wpleg }) {
  return (
    <div className="wp-container">
      <div className="wp-imageContainer box">
        <img src={wpimg} alt="" />
        <h3>{wpname}</h3>
        <p>{wpcategory}</p>
      </div>

      <div className="wp-detailContainer box">
        <h3>Stats</h3>
        <p>Head Damage: {wphs}</p>
        <p>Body Damage: {wpbody}</p>
        <p>Leg Damage: {wpleg}</p>
      </div>
    </div>
  );
}

export default WeaponCard;
