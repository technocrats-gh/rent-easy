import React, { useState } from 'react';
import '../../Styles/HomePage.scss'


function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Search for listings..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='searchInput'
      />
      <button className='search-button pi pi-search' type="submit"></button>
    </form>
  );
}

export default SearchBar;
