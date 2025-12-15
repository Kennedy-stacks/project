import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // All products data for searching
  const allProducts = [
    {
      id: 1,
      name: "The north coat",
      price: 260,
      oldPrice: 360,
      discount: "-30%",
      image: "/images/northcoat.png",
      rating: 5,
      reviews: 65,
      category: "Clothing"
    },
    {
      id: 2,
      name: "Gucci duffle bag",
      price: 960,
      oldPrice: 1160,
      discount: "-35%",
      image: "/images/bag.png",
      rating: 4.5,
      reviews: 65,
      category: "Accessories"
    },
    {
      id: 3,
      name: "RGB liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      discount: "-10%",
      image: "/images/cpu.png",
      rating: 4.5,
      reviews: 65,
      category: "Electronics"
    },
    {
      id: 4,
      name: "Small BookSelf",
      price: 360,
      oldPrice: null,
      image: "/images/shelf.png",
      rating: 5,
      reviews: 65,
      category: "Furniture"
    }
  ];

  const performSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const filtered = allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  };

  const value = {
    searchQuery,
    searchResults,
    isSearching,
    performSearch,
    clearSearch,
    allProducts
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};