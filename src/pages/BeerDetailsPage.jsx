import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beerDetails, setBeerDetails] = useState(null);

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then(response => response.json())
      .then(data => setBeerDetails(data))
      .catch(error => console.error('Error fetching beer details:', error));
  }, [beerId]);

  if (!beerDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Beer Details</h2>
      <img src={beerDetails.image_url} alt={beerDetails.name} />
      <h3>{beerDetails.name}</h3>
      <p>{beerDetails.tagline}</p>
      <p>First Brewed: {beerDetails.first_brewed}</p>
      <p>Attenuation Level: {beerDetails.attenuation_level}</p>
      <p>Description: {beerDetails.description}</p>
      <p>Contributed by: {beerDetails.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;
