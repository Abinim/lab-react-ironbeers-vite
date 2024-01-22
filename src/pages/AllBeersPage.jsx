import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const apiUrl = searchQuery
      ? `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`
      : 'https://ih-beers-api2.herokuapp.com/beers';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setBeers(data))
      .catch(error => console.error('Error fetching beers:', error));
  }, [searchQuery]);

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h2>All Beers</h2>
      <input
        type='text'
        placeholder='Search beers...'
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul>
        {beers.map(beer => (
          <li key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt={beer.name} />
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p>Contributed by: {beer.contributed_by}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllBeersPage;
