import React, { useState } from 'react';
import SearchBar from './searchBar';
import Hamburger from './Hamburger';
import Card from './card';
import { Menubar } from 'primereact/menubar';
// import { Card } from 'primereact/card'
import '../../Styles/HomePage.scss'

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Handle search queries
  const handleSearch = (query) => {
    console.log('Search query:', query);
    // Add search logic here (e.g., filter listings based on query)
  };

  return (
    <div className={isMenuOpen ? "push-home-page" : "home-page"}>
      <Hamburger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>
      <Menubar className='menubar' />
      <div className='header'>
        <div className='search'>
          <SearchBar onSearch={handleSearch} />
        </div>
        <span className="greetings">Best available deals</span>
      </div>
        <Card />

    </div>
  );
}

export default HomePage;


