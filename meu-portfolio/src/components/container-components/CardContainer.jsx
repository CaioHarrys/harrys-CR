import React from "react";
import "../../assets/css/Home.css";
import { Container, Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";

const CardContainer = () => {
  return (
    <Container className="container">
      <div className="contain-content">
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
      </div>{" "}
    </Container>
  );
};

export default CardContainer;
