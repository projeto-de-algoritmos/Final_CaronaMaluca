import React from 'react';
import Home from './pages/Home';
import './global/reset.global.css';
import './global/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div className='main-container'>
      <Home />
    </div>
  );
}

export default App;
