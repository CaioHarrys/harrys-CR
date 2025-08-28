import React from "react";
import "../../assets/css/Home.css";
import "../../assets/css/CardContainerBio.css";
import "../../assets/css/CardExperiencia.css";
import {Container} from "react-bootstrap";
import Titles from "../CompoAssets/Titles.jsx";
import CardsFormacao from "../CompoAssets/CardFormacao.jsx";

const CardContainerFormacao = () => {
  return (
    <Container className="container">
      <div className="contain-content-formacao">
        <Titles text={"Formação Acadêmica"} />
        <div className="formacao-box">
          <CardsFormacao/>
        </div>
      </div>{" "}
    </Container>
  );
};

export default CardContainerFormacao;
