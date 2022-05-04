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
            wpimg={item?.skins[11]?.displayIcon}
            wpname={item.displayName}
            wpcategory={item?.shopData?.category}
            wphs={item?.weaponStats?.damageRanges[0]?.headDamage}
            wpbody={item?.weaponStats?.damageRanges[0]?.bodyDamage}
            wpleg={item?.weaponStats?.damageRanges[0]?.legDamage}
          />
        ))}
    </div>
  );
}

export default Weapons;
