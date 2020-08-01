import React from 'react';
import Navbar from './components/navbar'
import Welcome from './components/welcome'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
      <p>This is a test line</p>
    </div>
  );
}

export default App;
