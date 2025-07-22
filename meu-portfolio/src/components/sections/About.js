import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
// Caminhos corrigidos após nosso debug:
import profileImage from '../../assets/img/profile.jpg';
import '../../assets/css/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <div className="section-title">
          <h2>Sobre Mim</h2>
          <p>Minha Introdução</p>
        </div>
        <Row>
          {/* Coluna da Imagem */}
          <Col lg={4} className="d-flex align-items-center justify-content-center">
            <div className="about-image-container">
              <Image src={profileImage} fluid className="about-image" />
            </div>
          </Col>

          {/* Coluna do Texto */}
          <Col lg={8} className="pt-4 pt-lg-0 content">
            <h3>Desenvolvedor Web &amp; Designer</h3>
            <p className="fst-italic">
              Aqui você pode escrever um parágrafo um pouco mais detalhado sobre sua paixão por desenvolvimento, suas principais áreas de interesse e o tipo de trabalho que você busca.
            </p>
            <Row className="mt-4">
              <Col lg={6}>
                <ul>
                  <li><strong>Aniversário:</strong> 1 Jan 1995</li>
                  <li><strong>Celular:</strong> +55 11 91234 5678</li>
                  <li><strong>Cidade:</strong> São Paulo, BR</li>
                </ul>
              </Col>
              <Col lg={6}>
                <ul>
                  <li><strong>Idade:</strong> 30</li>
                  <li><strong>Nível:</strong> Pleno</li>
                  <li><strong>Email:</strong> contato@seuemail.com</li>
                </ul>
              </Col>
            </Row>
            <p>
              Aqui entra o resto da sua biografia. Fale sobre suas experiências, as tecnologias com as quais você mais gosta de trabalhar e seus objetivos de carreira. Mostre um pouco da sua personalidade.
            </p>
            <Button variant="primary" size="lg" className="mt-3">
              Download CV
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;