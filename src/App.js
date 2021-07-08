import React, { useState } from 'react';
import './App.css';
import Header from './components/layout/Header';
import MenuOverlay from './components/layout/MenuOverlay';
import MealList from './components/meal_stuff/MealList';
import MenuContext from './components/store/handle-order';

function App() {

  const [userOrder, setUserOrder] = useState([]);

  function updateOrder(order) {
    setUserOrder(order);
  }

  return (
    <MenuContext.Provider
      value={{ menu: userOrder }}>
      <Header />
      <MenuOverlay />
      <MealList onOrderUpdate={updateOrder} />
    </MenuContext.Provider>
  );
}

export default App;
