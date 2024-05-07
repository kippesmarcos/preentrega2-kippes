import React from 'react';
import { Link } from 'react-router-dom';

const Catalog = ({ items }) => {
  return (
    <div className="catalog">
      {items.map(item => (
        <div className="catalog-item" key={item.id}>
          <Link to={`/item/${item.id}`}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
