import React, { useState } from 'react';
import '../../Styles/HomePage.scss'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';



function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <InputText
        type="text"
        placeholder="search eg: 1 bedroom apartment"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='searchInput'
      />
      {query && <i className='search-button pi pi-search search-icon' type="submit" onClick={handleSearch}></i>}
    </form>
  );
}

export default SearchBar;
