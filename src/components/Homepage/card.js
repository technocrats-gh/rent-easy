import React, { useState } from 'react'
import '../../Styles/HomePage.scss'
import apartment7 from '../../images/apartment_Images/and7.jpg'
import apartment5 from '../../images/apartment_Images/and5.jpeg'
import apartment4 from '../../images/apartment_Images/and4.jpg'
import apartment3 from '../../images/apartment_Images/and3.jpg'
import apartment2 from '../../images/apartment_Images/and2.jpg'
import apartment1 from '../../images/apartment_Images/and1.jpg'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { FileUpload } from 'primereact/fileupload'
import { CustomDialog } from '../../utils/dialog.js'

const ListingCard = (props) => {
  const { label } = props;
  const [visible, setVisible] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [expandCard, setExpandCard] = useState(false);

  const [selectedValue, setSelectedValue] = useState(null);
  // Dummy data for listings
  const listings = [
    { id: 1, image: apartment1, title: 'One Bedroom Self-Contain', description: 'Description 1', price: 500, location: 'Sunayni', ratings: null },
    { id: 2, image: apartment2, title: 'Single Room', description: 'Description 2', price: 420, location: 'Adenta', ratings: null },
    { id: 3, image: apartment3, title: 'One Bedroom Self-Contain', description: 'Description 3', price: 170, location: 'Race Course', ratings: null },
    { id: 4, image: apartment4, title: 'Chamber and Hall', description: 'Description 4', price: 660, location: 'Pantang', ratings: null },
    { id: 5, image: apartment5, title: '2 Bedroom Apartment', description: 'Description 5', price: 1110, location: 'Suame', ratings: null },
    { id: 6, image: apartment7, title: '3 Bedroom Apartment', description: 'Description 6', price: 520, location: 'Oyarifa', ratings: null },
    { id: 7, image: apartment7, title: 'Studio Apartment', description: 'Description 6', price: 820, location: 'Dompoase', ratings: null },
    { id: 8, image: apartment7, title: 'One Bedroom Self-Contain', description: 'Description 6', price: 520, location: 'Penkwase', ratings: null },
    // Add more listings as needed
  ];

  const opts = [
    { id: 1, name: "Bathroom" },
    { id: 2, name: "Hall" },
    { id: 3, name: "Kitchen" },
    { id: 4, name: "Washroom" },
    { id: 5, name: "Entrance" },
    { id: 6, name: "Bedroom" },
    { id: 7, name: "Other" },
    { id: 8, name: "Other" },
    { id: 9, name: "Other" },
  ]

  const shownCards = listings.map((item) => (
    <div key={item.id} className='card-div'>
      <Card className="card overflow-hidden grid">
        {/* <div className='col-12 ' onClick={() => {
          setExpandCard(true); setSelectedCardId(item.id);
        }}>
          <img alt="Cover image" src={item.image} className='card-img' />
        </div>
        <div className="hover-text">Click to view more</div> */}
        <div className="col-12 img-container" onClick={() => {
          setExpandCard(true); setSelectedCardId(item.id);
        }}>
          <img alt="Cover image" src={item.image} className="card-img" />
          <div className="hover-text">Click Image</div>
        </div>
        <div className="card-body col-12">
          <span className="card-title">{item.title}</span>
          <span className="line-clamp-3">{item.location}</span>
        </div>
        <div className='col-12 flex flex-column' style={{ alignItems: "end" }}>
          <span className="card-subtitle">{`GHS ${item.price.toFixed(2)}/M`}</span>
          <Button className='bookbtn' label={label ? label : 'Book Now'} onClick={() => setVisible(true)} />
        </div>
      </Card>
    </div>
  ));

  const onHide = () => setVisible(false);
  const closeCardExpanded = () => setExpandCard(false);

  function uploadContainers() {
    return <div>
      <div className='edit-upload-divs'>
      </div>
      <FileUpload mode='basic' className='edit-upload-btn' chooseLabel='upload' />
    </div>
  }
  return <div>
    <span className='card-grid-container '>
      {shownCards}
    </span>
    <Dialog visible={visible} header={label ? "Edit Listing" : "Book An Appointment"} onHide={onHide}
    >
      <div style={{ display: 'flex', flexDirection: "column" }}>
        <label className='label'>{label ? 'Description' : 'Name'}</label>
        <InputText placeholder={label ? 'description' : 'name'} className='book-inputs' />

        <label className='label'>{label ? 'Price' : 'Phone Number'}</label>
        <InputText label='PhoneNumber' placeholder={label ? 'price' : "Phone Number"} className='book-inputs' />

        {!label ? (<><label className='label'>Location</label>
          <InputText label='Location' placeholder="Location" className='book-inputs' />

          <label className='label'>Prefered Calling Time</label>
          <InputText label='' placeholder="8am-5pm" className='book-inputs' />

          <label className='label'>Pay For Agent to Call</label>
          <InputText label='' placeholder="Pay Calling fee" className='book-inputs' />

          <label className='label'>Message</label>
          <InputText label='' placeholder="Message" className='book-inputs' /></>)
          :
          (<>
            <label className='label'>Upload New Image</label>
            <Dropdown label='' placeholder="Select here" className='edit-book-inputs' options={opts} value={selectedValue} onChange={(e) => setSelectedValue(e.value)} optionLabel='name'
            />
            {uploadContainers()}
          </>)
        }
      </div>
      {!label ? <Button label='Book' className='DibkBtn' />
        : <Button label='Save' className='DiSvBtn' />}
    </Dialog>

    <CustomDialog {...{ expandCard, setExpandCard, closeCardExpanded, listings, selectedCardId }} />
  </div>
};

export default ListingCard;
