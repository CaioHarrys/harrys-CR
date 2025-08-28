import React from "react";
import "../../assets/css/Home.css";
import "../../assets/css/CardContainerBio.css";
import "../../assets/css/CardExperiencia.css";
import {Container} from "react-bootstrap";
import Titles from "../CompoAssets/Titles.jsx";
import CardExperiencia from "../CompoAssets/CardExperiencia.jsx";

const CardContainerExperiencia = () => {
  return (
    <Container className="container">
      <div className="contain-content-formacao">
        <Titles text={"Experiência"} />
        <div className="formacao-box">
          <CardExperiencia/>
        </div>
      </div>{" "}
    </Container>
  );
};

export default CardContainerExperiencia;
