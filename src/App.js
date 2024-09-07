import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cocktail from './Pages/Cocktail/Cocktail';
import Ingredient from './Pages/Ingredient/Ingredient';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cocktail' element={<Cocktail/>}/>
        <Route path='/ingredient' element={<Ingredient/>}/>
      </Routes>
    </div>
  );
};

export default App;