import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/sections/Home';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      {/* EFEITOS DE FUNDO */}
      <div className="intro-loader"></div>
      <div className="animated-shape shape1"></div>
      <div className="animated-shape shape2"></div>

      {/* PAINEL DA ESQUERDA (SIDEBAR) */}
      <div className="sidebar-container">
        <Sidebar />
      </div>

      {/* PAINEL DA DIREITA (CONTEÚDO PRINCIPAL) */}
      <div className="main-content-container">
        <Home />
        {/* Futuras seções como Sobre, Portfólio, etc., virão aqui dentro */}
      </div>
    </div>
  );
}

export default App;