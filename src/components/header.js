import React, { useState, useRef } from "react";
import { Menubar } from "primereact/menubar";
import logo from '../images/easyGray.png'
import Profile from "./Homepage/profile";
import '.././Styles/HomePage.scss'
import { Link } from "react-router-dom";
import LogoutButton from "./Homepage/LogOut";
import StartLogin from "./StartLogin";
import { OverlayPanel } from 'primereact/overlaypanel';
import { useAuth0 } from "@auth0/auth0-react";

export const Header = () => {
  const op = useRef(null);
  const { user, isAuthenticated, isLoading } = useAuth0();

  const menuStart = () => {
    return <div style={{ display: 'flex', cursor: 'pointer', marginTop: '2.1rem' }}>
      <img src={logo} alt='Renteasy_logo' className="img-logo" />
    </div>
  }

  const menuEnd = () => {
    return <div className="profile" style={{ cursor: 'pointer', marginTop: '2.1rem' }}>
      <ul className="links">
        <li><Link to="/HomePage"> Home</Link></li>
        <li><Link to='/pages/agents'> Agents</Link></li>
        <li>Contact Us</li>
        {isLoading ? <span>Loading...</span>
          : isAuthenticated ? <span onClick={(e) => op.current.toggle(e)} className="userProfile"><Profile /> </span>
            : <li className="login"> <StartLogin /></li>}
      </ul>
      <OverlayPanel ref={op}>
        <span style={{ display: "flex", flexDirection: "column", marginTop: "3px" }}>
          <span className='profile-name' >{user?.name}</span>
          <span className='profile-email'>{user?.email}</span>
        </span>
        <br />
        <span className="logout"><LogoutButton /> </span>
      </OverlayPanel>
    </div>
  }

  return (
    <div>
      <Menubar className="menubar" start={menuStart} end={menuEnd} />
    </div>
  )
}