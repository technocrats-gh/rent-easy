import React, { useState, useEffect, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { fetchAgentData } from '../firebase';
import { Toast } from 'primereact/toast';
import { Rating } from "primereact/rating";
import { Carousel } from 'primereact/carousel';

export const CustomDialog = (props) => {
  const { agentVisible, setAgentVisible, onHide, hideAgentDia, viewAgent, setViewAgent, hideContactDia, viewContact, viewLandingContact, hideLandingContactDia, closeCardExpanded, expandCard, setExpandCard, listings, selectedCardId } = props

  const [id, setId] = useState("");
  const navigate = useNavigate();
  const toast = useRef(null);

  const [state, setState] = useState({
    agentData: null,
    value: null
  })

  useEffect(() => {
    fetchAgentData().then((data) => {
      setState((prev) => ({ ...prev, agentData: data }))
    })
  }, [])

  const currency = 'GHS';

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

  const showExpandedCard = [{
    header: "View More About This Listing",
    onHide: closeCardExpanded,
    visible: expandCard,
    data: listings
  }]

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


      {showExpandedCard.map(({ visible, onHide, header, data }, i) => <Dialog key={i} visible={visible} header={header} onHide={onHide} className="blurry-dialog">
        <div className='grid'>
          <div className='col-8 '>
            <div className="flex justify-content-start">
              {data?.filter(({ id }) => id === selectedCardId).map(({ image }) => <img src={image} alt='alt-img' className='card-img img-visible' />)}
              {/* <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} /> */}
            </div> 
          </div>
          <div className='col-4 p-3 rating-side'>
            <p>Give a Review</p>
            <div className="flex justify-content-start mb-3">
              <Rating value={state.value} onChange={(e) => setState((state) => ({ ...state, value: e.value }))} cancel={false} />
            </div>
            <label>Detail Review</label>
            <InputText className='review-box' />
            <Button label='Send Review' className='review-btn' />
          </div>

          <div className='col-12 desc-side'>
            <p className='font-bold mt-1 mb-0'>Description</p>
            <hr />
            {data?.filter(({ id }) => id === selectedCardId).map(({ title, price, location }) => {
              return (
                <div>
                  <p className='mb-0 mt-0'><span className='font-bold'>Room Type:</span> {title}</p>
                  <p className='mb-0 mt-1'><span className='font-bold'>Amount/Month:</span> {currency}{" "}{price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 })}</p>
                  <p className='mb-0 mt-1'><span className='font-bold'>City:</span> {location}</p>
                </div>)
            })}
            <hr />
          </div>

        </div>
      </Dialog>)}

    </div>
  )

}