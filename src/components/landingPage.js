import React, { useState } from 'react';
import '../Styles/LandingPage.scss'
import '../Styles/responsiveness.scss'
import StartLogin from './StartLogin';
import apartImg from '../images/apart img.png'
import logo from '../images/easyR.png'
import bGImg from '../images/bg33.png'
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
            <CustomDialog
                hideLandingContactDia={hideContactDia}
                viewLandingContact={viewLandingContact}
                setLandingContact={setViewLandingContact}
            />

            <div className='grid col-12 mb-6'>
                <div className='flex col-9 logo-div' onClick={() => navigate("/")}>
                    <img src={logo} alt="Rent Easy Logo" className="logo-img" />
                    <div className="flex flex-column flex-start" >
                        <span className='logo-txt'> Rent Easy</span>
                        <span className='logo-txt-2'> easy rentals</span>
                    </div>
                </div>
                <div className="links flex col-3">
                    <div className='view-list align-content-center mr-2' onClick={() => navigate("/pages/uploadListing")}>Upload </div>
                    <div className='contact-land align-content-center' onClick={() => setViewLandingContact(true)}>Contact Us</div>
                </div>
            </div>

            <div className='grid col-12 hero'>
                <div className="info col-12 md:col-12 lg:col-12">
                    <div className='first-title flex justify-content-center'>Looking For A Place to Rent?</div>
                    <div className='second-title flex justify-content-center'>Get a favorable home space from just a click on your phone. No more stress and long talk</div>
                    <div className='buttons-container flex align-content-center justify-content-center mt-3'>
                        <div className='view-list mr-2' onClick={() => navigate("/HomePage")}>View Listings</div>
                        <div className='view-list land-btn'><StartLogin /></div>
                    </div>
                </div>
            </div>

            <div className='col-12'>
                <div className="image col-12 md:col-6 lg:col-6" >
                    <img src={bGImg} alt="Apartment Image" className='landing-img' />
                </div>
            </div>

        </div>

    );
};

export default LandingPage;
