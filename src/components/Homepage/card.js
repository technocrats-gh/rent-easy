import React from 'react'
import '../../Styles/HomePage.scss'
import apartment7 from '../../images/apartment_Images/and7.jpg'
import apartment5 from '../../images/apartment_Images/and5.jpeg'
import apartment4 from '../../images/apartment_Images/and4.jpg'
import apartment3 from '../../images/apartment_Images/and3.jpg'
import apartment2 from '../../images/apartment_Images/and2.jpg'
import apartment1 from '../../images/apartment_Images/and1.jpg'
import { Card } from 'primereact/card';

const listingCard = ({ isMenuOpen }) => {
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
    <div key={item.id}>
      <Card className="card overflow-hidden">
        <div className="aspect-video">
          <img
            alt="Cover image"
            src={item.image}
          />
        </div>
        <div className="card-body">
          <span className="card-title">{item.title}</span>
          <span className="line-clamp-3">{item.location}</span>
          <span className="card-subtitle">{`GHS ${item.price.toFixed(2)}/Month`}</span>
        </div>
      </Card>
    </div>
  ));

  // return <div >{shownCards}</div>;
  return <div className={isMenuOpen ? 'home-card-push' : 'card-grid-container '}>{shownCards}</div>;
};

export default listingCard;
