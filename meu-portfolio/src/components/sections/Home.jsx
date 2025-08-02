import React from "react";
import "../../assets/css/Home.css";
// import BackgroundEffect from "../BackgroundEffect.jsx";
import CardContainer from "../container-components/CardContainer.jsx";
import CardContainerBio from "../container-components/CardContainerBio.jsx";
import CardExperiencia from "../container-components/CardExperiencia.jsx";
const Home = () => {
  return (
    <section className="home-card-right">
      <CardContainer />
      <CardContainerBio />
      <CardExperiencia />
    </section>
  );
};

export default Home;
