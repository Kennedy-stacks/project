import React from "react";
import {
  FaMobileAlt,
  FaLaptop,
  FaClock,
  FaCamera,
  FaHeadphones,
  FaGamepad,
  FaBox
} from "react-icons/fa";
import "./CategoryCard.css";

const CategoryCard = ({ category }) => {
  const getIcon = (iconName) => {
    const icons = {
      phone: <FaMobileAlt />,
      laptop: <FaLaptop />,
      watch: <FaClock />,
      camera: <FaCamera />,
      headphones: <FaHeadphones />,
      gamepad: <FaGamepad />
    };
    return icons[iconName] || <FaBox />;
  };

  return (
    <div className="category-card">
      <div className="icon-placeholder">{getIcon(category.icon)}</div>
      <p>{category.name}</p>
    </div>
  );
};

export default CategoryCard;
