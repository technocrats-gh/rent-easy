import React, { useState } from 'react';
import '../../Styles/HomePage.scss'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


function SearchBar({ onSearch, listingPage, listSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    listingPage ? listSearch(query) : onSearch(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <InputText
        type="text"
        placeholder="search here ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={listingPage ? "search-listings" : 'searchInput'}
      />
      {query && <i className='search-button pi pi-search search-icon' type="submit" onClick={handleSearch}></i>}
    </form>
  );
}

export default SearchBar;
