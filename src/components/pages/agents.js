import React from 'react'
import { Header } from '../header'
import { Footer } from '../footer'
import { Card } from 'primereact/card'
import '../../Styles/HomePage.scss'
import '../../Styles/agents.scss'

export const Agents = (props) => {
  const { toggleMenu, isMenuOpen } = props
  console.log(isMenuOpen);
  return (
    <div>
      <Header />
      <div className='agents-card-main' >
        <Card className='agent-card'>
          agents, are welcome
        </Card>
      </div>
      <div className={isMenuOpen ? 'footer-push' : 'footer'}>
        <Footer />
      </div>
    </div>
  )
}
