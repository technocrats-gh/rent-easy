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
import { InputText } from 'primereact/inputtext'



const listingCard = ({ isMenuOpenu }) => {
  const [visible, setVisible] = useState(false);
  // Dummy data for listings
  const listings = [
    { id: 1, image: apartment1, title: 'One Bedroom Self-Contain', description: 'Description 1', price: 500, location: 'Sunayni' },
    { id: 2, image: apartment2, title: 'Single Room', description: 'Description 2', price: 420, location: 'Adenta' },
    { id: 3, image: apartment3, title: 'One Bedroom Self-Contain', description: 'Description 3', price: 170, location: 'Race Course' },
    { id: 4, image: apartment4, title: 'Chamber and Hall', description: 'Description 4', price: 660, location: 'Pantang' },
    { id: 5, image: apartment5, title: '2 Bedroom Apartment', description: 'Description 5', price: 1110, location: 'Suame' },
    { id: 6, image: apartment7, title: '3 Bedroom Apartment', description: 'Description 6', price: 520, location: 'Oyarifa' },
    { id: 7, image: apartment7, title: 'Studio Apartment', description: 'Description 6', price: 820, location: 'Dompoase' },
    { id: 8, image: apartment7, title: 'One Bedroom Self-Contain', description: 'Description 6', price: 520, location: 'Penkwase' },
    // Add more listings as needed
  ];

  const shownCards = listings.map((item) => (
    <div key={item.id} className='card-div'>
      <Card className="card overflow-hidden">
        <div className='aspect-video'>
          <img alt="Cover image" src={item.image} />
        </div>
        <div className="card-body">
          <span className="card-title">{item.title}</span>
          <span className="line-clamp-3">{item.location}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: "flex-end", rowGap: '5px' }}>
          <span className="card-subtitle">{`GHS ${item.price.toFixed(2)}/M`}</span>
          <Button className='bookbtn' label='Book Now' onClick={() => setVisible(true)} />
        </div>
      </Card>
    </div>
  ));

  const onHide = () => {
    setVisible(false)
  }
  // return <div >{shownCards}</div>;
  return <div>
    <span className='card-grid-container '>
      {shownCards}
    </span>;
    <Dialog visible={visible} header="Book An Appointment" onHide={onHide}
    >
      <div style={{ display: 'flex', flexDirection: "column" }}>
        <label className='label'>Name</label>
        <InputText id='name' placeholder="name" className='book-inputs' />
        <label className='label'>Phone Number</label>
        <InputText label='PhoneNumber' placeholder="Phone Number" className='book-inputs' />
        <label className='label'>Location</label>
        <InputText label='Location' placeholder="Location" className='book-inputs' />
        <label className='label'>Prefered Calling Time</label>
        <InputText label='' placeholder="8am-5pm" className='book-inputs' />
        <label className='label'>Pay For Agent to Call</label>
        <InputText label='' placeholder="Pay Calling fee" className='book-inputs' />
        <label className='label'>Message</label>
        <InputText label='' placeholder="Message" className='book-inputs' />
      </div>
      <Button label='Book' className='DibkBtn' />
    </Dialog>
  </div>
};

export default listingCard;
