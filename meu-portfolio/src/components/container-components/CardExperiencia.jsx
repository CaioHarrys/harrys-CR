import React from "react";
import "../../assets/css/Home.css";
import "../../assets/css/CardContainerBio.css";
import "../../assets/css/CardExperiencia.css";
import {Container} from "react-bootstrap";
import Titles from "../../components/CompoAssets/Titles.jsx";
import CardFormacao from "../../components/CompoAssets/CardFormacao.jsx";

const CardExperiencia = () => {
  return (
    <Container className="container">
      <div className="contain-content-formacao">
        <Titles text={"Formação Acadêmica"} />
        <div className="formacao-box">
          <CardFormacao/>
        </div>
      </div>{" "}
    </Container>
  );
};

export default CardExperiencia;
