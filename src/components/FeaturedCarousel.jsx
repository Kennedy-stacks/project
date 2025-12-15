import React from "react";
import "./FeaturedCarousel.css";

const FeaturedCarousel = ({ product }) => {
  const { tag, title, description, image, buttonText } = product;
  
  return (
    <div className="carousel">
      <div className="carousel-content">
        <span className="product-tag">{tag}</span>
        <h1 className="carousel-title">{title}</h1>
        <p className="carousel-description">{description}</p>
        <button className="carousel-button">{buttonText}</button>
      </div>
      <div className="carousel-image">
        <img src={image} alt={title} />
      </div>
      <div className="carousel-controls">
        <div className="dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarousel;