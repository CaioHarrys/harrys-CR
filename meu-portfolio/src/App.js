import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar'; // 1. IMPORTAMOS O COMPONENTE

function App() {
  return (
    <div className="deebo-app">
      <Container fluid>
        <Row>
          {/* Coluna da Esquerda (Sidebar) */}
          <Col
            xs={12}
            md={5}
            lg={4}
            className="sidebar-wrapper" // Adicionamos uma classe para estilização futura
            style={{
              backgroundColor: '#fdfdfd',
              height: '100vh',
              position: 'fixed' // Fixa a sidebar na tela
            }}
          >
            {/* 2. USAMOS O COMPONENTE AQUI */}
            <Sidebar />
          </Col>

          {/* Coluna da Direita (Conteúdo Principal) */}
          <Col
            xs={12}
            md={{ span: 7, offset: 5 }} // Offset para não ficar embaixo da sidebar
            lg={{ span: 8, offset: 4 }}
            className="main-content-wrapper"
            style={{
              height: '100vh',
              overflowY: 'auto'
            }}
          >
            <div className="main-content p-5"> {/* Adicionamos um padding */}
              <p>Aqui ficará o conteúdo principal (Home, Sobre, Portfólio)</p>
              {/* Adicionando conteúdo extra para testar o scroll */}
              <div style={{ height: '1200px', backgroundColor: '#eee' }}>
                <p>Conteúdo de teste para o scroll</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;