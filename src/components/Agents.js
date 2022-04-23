import React, { useEffect, useState } from "react";
import ProductCard from "../context/ProductCard";
import { getAgents } from "../Api";

function Agents() {
  const [agents, setAgents] = useState();

  useEffect(() => {
    loadAgents();
  }, []);

  const loadAgents = () => {
    getAgents().then((res) => {
      if (res.data) {
        setAgents(res.data);
      }
    });
  };
  console.log(agents);
  return (
    <div className="products">
      {agents &&
        agents.data.map((item) => (
          <ProductCard
            img={item.displayIcon}
            name={item.displayName}
            category={item.description}
          />
        ))}
    </div>
  );
}

export default Agents;
