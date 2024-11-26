import React, { useState } from 'react';
import '../Styles/LandingPage.scss'
import '../Styles/responsiveness.scss'
import StartLogin from './StartLogin';
import apartImg from '../images/apart img.png'
import logo from '../images/easyR.png'
import callIcon from '../images/phone.png'
import emailIcon from '../images/email.png'
import locationIcon from '../images/locs.png'
import { CustomDialog } from '../utils/dialog';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from 'primereact/button';

const LandingPage = (props) => {
    const [viewLandingContact, setViewLandingContact] = useState(false);

    const hideContactDia = () => setViewLandingContact(false);

    const navigate = useNavigate();

    return (
        <div className="landing-page" >
            <div className='grid col-12 mb-6'>
                <div className='flex col-10 logo-div' onClick={() => navigate("/")}>
                    <img src={logo} alt="Rent Easy Logo" className="logo-img" />
                    <div className="flex flex-column flex-start" >
                        <span className='logo-txt'> Rent Easy</span>
                        <span className='logo-txt-2'> easy rentals</span>
                    </div>
                </div>
                <ul className="links col-2">
                    <li onClick={() => setViewLandingContact(true)}>Contact Us</li>
                </ul>
            </div>

            <div className='grid col-12 hero'>
                <div className="info col-12 md:col-6 lg:col-6">
                    <span className='first-title'>Looking For A Place to Call Home?</span>
                    <span className='second-title'>Get a favorable home space from just a click on your phone. No more stress and long talk</span>
                    {/* <div className='flex gap-5 mt-5 '>
                        <Button className='btn' onClick={() => navigate("/HomePage")}>View Listings</Button>
                        <Button className='btn'><StartLogin /></Button>
                    </div> */}
                </div>
                <div className="image col-12 md:col-6 lg:col-6" >
                    <img src={apartImg} alt="Apartment Image" className='landing-img' />
                </div>
            </div>

            <div className='grid'>
                <div className='flex gap-5 land-btn'>
                    <Button className='btn' onClick={() => navigate("/HomePage")}>View Listings</Button>
                    <Button className='btn'><StartLogin /></Button>
                </div>
            </div>
            {/* </div> */}
            {/* <header className='col-12'>
                <div className="container">
                    <div className='flex' onClick={() => navigate("/")}>
                        <img src={logo} alt="Rent Easy Logo" className="logo-img" />
                        <div className="flex flex-column flex-start" >
                            <span className='logo-txt'> Rent Easy</span>
                            <span className='logo-txt-2'> easy rentals</span>
                        </div>
                    </div>
                    <ul className="links">
                        <li onClick={() => setViewLandingContact(true)}>Contact Us</li>
                        <li >Invest  </li>
                    </ul>

                </div>
            </header> */}

            {/* <li onClick={() => navigate("/HomePage")}>Home</li> */}
            {/* <li className='login-button'><StartLogin /></li> */}

            {/*
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
            </div> */}


            {/* <div className='footer'>
                <div className="footer-items">
                    <span className='titles'>About Us</span>
                    <span className='item'>
                        A company helping various Agents across the country
                        catalogue their listings making it easier to show future home owners
                    </span>
                </div>
                <div className="footer-items foot">
                    <span className='titles'>Contact</span>
                    <span className='item'>
                        <span style={{ display: 'flex' }}><img src={emailIcon} className='img-icons' /> <>renteasy@gmail.com</> </span>
                        <span style={{ display: 'flex' }}><img src={callIcon} className='img-icons' /><>(050)2201391</></span>
                        <span style={{ display: 'flex' }}><img src={locationIcon} className='img-icons' /><>Sunyani</></span>
                    </span>
                </div>
                <div className="footer-items foot">
                    <span className='titles'>How To Use</span>
                    <span className='item'>
                        <li>Navigate To Home and Browse through our collections of amazing apartments ready for you</li>
                        <li>If registering as an Agent, click on Agents, register with the appropriate documents and start listing</li>
                    </span>
                </div>
            </div> */}
            {/* <CustomDialog
                agentVisible={agentVisible}
                setAgentVisible={setAgentVisible}
                onHide={onHide}
            /> */}
            <CustomDialog
                hideLandingContactDia={hideContactDia}
                viewLandingContact={viewLandingContact}
                setLandingContact={setViewLandingContact}
            />
        </div>

    );
};

export default LandingPage;
