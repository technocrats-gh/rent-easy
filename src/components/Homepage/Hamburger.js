import React, { useState } from 'react';
import '../../Styles/Hamburger.scss';
import '../../Styles/HomePage.scss';
import LogoutButton from './LogOut';
import Profile from './profile';

function HamburgerMenu({toggleMenu, isMenuOpen}) {
    // const [state, setState]= useState({
    //     username:"Amankwah Amoako",
    //     email:"andarmaas3@gmail.com",
    // });
  
    return (
    <div>
        <input id="menu__toggle" type="checkbox" checked={isMenuOpen}  onChange={toggleMenu}/>
        <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
        </label>

        <ul className="menu__box">
            <li> 
                <div className="menu__item">
                    <Profile />
                 </div>
                </li>
			<li><a className="menu__item" href="#">Dashboard</a></li>
			<li><a className="menu__item" href="#">Profile</a></li>
			<li><a className="menu__item" href="#">Agents</a></li>
			<li><a className="menu__item" href="#">Settings</a></li>
			<li><a className="menu__item" href="#" ><LogoutButton /></a></li>
        </ul>
    </div>
    );
}

export default HamburgerMenu;
