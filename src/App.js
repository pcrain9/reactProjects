import React, { useState } from 'react';
import './App.css';
import Header from './components/layout/Header';
import MenuOverlay from './components/layout/MenuOverlay';
import MealList from './components/meal_stuff/MealList';
import OrderHandler from './components/store/OrderHandler';

function App() {

  const [userOrder, setUserOrder] = useState([]);

  function updateOrder(order) {
    setUserOrder(order);
  }

  return (
    <OrderHandler>
      <Header />
      <MenuOverlay />
      <MealList onOrderUpdate={updateOrder} />
    </OrderHandler>
  );
}

export default App;
