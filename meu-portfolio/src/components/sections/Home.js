import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    // A seção ocupa no MÍNIMO 100% da altura do painel direito
    <section id="home" style={{ display: 'flex', alignItems: 'center', minHeight: '100%' }}>
      <Container className="p-0"> {/* Removido padding do container do bootstrap */}
        <p className="text-muted mb-1">Olá, eu sou</p>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', color: '#111' }}>
          Caio Harrys
        </h1>
        <TypeAnimation
          sequence={[ 'Dev Full-Stack', 2000, 'Dev Python', 2000, 'Dev IA + LLM', 2000 ]}
          wrapper="h3"
          speed={50}
          style={{ fontSize: '2rem', color: '#555' }}
          repeat={Infinity}
        />
        <Button variant="primary" size="lg" className="mt-4" href="#portfolio">
          Meus Trabalhos
        </Button>
        {/* Conteúdo de teste para verificar o scroll: */}
        {/* <div style={{height: '800px', marginTop: '50px', background: '#eee'}}>Bloco de Teste do Scroll</div> */}
      </Container>
    </section>
  );
}

export default Home;