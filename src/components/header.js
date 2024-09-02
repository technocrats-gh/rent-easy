import React, { useState, useRef } from "react";
import { Menubar } from "primereact/menubar";
import logo from '../images/easyGray.png'
import Profile from "./Homepage/profile";
import { CustomDialog } from "../utils/dialog";
import '.././Styles/HomePage.scss'
import { useNavigate } from "react-router-dom";
import LogoutButton from "./Homepage/LogOut";
import StartLogin from "./StartLogin";
import { OverlayPanel } from 'primereact/overlaypanel';
import { useAuth0 } from "@auth0/auth0-react";


export const Header = () => {
  const alreadyLoggedAsAgent = localStorage.getItem("AgentId_Entered")
  const [viewContact, setViewContact] = useState(false);
  const [viewAgent, setViewAgent] = useState(false);
  const op = useRef(null);
  const { user, isAuthenticated, isLoading } = useAuth0();

  const hideAgentDia = () => setViewAgent(false);
  const hideContactDia = () => setViewContact(false);
  const navigate = useNavigate();

  const menuStart = () => {
    return <div style={{ display: 'flex', cursor: 'pointer', marginTop: '2.1rem' }}>
      <img src={logo} alt='Renteasy_logo' className="img-logo" />
    </div>
  }
  const handleAgentClick = () => {
    if (alreadyLoggedAsAgent) {
      navigate('/pages/listings');
    } else {
      setViewAgent(true)
    }
  }
  const menuEnd = () => {
    return <div className="profile" style={{ cursor: 'pointer', marginTop: '2.1rem' }}>
      <ul className="links">
        <li onClick={() => navigate("/HomePage")}>Home</li>
        <li onClick={handleAgentClick}> Agents</li>
        <li onClick={() => setViewContact(true)}>Contact Us</li>
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
        <div style={{ display: "flex", flexDirection: "column", marginTop: "3px" }}>
          <div className="profile-btn" onClick={() => navigate("/pages/profile")}>Profile</div>
          <span className="logout"><LogoutButton /> </span>
        </div>
      </OverlayPanel>
    </div>
  }

  return (
    <div>
      <Menubar className="menubar" start={menuStart} end={menuEnd} />

      <CustomDialog
        hideContactDia={hideContactDia}
        viewContact={viewContact}
        setViewContact={setViewContact}
      />

      <CustomDialog
        viewAgent={viewAgent}
        setViewAgent={setViewAgent}
        hideAgentDia={hideAgentDia}
      />
    </div>
  )
}