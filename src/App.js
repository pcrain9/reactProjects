import './App.css';
import Header from './components/layout/Header';
import MenuOverlay from './components/layout/MenuOverlay';
import MealList from './components/meal_stuff/MealList';

function App() {
  return (
    <>
      <Header />
      <MenuOverlay />
      <MealList />
    </>
  );
}

export default App;
