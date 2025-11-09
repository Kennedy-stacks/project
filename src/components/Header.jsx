import React from 'react';
import './Header.css';

const Header = () => {
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
            <h1>Exclusive</h1>
          </div>

          {/* NAVIGATION */}
          <nav className="nav-menu">
            <a href="/" className="nav-link active">Home</a>
            <a href="/contact" className="nav-link">Contact</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/signup" className="nav-link">Sign Up</a>
          </nav>

          {/* RIGHT ACTIONS: SEARCH + ICONS */}
          <div className="header-actions">
            <div className="search-bar">
              <input
                type="search"
                className="search-input"
                placeholder="What are you looking for?"
              />
              <button className="search-btn">🔍</button>
            </div>

            <div className="icon-buttons">
              <button className="action-button">
                <span>♡</span>
              </button>
              <button className="action-button">
                <span>🛒</span>
                <span className="action-badge">2</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;