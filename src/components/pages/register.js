import React, { useState } from 'react'
import { Card } from 'primereact/card'
import '../../Styles/register.scss'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { handleRegister } from '../../firebase'

export const Register = () => {
  // console.log(retrieveAgentData?.map(data => data.region));

  const [data, setData] = useState({
    name: "",
    age: "",
    region: "",
    gender: "",
    agentId: "",
    email: "",
    phoneNo: "",
    id: ""
  })

  const onChangeDetails = (e) => {
    let { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  return (
    <div>
      <div className='register-card-main'>
        <h1 className='heading'>Register Here</h1>
        <Card className='register-card'>
          <div style={{ display: 'flex', flexDirection: "column", margin: "0 2rem 0 2rem" }}>
            <label className='label first-input mar'>Name</label>
            <InputText placeholder="name" className='inputs-reg' name="name" value={data.name} onChange={onChangeDetails} />

            <label className='label mar'>Age</label>
            <InputText placeholder="age" className='inputs-reg' name="age" value={data.age} onChange={onChangeDetails} />

            <label className='label mar'>Gender</label>
            <InputText placeholder="gender" className='inputs-reg' name="gender" value={data.gender} onChange={onChangeDetails} />

            <label className='label mar'>AgentID</label>
            <InputText placeholder="Enter a 4-digit pin" className='inputs-reg' name="agentId" value={data.agentId} onChange={onChangeDetails} />

            <label className='label mar'>Phone Number</label>
            <InputText placeholder="PhoneNumber" className='inputs-reg' name="phoneNo" value={data.phoneNo} onChange={onChangeDetails} />

            <label className='label mar'>GhanaCard ID</label>
            <InputText placeholder="ID here..." className='inputs-reg' name="id" value={data.id} onChange={onChangeDetails} />

            <label className='label mar'>Email</label>
            <InputText placeholder="email" className='inputs-reg' name="email" value={data.email} onChange={onChangeDetails} />

            <label className='label mar'>Region</label>
            <InputText placeholder="region" className='inputs-reg' name="region" value={data.region} onChange={onChangeDetails} />

            <Button label='Register' className='btn reg-btn' onClick={() => handleRegister(data)} />
          </div>

        </Card>
      </div>
    </div>
  )
}
