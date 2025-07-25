// src/components/Home.js
import React from "react";
import "../../assets/css/Home.css";
import { Container, Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import BackgroundEffect from "../BackgroundEffect"; // Importa o novo componente de background

const Home = () => {
  return (
    // A seção ocupa no MÍNIMO 100% da altura do painel direito
    <section
      id="home"
      style={{
        display: "flex",
        alignItems: "center",
        minHeight: "100%",
        position: "relative",
      }}
    >
      {/* O componente de background deve vir antes do conteúdo principal
          e ser posicionado absolutamente para ficar no fundo. */}
      <BackgroundEffect />

      <Container
        className="p-0 fade-in gradient-background"
        style={{ position: "relative", zIndex: 10 }}
      >
        {" "}
        {/* Adicionado position: 'relative' e zIndex para o conteúdo ficar por cima */}
        <p className="text-muted mb-1">Olá, eu sou</p>
        <h1 style={{ fontSize: "3.5rem", fontWeight: "800", color: "#111" }}>
          Caio Harrys
        </h1>
        <TypeAnimation
          sequence={[
            "Dev Full-Stack",
            2000,
            "Dev Python",
            2000,
            "Dev IA + LLM",
            2000,
          ]}
          wrapper="h3"
          speed={50}
          style={{ fontSize: "2rem", color: "#555" }}
          repeat={Infinity}
        />
        <Button variant="primary" size="lg" className="mt-4" href="#portfolio">
          Meus Trabalhos
        </Button>
      </Container>
    </section>
  );
};

export default Home;
