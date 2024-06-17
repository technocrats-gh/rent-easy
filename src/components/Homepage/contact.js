import React from 'react'
import { Card } from 'primereact/card'

const Contact = () => {

  const footer = () => {
    return <p className="text-center mt-12">
      RentEasy: All Rights Reserved
    </p>
  }

  return (
    <div>
      <Card title='Contact Information' footer={footer}>

      </Card>
    </div>
  )
}
export default Contact;