import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  let { id } = useParams();
  return (
    <div>
      <h2>Item Detail</h2>
      <p>Item ID: {id}</p>
    </div>
  );
};

export default ItemDetail;
