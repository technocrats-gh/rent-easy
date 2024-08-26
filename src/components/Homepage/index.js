import React, { useState } from 'react';
import SearchBar from './searchBar';
import CardTemp from './card';
import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';
import 'primereact/resources/themes/saga-blue/theme.css';
import '../../Styles/HomePage.scss'

function HomePage() {
  const [selectedCity, setSelectedCity] = useState(null);
  // const [selectedAgent, setSelectedAgent] = useState(null);
  const cities = [
    { name: 'North East', code: 'NST' },
    { name: 'Western North', code: 'WNT' },
    { name: 'Ahafo', code: 'AHA' },
    { name: 'Oti', code: 'OTI' },
    { name: 'Bono East', code: 'BES' },
    { name: 'Savannah', code: 'SAV' },
    { name: 'Western ', code: 'WES' },
    { name: 'Volta', code: 'VOL' },
    { name: 'Upper West', code: 'UPW' },
    { name: 'Upper East', code: 'UPE' },
    { name: 'Northern', code: 'NOR' },
    { name: 'Greater Accra', code: 'GRA' },
    { name: 'Eastern', code: 'EAS' },
    { name: 'Central', code: 'CEN' },
    { name: 'Ashanti', code: 'ASH' },
    { name: 'Bono', code: 'BO' },
  ];

  // Handle search queries
  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  return (
    <div className="home-page">
      <div className='search-card'>
        <div style={{ display: 'flex' }}>
          <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" editable
            placeholder="Select a Region" />

          <SearchBar onSearch={handleSearch} />
        </div>

      </div>
      <Card className='home-card'>
        <div className='display-card'>
          <CardTemp />
        </div>
      </Card>
    </div>

  );
}

export default HomePage;
