import React from 'react'
import '../../Styles/HomePage.scss'

const Card = () => {
  // Dummy data for listings
  const listings = [
    { id: 1, image: '/placeholder.svg', title: 'Listing 1', description: 'Description 1', price: 100, location: 'Sunayni' },
    { id: 2, image: '/placeholder.svg', title: 'Listing 2', description: 'Description 2', price: 120, location: 'Adenta' },
    { id: 3, image: '/placeholder.svg', title: 'Listing 3', description: 'Description 3', price: 170, location: 'Race Course' },
    { id: 4, image: '/placeholder.svg', title: 'Listing 4', description: 'Description 4', price: 160, location: 'Pantang' },
    { id: 5, image: '/placeholder.svg', title: 'Listing 5', description: 'Description 5', price: 110, location: 'Suame' },
    { id: 6, image: '/placeholder.svg', title: 'Listing 6', description: 'Description 6', price: 520, location: 'Oyarifa' },
    // Add more listings as needed
  ];

  const shownCards = listings.map((item) => (
    <div key={item.id} className="card-grid-container">
      <div className="card overflow-hidden">
        <div className="aspect-video">
          <img
            alt="Cover image"
            className="object-cover w-full aspect-video"
            src={item.image}
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p className="line-clamp-3">{item.location}</p>
          <p className="card-subtitle">{`GHS ${item.price.toFixed(2)} per Month`}</p>
        </div>
      </div>
    </div>
  ));

  return <div>{shownCards}</div>;
};

export default Card;
