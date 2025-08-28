import React from "react";
import "../../assets/css/Home.css";
import "../../assets/css/CardContainerBio.css";
import { Container } from "react-bootstrap";
import Titles from "../../components/CompoAssets/Titles.jsx";

import ProfessionalityCard from "../CompoAssets/ProfessionalityCard.jsx";

const CardContainerTechs = () => {
  return (
    <Container className="container">
      <div className="contain-content-bio">
        <Titles text={"Tecnologias"} />
        <ProfessionalityCard />
      </div>{" "}
    </Container>
  );
};

export default CardContainerTechs;
