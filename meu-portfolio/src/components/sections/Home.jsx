import React from "react";
import "../../assets/css/Home.css";
// import BackgroundEffect from "../BackgroundEffect.jsx";
import CardContainer from "../container-components/CardContainer.jsx";

const Home = () => {
  return (
    <section className="home-card-right">
      <CardContainer />
      <CardContainer />
      <CardContainer />
    </section>
  );
};

export default Home;
