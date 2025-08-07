import React from "react";
import "../../assets/css/Home.css";
import "../../assets/css/CardContainerBio.css";
import { Container } from "react-bootstrap";
import Titles from "../../components/CompoAssets/Titles.jsx";
import ProgressBar from "../CompoAssets/ProgBar";

const CardContainerTechs = () => {
  return (
    <Container className="container">
      <div className="contain-content-bio">
        <Titles text={"Tecnologias"} />
        <ProgressBar />
      </div>{" "}
    </Container>
  );
};

export default CardContainerTechs;
