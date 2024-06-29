import React, { useState } from 'react';
import '../../Styles/Hamburger.scss';
import '../../Styles/HomePage.scss';
import LogoutButton from './LogOut';
import Profile from './profile';
import { Link } from 'react-router-dom';

function HamburgerMenu({ toggleMenu, isMenuOpen }) {

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
                <li><Link className="menu__item" to="/HomePage"><i className='pi pi-home mr-2 mt-2' />Homepage</Link></li>
                <li><a className="menu__item"><i className='pi pi-user mr-2 mt-2' />Profile</a></li>
                <li><Link className="menu__item" to='/pages/agents' ><i className='pi pi-users mr-2 mt-2' />Agents</Link></li>
                <li><a className="menu__item"><i className='pi pi-cog mr-2 mt-2' />Settings</a></li>
                <li><a className="menu__item "><i className='pi pi-sign-out mr-2 mt-2' /><LogoutButton /></a></li>
        </ul>
    </div>
    );
}

export default HamburgerMenu;
