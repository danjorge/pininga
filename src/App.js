import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import NossaCasa from './pages/NossaCasa/NossaCasa';
import NossaGastronomia from './pages/NossaGastronomia/NossaGastronomia';
import NossaFilosofia from './pages/NossaFilosofia/NossaFilosofia';
import QuemSomos from './pages/QuemSomos/QuemSomos';
import Contato from './pages/Contato/Contato';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<NossaCasa />} />
            <Route path="/nossa-casa" element={<NossaCasa />} />
            <Route path="/nossa-gastronomia" element={<NossaGastronomia />} />
            <Route path="/nossa-filosofia" element={<NossaFilosofia />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
