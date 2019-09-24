import React from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import ViewContracts from './components/ViewContracts';

function App() {
  return (
    <div>
      <Register/>
      <Login/>
      <ViewContracts/>
    </div>
  )
};

export default App;
