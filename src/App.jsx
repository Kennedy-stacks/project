import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import CategoryCard from "./components/CategoryCard";
import FeaturedCarousel from "./components/FeaturedCarousel";
import "./App.css";

const categories = [
  { name: "Phones", icon: "phone" },
  { name: "Computers", icon: "laptop" },
  { name: "Watches", icon: "watch" },
  { name: "Cameras", icon: "camera" },
  { name: "Headphones", icon: "headphones" },
  { name: "Gaming", icon: "gamepad" }
];

const bestSellingProducts = [
  {
    id: 1,
    name: "The north coat",
    price: 260,
    oldPrice: 360,
    discount: "-30%",
    image: "/images/northcoat.png",
    rating: 5,
    reviews: 65
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    price: 960,
    oldPrice: 1160,
    discount: "-35%",
    image: "/images/bag.png",
    rating: 4.5,
    reviews: 65
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    price: 160,
    oldPrice: 170,
    discount: "-10%",
    image: "/images/cpu.png",
    rating: 4.5,
    reviews: 65
  },
  {
    id: 4,
    name: "Small BookSelf",
    price: 360,
    oldPrice: null,
    image: "/images/shelf.png",
    rating: 5,
    reviews: 65
  }
];

const featuredProduct = {
  tag: "iPhone 14 Series",
  title: "Up to 10% off Voucher",
  description: "",
  image: "/images/iphone-banner.jpg",
  buttonText: "Shop Now"
};

function App() {
  return (
    <div className="app">
      <Header />

      <div className="content-wrapper">
        {/* LEFT SIDEBAR */}
        <aside className="sidebar">
          <nav className="sidebar-menu">
            <a href="/" className="sidebar-menu-item">Woman’s Fashion</a>
            <a href="/" className="sidebar-menu-item">Men’s Fashion</a>
            <a href="/" className="sidebar-menu-item">Electronics</a>
            <a href="/" className="sidebar-menu-item">Home & Lifestyle</a>
            <a href="/" className="sidebar-menu-item">Medicine</a>
            <a href="/" className="sidebar-menu-item">Sports & Outdoor</a>
            <a href="/" className="sidebar-menu-item">Baby’s & Toys</a>
            <a href="/" className="sidebar-menu-item">Groceries & Pets</a>
            <a href="/" className="sidebar-menu-item">Health & Beauty</a>
          </nav>
        </aside>

        {/* RIGHT MAIN CONTENT */}
        <main className="main-content">
          {/* 1. FEATURED CAROUSEL */}
          <div className="carousel-section">
            <FeaturedCarousel product={featuredProduct} />
          </div>

          {/* 2. CATEGORIES */}
          <section className="section">
            <div className="section-header">
              <div className="section-title">
                <div className="red-bar"></div>
                <h3>Categories</h3>
              </div>
              <h2>Browse By Category</h2>
              <div className="section-controls">
                <button className="arrow-btn">{"<"}</button>
                <button className="arrow-btn">{">"}</button>
              </div>
            </div>
            <div className="categories-grid">
              {categories.map((cat, i) => (
                <CategoryCard key={i} category={cat} />
              ))}
            </div>
          </section>

          {/* 3. BEST SELLING */}
          <section className="section">
            <div className="section-header">
              <div className="section-title">
                <div className="red-bar"></div>
                <h3>This Month</h3>
              </div>
              <h2>Best Selling Products</h2>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="products-grid">
              {bestSellingProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>

          {/* 4. MUSIC BANNER */}
          <section className="music-banner">
            <div className="banner-content">
              <h3>Enhance Your Music Experience</h3>
              <div className="countdown">
                <div><span>23</span> Hours</div>
                <div><span>05</span> Days</div>
                <div><span>59</span> Minutes</div>
                <div><span>35</span> Seconds</div>
              </div>
              <button className="buy-now-btn">Buy Now!</button>
            </div>
            <img src="/images/speaker.png" alt="Speaker" />
          </section>

          {/* 5. EXPLORE PRODUCTS */}
          <section className="section">
            <div className="section-header">
              <div className="section-title">
                <div className="red-bar"></div>
                <h3>Our Products</h3>
              </div>
              <h2>Explore Our Products</h2>
            </div>
            <div className="products-grid">
              {/* Add more products */}
            </div>
            <button className="view-all-products">View All Products</button>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;