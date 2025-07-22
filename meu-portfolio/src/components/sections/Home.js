import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    // Usamos flexbox para centralizar o conteúdo verticalmente na área disponível
    <section id="home" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <Container>
        <p className="text-muted mb-1">Olá, eu sou</p>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', color: '#111' }}>
          Seu Nome Aqui.
        </h1>
        <TypeAnimation
          sequence={[
            'Eu sou um Desenvolvedor', 2000,
            'Eu sou um Freelancer', 2000,
          ]}
          wrapper="h3"
          speed={50}
          style={{ fontSize: '2rem', color: '#555' }}
          repeat={Infinity}
        />
        <Button variant="primary" size="lg" className="mt-4" href="#portfolio">
          Meus Trabalhos
        </Button>
      </Container>
    </section>
  );
}

export default Home;