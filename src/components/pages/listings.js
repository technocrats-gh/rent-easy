import React from 'react'
import '../../Styles/HomePage.scss'
import '../../Styles/listings.scss'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { Link } from 'react-router-dom'
import SearchBar from '../Homepage/searchBar.js'
import CardTemp from '../../components/Homepage/card.js'

export const Listings = () => {
  const label = 'Edit';
  const listingPage = true;

  const handleListingSearch = (query) => {
    console.log('Search query:', query);
  };

  return (
    <div>
      <div className='listings-card-main'>
        <div className='flex' style={{ justifyContent: "space-between" }}>
          <div className='flex'>
            <h2 className='listing-heading'>My Apartment Listings</h2>
            <Link to='/pages/UploadListing'><Button label='Upload a new listing' className='listings' /> </Link>
          </div>
          <SearchBar listingPage={listingPage} listSearch={handleListingSearch} />
        </div>
        <Card className='listing-card'>
          {/* <div className='display-cards'> */}
            <CardTemp label={label} />
          {/* </div> */}
        </Card>
      </div>
    </div>
  )
}
