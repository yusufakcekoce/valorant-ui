import React from "react";
import "../styles/AgentStyle.css"

function ProductCard({ img, name, category }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={img} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{name}</h3>
        </div>
        <div className="card-body">
          <p>{category}</p>
        </div>
      </div>

      <div className="button">
        <a href="#" className="btn">
          VIEW MORE
        </a>
      </div>
    </div>
  );
}

export default ProductCard;