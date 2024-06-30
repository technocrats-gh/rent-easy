import React, { useState } from 'react';
import SearchBar from './searchBar';
import Card from './card';
import '../../Styles/HomePage.scss'

function HomePage({ isMenuOpen }) {

  // Handle search queries
  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  return (
    <div className="home-page">
      <div className='header'>
        <div className='search'>
          <SearchBar onSearch={handleSearch} />
        </div>
        <span className="greetings">Best available deals</span>
      </div>
      <div >
        <Card />
      </div>
    </div>

  );
}

export default HomePage;
