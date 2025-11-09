import React from "react";
import "./CategoryCard.css";

const CategoryCard = ({ category }) => (
  <div className="category-card">
    <div className="icon-placeholder">📦</div>
    <p>{category.name}</p>
  </div>
);

export default CategoryCard;
