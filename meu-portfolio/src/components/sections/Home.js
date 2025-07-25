// src/components/Home.js
import React from "react";
import "../../assets/css/Home.css";
import { Container, Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import BackgroundEffect from "../BackgroundEffect"; // Importa o novo componente de background
import CardContainer from "../container-components/CardContainer.js";

const Home = () => {
  return (
    <section className="d-flex flex-column justify-content-start align-self-left home-card-right" id="home"style={{ display: "flex", minHeight: "100%", position: "relative" }}>
      <CardContainer/>
      <CardContainer/>
      <CardContainer/>
      <BackgroundEffect />
    </section>
  );
};

export default Home;
