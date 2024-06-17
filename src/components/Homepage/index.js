import React, { useState } from 'react';
import SearchBar from './searchBar';
import Hamburger from './Hamburger';
import Services from './services';
import Card from './card';
import Profile from './profile';
import Contact from './contact';
import { Menubar } from 'primereact/menubar';
import logo from '../../images/easy.png'
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

  const menu = () => {
    return <div style={{ display: 'flex', cursor: 'pointer', marginTop: '2.1rem' }}>
      <Hamburger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <img src={logo} alt='Renteasy_logo' className={isMenuOpen ? "push-img-logo" : "img-logo"} />
    </div>
  }
  const end = () => {
    return <div className={isMenuOpen ? "push-profile" : "profile"} style={{ cursor: 'pointer', marginTop: '2.1rem' }}>
      <Profile />
    </div>
  } 

  return (
    <div className={isMenuOpen ? "push-home-page" : "home-page"}>
      <Menubar className='menubar' start={menu} end={end} />
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
        <Services />
      </div>
      <div className={isMenuOpen ? 'contact-push' : 'contact'}>
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;


