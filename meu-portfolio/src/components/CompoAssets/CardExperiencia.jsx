import React from "react";
import "../../assets/css/Home.css";
import "../../assets/css/CardContainerBio.css";
import "../../assets/css/CardExperiencia.css";
import "../../components/CompoAssets/CardTitle";
import CardTitle from "../../components/CompoAssets/CardTitle";
import CardTitleSub from "../../components/CompoAssets/CardTitleSub";

const CardExperiencia = () => {
  return (
    <div className="Card-Formacao">
      <div className="formacao-card">
        <div className="formacao-title">
          <CardTitle text={"Invisual"} />
          <span className="formacao-title">(01/08/2022 - 01/02/2023)</span>
        </div>
        <CardTitleSub text={"Dev Front & Back-End | UI/UX"} />
        <p>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
          quidem cupiditate laboriosam. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Eveniet, quidem cupiditate laboriosam.
        </p>
      </div>
      <div className="formacao-card">
        <div className="formacao-title">
          <CardTitle text={"Kmon Vip"} />
          <span className="formacao-title">(07/01/2022 - 28/05/2022)</span>
        </div>
        <CardTitleSub text={"Dev Front-End | UI/UX"} />
        <p>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
          quidem cupiditate laboriosam. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Eveniet, quidem cupiditate laboriosam.
        </p>
      </div>
      <div className="formacao-card">
        <div className="formacao-title">
          <CardTitle text={"Lima Ferreira Advogados"} />
          <span className="formacao-title">(18/01/2022 - 24/04/2022)</span>
        </div>
        <CardTitleSub text={"Dev Front-End | UI/UX"} />
        <p>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
          quidem cupiditate laboriosam. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Eveniet, quidem cupiditate laboriosam.
        </p>
      </div>
      <div className="formacao-card">
        <div className="formacao-title">
          <CardTitle text={"Amparo RH"} />
          <span className="formacao-title">(10/11/2020 - 24/03/2021)</span>
        </div>
        <CardTitleSub text={"Dev Front & Back-End | UI/UX"} />
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
export default CardExperiencia;
