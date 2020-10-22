import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div className="App">
        <Dinner dishName="Chicken Biryani" sweetDish="Custored"/>
        <hr/>
        <Dinner dishName="Chicken Kharhai" sweetDish="Kheer"/>
        <hr/>
        <Dinner dishName="Fired Rice" sweetDish="Gajjar ka halwa"/>
    </div>
  );
}

export default App;
