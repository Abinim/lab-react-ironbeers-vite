import React, { useState, useEffect } from 'react';

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(response => response.json())
      .then(data => setRandomBeer(data))
      .catch(error => console.error('Error fetching random beer:', error));
  }, []);

  if (!randomBeer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Random Beer</h2>
      <img src={randomBeer.image_url} alt={randomBeer.name} />
      <h3>{randomBeer.name}</h3>
      <p>{randomBeer.tagline}</p>
      <p>Contributed by: {randomBeer.contributed_by}</p>
    </div>
  );
}

export default RandomBeerPage;
