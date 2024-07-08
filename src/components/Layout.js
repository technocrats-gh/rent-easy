import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import '../Styles/HomePage.scss'

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='home-page'>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main className={isMenuOpen ? 'push-main' : "main-content"}>
        <Outlet />
      </main>
      <Footer isMenuOpen={isMenuOpen} />
    </div>)
}

export default Layout;