import React, { useState, useRef } from "react";
import { Menubar } from "primereact/menubar";
import logo from '../images/easyGray.png'
import Profile from "./Homepage/profile";
import { AgentDialog } from "../utils/dialog";
import '.././Styles/HomePage.scss'
import { Link, useNavigate } from "react-router-dom";
import LogoutButton from "./Homepage/LogOut";
import StartLogin from "./StartLogin";
import { OverlayPanel } from 'primereact/overlaypanel';
import { useAuth0 } from "@auth0/auth0-react";
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export const Header = () => {
  const [visible, setVisible] = useState(false);
  const [viewAgent, setViewAgent] = useState(false);
  const op = useRef(null);
  const { user, isAuthenticated, isLoading } = useAuth0();

  const hideAgentDia = () => setViewAgent(false);
  const onHide = () => setVisible(false);
  const navigate = useNavigate();

  const menuStart = () => {
    return <div style={{ display: 'flex', cursor: 'pointer', marginTop: '2.1rem' }}>
      <img src={logo} alt='Renteasy_logo' className="img-logo" />
    </div>
  }

  const menuEnd = () => {
    return <div className="profile" style={{ cursor: 'pointer', marginTop: '2.1rem' }}>
      <ul className="links">
        <li><Link to="/HomePage"> Home</Link></li>
        <li onClick={() => setViewAgent(true)}> Agents</li>
        <li onClick={() => setVisible(true)}>Contact Us</li>
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
          <span className="profile-btn" onClick={() => navigate("/pages/profile")}>Profile</span>
          <span className="logout"><LogoutButton /> </span>
        </div>
      </OverlayPanel>
    </div>
  }

  return (
    <div>
      <Menubar className="menubar" start={menuStart} end={menuEnd} />
      <Dialog visible={visible} header="Contact Us" onHide={onHide}
      >
        <div style={{ display: 'flex', flexDirection: "column" }}>
          <label className='label'>Name</label>
          <InputText placeholder="name" className='book-inputs' />
          <label className='label'>Phone Number</label>
          <InputText label='PhoneNumber' placeholder="Phone Number" className='book-inputs' />
          <label className='label'>Email</label>
          <InputText label='Location' placeholder="email" className='book-inputs' />
          <label className='label'>Message</label>
          <InputText label='' placeholder="Message" className='book-inputs-msg' />
        </div>
        <Button label='Send' className='DibkBtn' />
      </Dialog>

      <AgentDialog
        viewAgent={viewAgent}
        setViewAgent={setViewAgent}
        hideAgentDia={hideAgentDia}
      />
    </div>
  )
}