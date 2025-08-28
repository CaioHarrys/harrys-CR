import React from "react";
import "../../assets/css/Home.css";
// import BackgroundEffect from "../BackgroundEffect.jsx";
import CardContainer from "../container-components/CardContainer.jsx";
import CardContainerBio from "../container-components/CardContainerBio.jsx";
import CardContainerExperiencia from "../container-components/CardContainerExperiencia.jsx";
import CardContainerFormacao from "../container-components/CardContainterFormacao.jsx";
import CardContainerTechs from "../container-components/CardContainerTechs.jsx";
const Home = () => {
  return (
    <section className="home-card-right">
      <CardContainer />
      <CardContainerBio />
      <CardContainerFormacao />
      <CardContainerExperiencia />
      <CardContainerTechs />
    </section>
  );
};

export default Home;
