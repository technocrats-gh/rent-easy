import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import logo from '../images/easy.png'
import Profile from "./Homepage/profile";
import '.././Styles/HomePage.scss'
import '.././Styles/Hamburger.scss'
import { Link } from "react-router-dom";
import LogoutButton from "./Homepage/LogOut";

export const Header = (props) => {
  const { toggleMenu, isMenuOpen } = props

  const sidebar = () => {
    return (
      <div>
        <input id="menu__toggle" type="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li><div className="menu__item"><Profile /></div></li>
          <li><Link className="menu__item" to="/HomePage"><i className='pi pi-home mr-2 mt-2' />Homepage</Link></li>
          <li><a className="menu__item"><i className='pi pi-user mr-2 mt-2' />Profile</a></li>
          <li><Link className="menu__item" to='/pages/agents' ><i className='pi pi-users mr-2 mt-2' />Agents</Link></li>
          <li><a className="menu__item"><i className='pi pi-cog mr-2 mt-2' />Settings</a></li>
          <li><a className="menu__item "><i className='pi pi-sign-out mr-2 mt-2' /><LogoutButton /></a></li>
        </ul>
      </div>
    )
  }

  const menu = () => {
    return <div style={{ display: 'flex', cursor: 'pointer', marginTop: '2.1rem' }}>
      <div>{sidebar()}</div>
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