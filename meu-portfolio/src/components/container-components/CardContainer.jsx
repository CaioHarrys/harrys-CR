import React from "react";
import "../../assets/css/Home.css";
import { Container, Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";

const CardContainer = () => {
  return (
    <Container className="container">
      <div className="contain-content">
        <p className="text-muted mb-1">Olá, eu sou</p>
        <h1>
          <TypeAnimation
            sequence={[
              "Dev Full-Stack",
              2000,
              "Dev Python",
              2000,
              "Dev IA + LLM",
              2000,
              "Designer UI/UX",
              2000,
              "Freelancer",
              2000,
            ]}
            wrapper="h3"
            speed={45}
            style={{
              fontSize: "3rem",
              color: "black",
              fontWeight: "bold",
              fontFamily: "Jost",
            }}
            repeat={Infinity}
          />
        </h1>
        <Button variant="primary" size="lg" className="mt-4" href="#portfolio">
          Meus Trabalhos
        </Button>
      </div>{" "}
    </Container>
  );
};

export default CardContainer;
