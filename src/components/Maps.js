import React, { useEffect, useState } from "react";
import MapCard from "../context/MapCard";
import { getMaps } from "../Api";

function Maps() {
  const [maps, setMaps] = useState();

  useEffect(() => {
    loadMaps();
  }, []);

  const loadMaps = () => {
    getMaps().then((res) => {
      if (res.data) {
        setMaps(res.data);
      }
    });
  };
  console.log(maps);
  return (
    <div className="mapps">
      {maps &&
        maps.data.map((item) => (
          <MapCard
            page="/maps/"
            uuid={item.uuid}
            mapimg={item.splash}
            mapname={item.displayName}
            mapcategory={item.coordinates}
          />
        ))}
    </div>
  );
}
export default Maps;
