import React, { useState } from 'react';
import SearchBar from './searchBar';
import Card from './card';
import { Footer } from '../footer';
import { Header } from '../header';
import '../../Styles/HomePage.scss'

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  console.log(isMenuOpen);
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
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <div className={isMenuOpen ? 'header-push' : 'header'}>
        <div className='search'>
          <SearchBar onSearch={handleSearch} />
        </div>
        <span className="greetings">Best available deals</span>
      </div>
      <div >
        <Card isMenuOpen={isMenuOpen} />
      </div>
      <div className={isMenuOpen ? 'services-push' : 'services'}>
        {/* <Services /> */}

      </div>
      <div className={isMenuOpen ? 'footer-push' : 'footer'}>
        {/* <Contact /> */}
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
