import React from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../contexts/SearchContext';
import ProductCard from './ProductCard';
import './SearchResults.css';

const SearchResults = () => {
  const { searchResults, searchQuery, isSearching, clearSearch } = useSearch();

  if (!isSearching || searchResults.length === 0) {
    return null;
  }

  return (
    <div className="search-results-overlay">
      <div className="search-results-container">
        <div className="search-results-header">
          <h3>Search Results for "{searchQuery}"</h3>
          <button onClick={clearSearch} className="close-search">×</button>
        </div>
        <div className="search-results-grid">
          {searchResults.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {searchResults.length === 0 && (
          <div className="no-results">
            <p>No products found for "{searchQuery}"</p>
            <Link to="/" onClick={clearSearch}>Browse all products</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;