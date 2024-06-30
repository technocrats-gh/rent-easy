import React from 'react'
import { Header } from '../header'
import { Footer } from '../footer'
import { Card } from 'primereact/card'
import '../../Styles/HomePage.scss'
import '../../Styles/agents.scss'

export const Agents = () => {
  return (
    <div>
      <div className='agents-card-main' >
        <Card className='agent-card'>
          agents, are welcome
        </Card>
      </div>
      {/* <div className='footer'>
        <Footer />
      </div> */}
    </div>
  )
}
