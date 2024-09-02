import React, { useState, useEffect, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { fetchAgentData } from '../firebase';
import { Toast } from 'primereact/toast';


export const CustomDialog = (props) => {
  const { agentVisible, setAgentVisible, onHide, hideAgentDia, viewAgent, setViewAgent, hideContactDia, viewContact, viewLandingContact, hideLandingContactDia } = props

  const [id, setId] = useState("");
  const navigate = useNavigate();
  const toast = useRef(null);
  const [state, setState] = useState({
    agentData: null
  })

  useEffect(() => {
    fetchAgentData().then((data) => {
      setState((prev) => ({ ...prev, agentData: data }))
    })
  }, [])


  const showGoodToast = () => toast.current.show({
    severity: "success", summary: "success", detail: "Good 👍", life: "3000"
  })
  const showErrorToast = () => toast.current.show({
    severity: "error", summary: "error", detail: "Error 🥱", life: "3000"
  })

  const dialogData = {
    visible: viewAgent || agentVisible,
    onHide: hideAgentDia || onHide,
    header: "Are you an Agent?",
    headerClassName: "dialog-header",
    label: "Enter your ID",
    placeholder: "agentID here...",
  }

  const contactData = {
    visible: viewContact || viewLandingContact,
    onHide: hideContactDia || hideLandingContactDia,
    header: "Contact Us",
    headerClassName: "dialog-header",
  }

  const moveToAgent = () => {
    if (state.agentData?.agentId === id) {
      showGoodToast()
      localStorage.setItem("AgentId_Entered", true)
      viewAgent ? setViewAgent(false) : setAgentVisible(false);
    } else {
      showErrorToast()
    }
  }

  const registerClick = () => {
    navigate("/pages/register");
    viewAgent ? setViewAgent(false) : setAgentVisible(false);
  }

  const presentAgentId = state.agentData?.agentId !== null || state.agentData.agentId !== undefined;

  return (
    <div>
      <Toast ref={toast} position='bottom-right'
        onRemove={(message) => {
          if (message.severity === "success") {
            navigate('/pages/listings');
          } else {
            navigate(0)
          }
        }} />
      <Dialog visible={dialogData.visible} header={dialogData.header} onHide={dialogData.onHide} headerClassName={dialogData.headerClassName}>
        <div style={{ display: 'flex', flexDirection: "column" }}>
          <label className='label'>{dialogData.label}</label>
          <div className='flex' >
            <InputText placeholder={dialogData.placeholder} className='book-inputs' value={id} onChange={(e) => setId(e.target.value)} />
            <Button className='OkBtn pi pi-check' onClick={moveToAgent}></Button>
          </div>
          {!presentAgentId && (<><label className='label-reg'>Register as an Agent</label>
            <Button label='Register Here' className='register' onClick={registerClick} /></>)}
        </div>
      </Dialog>

      <Dialog visible={contactData.visible} header={contactData.header} headerClassName={contactData.headerClassName} onHide={contactData.onHide}
      >
        <div style={{ display: 'flex', flexDirection: "column" }}>
          <label className='label'>Name</label>
          <InputText placeholder="name" className='book-inputs' />
          <label className='label'>Phone Number</label>
          <InputText label='PhoneNumber' placeholder="Phone Number" className='book-inputs' />
          <label className='label'>Email</label>
          <InputText label='Location' placeholder="email" className='book-inputs' />
          <label className='label'>Message</label>
          <InputText label='' placeholder="Message" className='book-inputs-msg' />
        </div>
        <Button label='Send' className='DibkBtn' />
      </Dialog>

    </div>
  )

}