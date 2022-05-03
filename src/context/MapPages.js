import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/MapPageStyle.css";

const MapPages = () => {
  let { uuid } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let { data, abilities, role, displayName, displayIcon, description } =
    fetchedData;
  console.log(fetchedData);

  let api = `https://valorant-api.com/v1/maps/${uuid}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    // data && data.abilities[0].description
    <div className="mp-container">
      <div className="img-container">
        <img src={data?.splash} alt="" width="900px" />
      </div>
      <div className="mp-content">
        <div className="mp-leftBox">
          <div className="mp-img">
            <img src={data?.displayIcon} alt="" width="400px" />
          </div>
        </div>
        <div className="mp-rightBox">
          <div className="mp-details">
            <h3>{data?.displayName}</h3>
            <br />
            <h4>Coordinates :</h4>
            <p>{data?.coordinates}</p>
            <br />
            <h4>Regions</h4>
            <p>
              {data && data.callouts[0].regionName}, (
              {data && data.callouts[0].superRegionName})
            </p>
            <p>
              {data && data.callouts[1].regionName}, (
              {data && data.callouts[1].superRegionName})
            </p>
            <p>
              {data && data.callouts[2].regionName}, (
              {data && data.callouts[2].superRegionName})
            </p>
            <p>
              {data && data.callouts[3].regionName}, (
              {data && data.callouts[3].superRegionName})
            </p>
            <p>
              {data && data.callouts[4].regionName}, (
              {data && data.callouts[4].superRegionName})
            </p>
            <p>
              {data && data.callouts[5].regionName}, (
              {data && data.callouts[5].superRegionName})
            </p>
            <p>
              {data && data.callouts[6].regionName}, (
              {data && data.callouts[6].superRegionName})
            </p>
            <p>
              {data && data.callouts[7].regionName}, (
              {data && data.callouts[7].superRegionName})
            </p>
            <p>
              {data && data.callouts[8].regionName}, (
              {data && data.callouts[8].superRegionName})
            </p>
            <p>
              {data && data.callouts[9].regionName}, (
              {data && data.callouts[9].superRegionName})
            </p>
            <p>
              {data && data.callouts[10].regionName}, (
              {data && data.callouts[10].superRegionName})
            </p>
            <p>
              {data && data.callouts[11].regionName}, (
              {data && data.callouts[11].superRegionName})
            </p>
            <p>
              {data && data.callouts[12].regionName}, (
              {data && data.callouts[12].superRegionName})
            </p>
            <p>
              {data && data.callouts[13].regionName}, (
              {data && data.callouts[13].superRegionName})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPages;
