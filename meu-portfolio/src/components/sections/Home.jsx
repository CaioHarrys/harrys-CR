import React from "react";
import "../../assets/css/Home.css";
import BackgroundEffect from "../BackgroundEffect.jsx";
import CardContainer from "../container-components/CardContainer.jsx";

const Home = () => {
  return (
    <section
      className="d-flex flex-column justify-content-start align-self-left home-card-right"
      id="home"
      style={{ display: "flex", minHeight: "100%", position: "relative" }}>
      <CardContainer />
      <CardContainer />
      <CardContainer />
      <BackgroundEffect />
    </section>
  );
};

export default Home;
