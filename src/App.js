import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import MenuOverlay from './components/layout/MenuOverlay';
import MealList from './components/meal_stuff/MealList';
import OrderHandler from './components/store/OrderHandler';

function App() {

  return (
    <OrderHandler>
      <Header />
      <MenuOverlay />
      <MealList/>
    </OrderHandler>
  );
}

export default App;
