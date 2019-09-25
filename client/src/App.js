import React from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import ViewContracts from './components/ViewContracts';
import FilterContracts from './components/FilterContracts';

function App() {
  return (
    <div>
      <Register/>
      <Login/>
      <ViewContracts/>
      <FilterContracts/>
    </div>
  )
};

export default App;
