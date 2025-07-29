import React from "react";
import Sidebar from "./components/sections/Sidebar.jsx";
import Home from "./components/sections/Home.jsx";
import "./assets/css/App.css"; // Certifique-se de que o caminho está correto

function App() {
  return (
    <div className="app-wrapper">
      {/* EFEITOS DE FUNDO */}
      <div className="intro-loader"></div>
      <div className="intro-loader-s"></div>
      <div className="intro-loader-2"></div>
      <div className="intro-loader-2-s"></div>
      <div className="intro-loader-3"></div>
      <div className="intro-loader-3-s"></div>
      {/* <div className="animated-shape shape1"></div>
      <div className="animated-shape shape2"></div> */}

      {/* PAINEL DA ESQUERDA (SIDEBAR) */}
      <div className="col-3">
        <Sidebar />
      </div>

      {/* PAINEL DA DIREITA (CONTEÚDO PRINCIPAL) */}
      <div className="main-content-container fade-in">
        <Home />
      </div>
    </div>
  );
}

export default App;
