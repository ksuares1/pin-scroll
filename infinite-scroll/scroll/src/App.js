import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Pinbox from './components/Pinbox';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <br>
      </br>
      <Pinbox/>
    </div>
  );
}

export default App;
