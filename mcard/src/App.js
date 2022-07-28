import logo from './logo.svg';
import "./App.css"
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import CreditCard from './CreditCard/CreditCard';
import CreditCardForm from './CreditCard/CreditCardForm';
import { useState } from 'react';
import CardApp from './CreditCard/CardApp';
import Router from './AllRoutes.jsx/Router';

function App() {
  return (
    <div className="App">
    <Router/>
    </div>
  );
}

export default App;
