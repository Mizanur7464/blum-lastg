import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import ActionButton from './components/ActionButton';

function App() {
  return (
    <div className="app">
      <div className="header">
        <h2>Blum</h2>
      </div>
      
      <div className="main-content">
        <div className="crypto-info">
          <p>loelink crypto commu...</p>
          <p>1,284,870 BP</p>
        </div>
        
        <Profile />
        <ActionButton />
      </div>
      
      <Navbar />
    </div>
  );
}

export default App; 