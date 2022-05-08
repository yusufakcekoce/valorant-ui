import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/AgentPagesStyle.css";

const CardDetails = () => {
  let { uuid } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let { data } = fetchedData;
  console.log(fetchedData);

  let api = `https://valorant-api.com/v1/agents/${uuid}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="ap-container">
      <div className="ap-left-bar">
        <div className="ap-img">
          <img src={data?.background} alt="" width="400px" className="img1" />
          <img
            src={data?.fullPortraitV2}
            alt=""
            width="400px"
            className="img2"
          />
        </div>
        <div className="ap-details">
          <p>{data?.displayName}</p>
          <p>{data?.role?.displayName}</p>
        </div>
      </div>
      <div className="ap-content">
        <div className="ap-content-box">
          <ul className="ap-list">
            <li>
              <p className="skill-head">
                {data && data.abilities[0].displayName}
              </p>
              <p>
                {data && data.abilities[0].description}
                <img
                  src={data && data.abilities[0].displayIcon}
                  alt=""
                  width="50px"
                />
              </p>
              <hr />
            </li>
            <li>
              <p className="skill-head">
                {data && data.abilities[1].displayName}
              </p>
              <p>
                {data && data.abilities[1].description}
                <img
                  src={data && data.abilities[1].displayIcon}
                  alt=""
                  width="50px"
                />
              </p>
              <hr />
            </li>
            <li>
              <p className="skill-head">
                {data && data.abilities[2].displayName}
              </p>
              <p>
                {data && data.abilities[2].description}
                <img
                  src={data && data.abilities[2].displayIcon}
                  alt=""
                  width="50px"
                />
              </p>
              <hr />
            </li>
            <li>
              <p className="skill-head">
                {data && data.abilities[3].displayName}
              </p>
              <p>
                {data && data.abilities[3].description}
                <img
                  src={data && data.abilities[3].displayIcon}
                  alt=""
                  width="50px"
                />
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
