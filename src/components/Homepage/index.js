import React, { useState } from 'react';
import SearchBar from './searchBar';
import CardTemp from './card';
import { Dropdown } from 'primereact/dropdown';
import syi from '../../images/nice.jpg'
import oti from '../../images/uploadPage.jpg'
import volta from '../../images/volta.jpg'
import Savannah from '../../images/savana.jpg'
import ashanti from '../../images/ashanti.jpg'
import BE from '../../images/Bonoeast.png'

import { Card } from 'primereact/card';
// import { Paginator } from 'primereact/paginator';
// import { DataTable } from 'primereact/datatable';
import 'primereact/resources/themes/saga-blue/theme.css';
// import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Example theme
import '../../Styles/responsiveness.scss'
import '../../Styles/HomePage.scss'

function HomePage() {

  const cities = [
    { name: 'North East', code: 'NST', cityImg: syi },
    { name: 'Western North', code: 'WNT', cityImg: null },
    { name: 'Ahafo', code: 'AHA', cityImg: null },
    { name: 'Oti', code: 'OTI', cityImg: oti },
    { name: 'Bono East', code: 'BES', cityImg: BE },
    { name: 'Savannah', code: 'SAV', cityImg: Savannah },
    { name: 'Western ', code: 'WES', cityImg: null },
    { name: 'Volta', code: 'VOL', cityImg: volta },
    { name: 'Upper West', code: 'UPW', cityImg: null },
    { name: 'Upper East', code: 'UPE', cityImg: null },
    { name: 'Northern', code: 'NOR', cityImg: null },
    { name: 'Greater Accra', code: 'GRA', cityImg: null },
    { name: 'Eastern', code: 'EAS', cityImg: null },
    { name: 'Central', code: 'CEN', cityImg: null },
    { name: 'Ashanti', code: 'ASH', cityImg: ashanti },
    { name: 'Bono', code: 'BO', cityImg: null },
  ];

  // Handle search queries
  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  return (
    <div className="home-page">
      <div className='search-card grid'>
        <SearchBar onSearch={handleSearch} />
      </div>

      <Card className='home-card grid'>
        <div className='col-12 center-text'>
          <p className='font-bold big-text-style mb-0 mt-0'>Rent across the country</p>
          <p className='mt-0 small-text-style'>Apartments from all 16 regions readily available</p>
        </div>
        <section className='grid col-12 cities-div'>
          {cities.map(({ name, cityImg }, i) =>
            <div key={i} className='card card-height col-3' style={{
              backgroundImage: `url(${cityImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              cursor: 'pointer'
            }}>
              <p className='mb-0 mt-0 card-region'>{name}</p>
              <p className='hovered-text mt-0'>View all apartments</p>
            </div>)}
        </section>
        <div className='col-12 mt-3'>
          <p className='center-text small-text-style'>Browse through to find the best apartment for you</p>
          <CardTemp />
        </div>
      </Card>

    </div>

  );
}

export default HomePage;
