import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import Hamburger from '../components/Homepage/Hamburger';
import logo from '../images/easy.png'
import Profile from "./Homepage/profile";
import '.././Styles/HomePage.scss'

export const Header = (props) => {
  const { toggleMenu, isMenuOpen } = props

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
    <Menubar className='menubar' start={menu} end={end} />
  )
}