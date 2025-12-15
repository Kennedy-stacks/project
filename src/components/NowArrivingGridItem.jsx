import React from "react";
import "./NowArrivingGridItem.css";

const NowArrivingGridItem = ({ product }) => (
  <div className="now-item">
    <img src={product.image} alt={product.name} />
    <div className="overlay">
      <h4>{product.name}</h4>
      <p>Shop Now →</p>
    </div>
  </div>
);

export default NowArrivingGridItem;
