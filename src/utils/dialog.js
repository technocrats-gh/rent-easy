import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export const AgentDialog = (props) => {
  const { agentVisible, setAgentVisible, onHide, hideAgentDia, viewAgent, setViewAgent } = props
  const navigate = useNavigate();

  const data = [
    { visible: viewAgent, onHide: onHide, },
    { visible: agentVisible, onHide: hideAgentDia }
  ]

  const moveToAgent = () => {
    navigate('/pages/listings');
    viewAgent ? setViewAgent(false) : setAgentVisible(false);
  }

  const registerClick = () => {
    navigate("/pages/register");
    viewAgent ? setViewAgent(false) : setAgentVisible(false);
  }

  return (
    <div>
      <Dialog visible={viewAgent ? viewAgent : agentVisible} header="Are you an Agent?" onHide={onHide ? onHide : hideAgentDia} headerClassName="dialog-header" >
        <div style={{ display: 'flex', flexDirection: "column" }}>
          <label className='label'>Enter your ID</label>
          <div className='flex' >
            <InputText placeholder="agentID here..." className='book-inputs' />
            <Button className='OkBtn pi pi-check' onClick={moveToAgent}></Button>
          </div>
          <label className='label-reg'>Register as an Agent</label>
          <Button label='Register Here' className='register' onClick={registerClick} />
        </div>
      </Dialog>

    </div>
  )

}