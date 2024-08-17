import React, { useState } from 'react';
import '../Styles/LandingPage.scss'
import StartLogin from './StartLogin';
import apartImg from '../images/apart img.png'
import logo from '../images/easyR.png'
import callIcon from '../images/phone.png'
import emailIcon from '../images/email.png'
import locationIcon from '../images/locs.png'
import { AgentDialog } from '../utils/dialog';
import { Link } from 'react-router-dom';

const LandingPage = (props) => {
    const [agentVisible, setAgentVisible] = useState(false);
    const onHide = () => setAgentVisible(false);

    return (
        <div className="landing-page">
            <header>
                <div className="container">
                    <div style={{ display: 'flex' }}>
                        <img src={logo} alt="Rent Easy Logo" className="logo-img" />
                        <div style={{ display: 'flex', flexDirection: "column", alignItems: "flex-start" }}>
                            <span className='logo-txt'> Rent Easy</span>
                            <span className='logo-txt-2'> easy rentals</span>
                        </div>
                    </div>
                    <ul className="links">
                        <li><Link to="/HomePage">Home</Link></li>
                        <li onClick={() => setAgentVisible(true)}>Agents</li>
                        <li>Contact Us</li>
                        <li> <StartLogin /></li> 
                    </ul>
                </div>
            </header>
            <div className="content">
                <div className="container">
                    <div className="info">
                        <span className='first-title'>Looking For A Place to Call Home?</span>
                        <span className='second-title'>Get a favorable home space from just a click on your phone. No more stress and long talk</span>
                    </div>
                    <div className="image">
                        <img src={apartImg} alt="Apartment Image" />
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className="footer-items">
                    <span className='titles'>About Us</span>
                    <span className='item'>
                        A company helping various Agents across the country
                        catalogue their listings making it easier to show future home owners
                    </span>
                </div>
                <div className="footer-items">
                    <span className='titles'>Contact</span>
                    <span className='item'>
                        <span style={{ display: 'flex' }}><img src={emailIcon} className='img-icons' /> <>renteasy@gmail.com</> </span>
                        <span style={{ display: 'flex' }}><img src={callIcon} className='img-icons' /><>(050)2201391</></span>
                        <span style={{ display: 'flex' }}><img src={locationIcon} className='img-icons' /><>Sunyani</></span>
                    </span>
                </div>
                <div className="footer-items">
                    <span className='titles'>How To Use</span>
                    <span className='item'>
                        <li>Navigate To Home and Browse through our collections of amazing apartments ready for you</li>
                        <li>If registering as an Agent, click on Agents, register with the appropriate documents and start listing</li>
                    </span>
                </div>
            </div>
            <AgentDialog
                agentVisible={agentVisible}
                setAgentVisible={setAgentVisible}
                onHide={onHide}
            />
        </div>

    );
};

export default LandingPage;
