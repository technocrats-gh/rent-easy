import React from 'react'
import { Card } from 'primereact/card'
import logo from '../images/easy.png'
import '.././Styles/HomePage.scss'

export const Footer = () => {


  return (

    <Card className='footer'>
      <div className='footer-div'>
        <img src={logo} className='logo-footer' />
        <span className='bg-gray-200 shadow-xs ml-3 '>RentEasy: All Rights Reserved</span>
      </div>
    </Card>
  )
}
