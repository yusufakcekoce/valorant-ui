import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let { uuid } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let { data, displayName, displayIcon, description } = fetchedData
  console.log(fetchedData);

  let api = `https://valorant-api.com/v1/agents/${uuid}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return <div>The details of the card are here - {uuid}</div>;
};

export default CardDetails;
