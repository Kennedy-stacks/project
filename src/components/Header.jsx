import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../contexts/CartContext';
import { useSearch } from '../contexts/SearchContext';
import './Header.css';

const Header = () => {
  const { cartCount } = useCart();
  const { performSearch } = useSearch();
  const [searchInput, setSearchInput] = useState('');
  return (
    <>
      {/* === ANNOUNCEMENT BAR === */}
      <div className="announcement-bar">
        <div className="announcement-content">
          <div className="announcement-text">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a href="#" className="shop-now-link">Shop Now</a>
          </div>
          <div className="language-selector">
            <span>English</span>
            <span className="dropdown-arrow">▼</span>
          </div>
        </div>
      </div>

      {/* === MAIN HEADER === */}
      <header className="header">
        <div className="header-container">
          {/* LOGO */}
          <div className="logo">
            <Link to="/" className="logo-link">
              <h1>Exclusive</h1>
            </Link>
          </div>

          {/* NAVIGATION */}
          <nav className="nav-menu">
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/signup" className="nav-link">Sign Up</Link>
          </nav>

          {/* RIGHT ACTIONS: SEARCH + ICONS */}
          <div className="header-actions">
            <div className="search-bar">
              <input
                type="search"
                className="search-input"
                placeholder="What are you looking for?"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    performSearch(searchInput);
                  }
                }}
              />
              <button
                className="search-btn"
                onClick={() => performSearch(searchInput)}
              >
                <FaSearch />
              </button>
            </div>

            <div className="icon-buttons">
              <button className="action-button">
                <FaHeart />
              </button>
              <Link to="/cart" className="action-button cart-link">
                <FaShoppingCart />
                {cartCount > 0 && <span className="action-badge">{cartCount}</span>}
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;