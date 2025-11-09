import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { name, price, oldPrice, image, rating } = product;
  
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
        <button className="wishlist-btn">
          <span className="heart-icon">♡</span>
        </button>
        <div className="quick-actions">
          <button className="action-btn">Quick View</button>
          <button className="action-btn">Add to Cart</button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <div className="price-container">
          <span className="current-price">${price}</span>
          {oldPrice && <span className="old-price">${oldPrice}</span>}
        </div>
        <div className="rating">
          {"★".repeat(Math.floor(rating))}
          {"☆".repeat(5 - Math.floor(rating))}
          <span className="rating-value">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
