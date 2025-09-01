import React from "react";
import "../../assets/css/Home.css";
import "../../assets/css/CardContainerBio.css";


const CardTitleSub = ({ text }) => {
  return (
    <div className="formacao-title">
      <h1 className="formacao-title-h1">{text}</h1>
    </div>
  );
};
export default CardTitleSub;
