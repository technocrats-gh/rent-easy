import React from 'react'
import { Card } from 'primereact/card'
import logo from '../images/easyGray.png'
import facebook from '../images/_Facebook.png'
import instagram from '../images/_Instagram.png'
import twitter from '../images/twitter.png'
import '.././Styles/HomePage.scss'

export const Footer = ({ isMenuOpen }) => {


  return (

    // <Card className='footer'>
    <div>
      <div className='footer-div'>
        <img src={logo} className='logo-footer' />
        <span style={{ display: 'flex', gap: '0.8rem', marginLeft: '2rem' }}>
          <img src={facebook} />
          <img src={instagram} />
          <img src={twitter} />
        </span>
        <span className='all-rights'>RentEasy: All Rights Reserved</span>
      </div>
    </div>
  )
}
