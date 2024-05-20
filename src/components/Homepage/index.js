import React, { useState } from 'react';
import SearchBar from './searchBar';
import Hamburger from './Hamburger';
import Card from './card';
import '../../Styles/HomePage.scss'

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
};
console.log(isMenuOpen);
  // Handle search queries
  const handleSearch = (query) => {
    console.log('Search query:', query);
    // Add search logic here (e.g., filter listings based on query)
  };

  return (
    <div className={isMenuOpen ? "push-home-page" : "home-page"}>
      <Hamburger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>
      <div className='header'>
        <h3 className="greetings">Your New Home Awaits</h3>
        <div className='search'>
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      <div className='card-main'>
        <Card />
      </div>
    </div>
  );
}

export default HomePage;


