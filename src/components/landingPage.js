import React from 'react';
import '../Styles/LandingPage.scss'
import StartLogin from './StartLogin';
import happyFamily from '../images/HappyFamily.jpeg'
// import logo from '../images/rentEasy22.png'
import logo from '../images/easy.png'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header>
                <div className="container">
                    <a href="#" className="logo">
                         <img src={logo}  alt="Rent Easy Logo" className="logo-img"/>
                         Rent Easy</a>
                    <ul className="links">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Work</li>
                        <li>Info</li>
                        <Link to='/SignUp'>
                            <li>Sign Up</li>
                        </Link>
                    </ul>
                </div>
            </header>
            <div className="content">
                <div className="container">
                    <div className="info">
                        <h1>Looking For A Place to Call Home?</h1>
                        <p>Look for a favorable home space from just a click on your phone. No more stress and long talk</p>
                        <StartLogin />
                    </div>
                    <div className="image">
                        <img src={happyFamily} alt="Happy Family" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
