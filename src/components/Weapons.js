import React, { useEffect, useState } from "react";
import WeaponCard from "../context/WeaponCard";
import { getWeapons } from "../Api";

function Weapons() {
  const [weapon, setWeapons] = useState();

  useEffect(() => {
    loadWeapons();
  }, []);

  const loadWeapons = () => {
    getWeapons().then((res) => {
      if (res.data) {
        setWeapons(res.data);
      }
    });
  };
  console.log(weapon);
  return (
    <div className="weapons">
      {weapon &&
        weapon.data.map((item) => (
          <WeaponCard
            wpimg={item.displayIcon}
            wpname={item.displayName}
            wpcategory={item.category}
          />
        ))}
    </div>
  );
}

export default Weapons;
