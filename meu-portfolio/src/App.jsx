import React from "react";
import Sidebar from "./components/sections/Sidebar.jsx";
import Home from "./components/sections/Home.jsx";
import "./assets/css/App.css"; // Certifique-se de que o caminho está correto

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

      <div className="Content-site">

          <Row>
            {/* Em telas grandes (lg), esta coluna ocupa 8 de 12 espaços. Em telas pequenas, ocupa 12 (largura total) */}
            <Col lg={3} xs={12}>
              <div >
                <Sidebar />
              </div>
            </Col>

            {/* Em telas grandes (lg), esta coluna ocupa 4 de 12 espaços. Em telas pequenas, ocupa 12 (largura total) */}
            <Col lg={9} xs={12}>
              <div className="main-content-container">
                <Home />
              </div>
            </Col>
          </Row>

      </div>
      {/* PAINEL DA ESQUERDA (SIDEBAR) */}
      {/* <div className="col-3">
        <Sidebar />
      </div> */}

      {/* PAINEL DA DIREITA (CONTEÚDO PRINCIPAL) */}
      {/* <div className="main-content-container fade-in col-8">
        <Home />
      </div> */}
    </div>
  );
}

export default App;
