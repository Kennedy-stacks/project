import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaHeart, FaShare, FaPlus, FaMinus } from 'react-icons/fa';
import { useCart } from '../contexts/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    // Expanded product data with more details
    const productsData = {
      1: {
        id: 1,
        name: "The north coat",
        price: 260,
        oldPrice: 360,
        discount: "-30%",
        images: ["/images/northcoat.png", "/images/northcoat.png"],
        rating: 5,
        reviewCount: 65,
        description: "Stay warm and stylish with our premium North Coat. Made from high-quality materials with excellent insulation for cold weather.",
        features: ["Water-resistant fabric", "Insulated lining", "Multiple pockets", "Adjustable hood"],
        category: "Clothing",
        inStock: true,
        reviews: [
          { id: 1, user: "John D.", rating: 5, comment: "Great coat, very warm!", date: "2024-01-15" },
          { id: 2, user: "Sarah M.", rating: 4, comment: "Good quality, fits well", date: "2024-01-10" }
        ]
      },
      2: {
        id: 2,
        name: "Gucci duffle bag",
        price: 960,
        oldPrice: 1160,
        discount: "-35%",
        images: ["/images/bag.png", "/images/bag.png"],
        rating: 4.5,
        reviewCount: 65,
        description: "Luxury duffle bag from Gucci. Perfect for travel with premium leather construction and spacious interior.",
        features: ["Genuine leather", "Spacious main compartment", "Multiple interior pockets", "Adjustable strap"],
        category: "Accessories",
        inStock: true,
        reviews: [
          { id: 1, user: "Mike R.", rating: 5, comment: "Beautiful bag, worth every penny!", date: "2024-01-12" }
        ]
      },
      3: {
        id: 3,
        name: "RGB liquid CPU Cooler",
        price: 160,
        oldPrice: 170,
        discount: "-10%",
        images: ["/images/cpu.png", "/images/cpu.png"],
        rating: 4.5,
        reviewCount: 65,
        description: "High-performance RGB CPU cooler with liquid cooling technology. Keep your system cool with stunning RGB lighting.",
        features: ["RGB lighting", "Liquid cooling", "Quiet operation", "Easy installation"],
        category: "Electronics",
        inStock: true,
        reviews: [
          { id: 1, user: "Tech G.", rating: 5, comment: "Excellent cooling performance!", date: "2024-01-08" }
        ]
      },
      4: {
        id: 4,
        name: "Small BookSelf",
        price: 360,
        oldPrice: null,
        images: ["/images/shelf.png", "/images/shelf.png"],
        rating: 5,
        reviewCount: 65,
        description: "Compact bookshelf perfect for small spaces. Sturdy construction with modern design.",
        features: ["Solid wood construction", "5 shelves", "Easy assembly", "Space-saving design"],
        category: "Furniture",
        inStock: true,
        reviews: [
          { id: 1, user: "Anna L.", rating: 4, comment: "Perfect size for my apartment!", date: "2024-01-05" }
        ]
      }
    };

    const productData = productsData[id];
    if (productData) {
      setProduct(productData);
    }
  }, [id]);

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  if (!product) {
    return <div className="product-detail-loading">Loading product...</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/">{product.category}</Link> / {product.name}
        </div>

        <div className="product-detail-content">
          {/* Product Images */}
          <div className="product-images">
            <div className="main-image">
              <img src={product.images[selectedImage]} alt={product.name} />
            </div>
            <div className="thumbnail-images">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className={selectedImage === index ? 'active' : ''}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <h1 className="product-title">{product.name}</h1>

            <div className="product-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < product.rating ? 'filled' : ''} />
                ))}
              </div>
              <span className="review-count">({product.reviews} reviews)</span>
            </div>

            <div className="product-price">
              <span className="current-price">${product.price}</span>
              {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
              {product.discount && <span className="discount">{product.discount}</span>}
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>

            <div className="product-features">
              <h3>Key Features:</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="product-actions">
              <div className="quantity-selector">
                <button onClick={() => handleQuantityChange(-1)} className="quantity-btn">
                  <FaMinus />
                </button>
                <span className="quantity">{quantity}</span>
                <button onClick={() => handleQuantityChange(1)} className="quantity-btn">
                  <FaPlus />
                </button>
              </div>

              <button onClick={handleAddToCart} className="add-to-cart-btn">
                Add to Cart
              </button>

              <button onClick={toggleWishlist} className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}>
                <FaHeart />
              </button>

              <button className="share-btn">
                <FaShare />
              </button>
            </div>

            <div className="product-meta">
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Stock:</strong> {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="product-reviews">
          <h2>Customer Reviews</h2>
          <div className="reviews-list">
            {product.reviews.map(review => (
              <div key={review.id} className="review-item">
                <div className="review-header">
                  <span className="review-user">{review.user}</span>
                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < review.rating ? 'filled' : ''} />
                    ))}
                  </div>
                  <span className="review-date">{review.date}</span>
                </div>
                <p className="review-comment">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;