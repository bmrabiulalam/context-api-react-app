import './App.css';
import React, { createContext, useState } from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';
import NotFound from './components/NotFound/NotFound';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState('laptop');
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <div className="App" style={{border: '2px solid green', margin: '5px', padding: '5px'}}>
        <h2>Inside App Category: {category}</h2>
        <Header />
        <Home />
        <Shipment />
      </div>
    </CategoryContext.Provider>
  );
}

export default App;
