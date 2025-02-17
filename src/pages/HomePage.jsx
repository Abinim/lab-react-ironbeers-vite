import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h2>Home Page</h2>
      <nav>
        <Link to='/beers'>All Beers</Link>
        <Link to='/random-beer'>Random Beer</Link>
        <Link to='/new-beer'>New Beer</Link>
      </nav>
    </div>
  );
}

export default HomePage;
