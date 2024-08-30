import React, { useState, useRef } from 'react'
import { Card } from 'primereact/card'
import '../../Styles/register.scss'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import { handleRegister } from '../../firebase'
import { useFormik } from 'formik'

export const Register = () => {
  // console.log(retrieveAgentData?.map(data => data.region));
  const registryToast = useRef(null);
  const navigate = useNavigate();
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

  const registrationData = [
    { label: "Name", value: "name", data: data.name, placeholder: "Name" },
    { label: "Age", value: "age", data: data.age, placeholder: "Age" },
    { label: "Region", value: "region", data: data.region, placeholder: "Region" },
    { label: "Gender", value: "gender", data: data.gender, placeholder: "Gender" },
    { label: "AgentID", value: "agentId", data: data.agentId, placeholder: "Enter any 6-characters" },
    { label: "Email", value: "email", data: data.email, placeholder: "Email" },
    { label: "Phone No", value: "phoneNo", data: data.phoneNo, placeholder: "Phone No" },
  ]

  const showRegistryToast = () => {
    registryToast.current.show({ severity: 'success', summary: 'Success', detail: 'Profile Update Successful' });
  };

  const formik = useFormik({
    initialValues: data,
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.phoneNo) {
        errors.phoneNo = 'Required';
      } else if (values.phoneNo.length < 10) {
        errors.phoneNo = 'Phone Number must be at least 10 Numbers';
      }

      if (!values.agentId) {
        errors.agentId = 'Required'
      } else if (values.agentId.length !== 6) {
        errors.agentId = 'AgentID must be 6 characters';
      }
      return errors;
    },
    onSubmit: (values) => {
      handleRegister(values).then(() => {
        showRegistryToast();
      });
    }
  })

  return (
    <div>
      <Toast ref={registryToast} onRemove={() => {
        navigate("/pages/profile");
      }} />
      <div className='register-card-main'>
        <h1 className='heading'>Register Here</h1>
        <Card className='register-card'>
          <hr />
          <span >
            <span className='notice-text'>Please Save your AgentID safely!!</span>
            <p className='notice-text-2'>It will be needed each time to access the Agent pages. It should be a mix of different characters eg: @A&34+K. Thank you ! </p>
          </span>
          <hr />
          <div style={{ display: 'flex', flexDirection: "column", margin: "2rem 5rem 0 5rem" }}>
            {registrationData.map((item, index) => (
              <div key={index} className='edit-sec'>
                <label className='label-edit'>{item.label}</label>
                <InputText
                  placeholder={item.placeholder}
                  className='input'
                  {...formik.getFieldProps(item.value)}
                />
                {formik.touched[item.value] && formik.errors[item.value] ? (
                  <div className='error error-msg'>{formik.errors[item.value]}{"*"}</div>
                ) : null}
              </div>
            ))}
            {/* <label className='label first-input mar'>Name</label>
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
            <InputText placeholder="region" className='inputs-reg' name="region" value={data.region} onChange={onChangeDetails} /> */}

            <Button label='Register' className='reg-btn' onClick={() => formik.handleSubmit()} />
          </div>

        </Card>
      </div>
    </div>
  )
}
