import React from "react";

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

// function ProductCard({img,name,category}) {
//   return (
//     <div className="product-container">
//       <div className="product-img"><img src={img} alt="" /></div>
//       <div className="product-name">{name}</div>
//       <div className="product-category">{category}</div>
//     </div>
//   );
// }

// export default ProductCard;
