import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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

      {/* ESTE É O NOVO CONTÊINER PRINCIPAL QUE FALTAVA */}
      <div className="main-container">
        <Container fluid className="h-100">
          <Row className="h-100">
            {/* Coluna da Esquerda (Sidebar) */}
            <Col
              xs={12}
              md={5}
              lg={4}
              className="sidebar-col" // Classe para estilização
            >
              <Sidebar />
            </Col>

            {/* Coluna da Direita (Conteúdo Principal) */}
            <Col
              xs={12}
              md={7}
              lg={8}
              className="main-content-col" // Classe para estilização
            >
              <Home />
              {/* Futuras seções virão aqui */}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;