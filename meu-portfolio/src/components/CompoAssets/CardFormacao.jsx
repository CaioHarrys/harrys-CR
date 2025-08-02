import React from "react";
import "../../assets/css/Home.css";
import "../../assets/css/CardContainerBio.css";
import "../../assets/css/CardExperiencia.css";

const CardFormacao = () => {
  return (
    <div className="Card-Formacao">
      <div className="formacao-card">
        <div className="formacao-title">
          <h1>UNICEUB</h1>
          <span className="formacao-title">(2020 - 2024)</span>
        </div>
        <h1 className="formacao-title-h1">Segurança da Informação</h1>
        <p>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
          quidem cupiditate laboriosam. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Eveniet, quidem cupiditate laboriosam.
        </p>
      </div>
      <div className="formacao-card">
        <div className="formacao-title">
          <h1>SENAI</h1>
          <span className="formacao-title">(2020 - 2024)</span>
        </div>
        <h1 className="formacao-title-h1">Python e Inteligência Artificial</h1>
        <p>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
          quidem cupiditate laboriosam. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Eveniet, quidem cupiditate laboriosam.
        </p>
      </div>
      <div className="formacao-card">
        <div className="formacao-title">
          <h1>EBAC</h1>
          <span className="formacao-title">(2020 - 2024)</span>
        </div>
        <h1 className="formacao-title-h1">Dev Full-Stack</h1>
        <p>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
          quidem cupiditate laboriosam. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Eveniet, quidem cupiditate laboriosam.
        </p>
      </div>
    </div>
  );
};
export default CardFormacao;
