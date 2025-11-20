import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Введіть назву міста..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchBar;