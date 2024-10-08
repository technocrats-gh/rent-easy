import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import '../Styles/HomePage.scss'

const Layout = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(true);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <div className='home-page'>
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>)
}

export default Layout;