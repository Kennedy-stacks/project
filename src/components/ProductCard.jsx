import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaEye, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { name, price, oldPrice, image, rating } = product;

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    // Optional: Add some visual feedback
    const button = e.currentTarget;
    button.style.background = '#4CAF50';
    button.innerHTML = '<span style="margin-right: 6px;">✓</span> Added!';
    setTimeout(() => {
      button.style.background = '';
      button.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="margin-right: 6px;"><path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zM4 12a1 1 0 0 0-1 1v1H2v1a2 2 0 0 0 4 0v-1H5v-1a1 1 0 0 0-1-1zm7 0a1 1 0 0 0-1 1v1h-1v1a2 2 0 0 0 4 0v-1h-1v-1a1 1 0 0 0-1-1z"></path></svg>Add to Cart';
    }, 1500);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <Link to={`/product/${product.id}`}>
          <img src={image} alt={name} />
        </Link>
        <button className="wishlist-btn">
          <FaHeart className="heart-icon" />
        </button>
        <div className="quick-actions">
          <Link to={`/product/${product.id}`} className="action-btn">
            <FaEye /> View Details
          </Link>
          <button className="action-btn" onClick={handleAddToCart}>
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
      <div className="product-info">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name">{name}</h3>
        </Link>
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
