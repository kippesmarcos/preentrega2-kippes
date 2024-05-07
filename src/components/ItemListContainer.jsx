import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Catalog from '../components/Catalog';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/products');
      const data = await response.json();
      setItems(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const reloadItems = async () => {
      const response = await fetch(`https://api.example.com/products?category=${id}`);
      const data = await response.json();
      setItems(data);
    };

    reloadItems();
  }, [id]);

  useEffect(() => {
    return history.listen((location) => {
      const categoryId = location.pathname.split('/').pop();
      const reloadItems = async () => {
        const response = await fetch(`https://api.example.com/products?category=${categoryId}`);
        const data = await response.json();
        setItems(data);
      };
      
      reloadItems();
    });
  }, [history]);

  return (
    <div>
      <h2>Catalog</h2>
      <Catalog items={items} />
    </div>
  );
};

export default ItemListContainer;
