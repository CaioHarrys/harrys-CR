import React from "react";
import "../../assets/css/Home.css";
import { Container } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { Image } from "react-bootstrap";
import profileImage from "../../assets/img/profile.jpg";

const CardContainer = () => {
  return (
    <Container className="container">
      <div className="contain-content">
        <div className="left_hero_header">
          <div className="Circle_img">
            <Image
              src={profileImage}
              roundedCircle
              className="profile-image-hero"
              style={{ zIndex: 15 }}
            />
            <div className="blue_circle">
              <span></span>
            </div>
            <div className="red_circle">
              <span></span>
            </div>
            <div className="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="right_hero_header">
          <p className="text-muted">Olá, eu sou</p>
          <h1 className="text-animated jost-font">
            <TypeAnimation
              sequence={[
                "Dev Full-stack",
                2000,
                "Dev Python",
                2000,
                "Dev IA + LLM",
                2000,
                "Designer UI/UX",
                2000,
                "Freelancer",
                2000,
              ]}
              wrapper="h3"
              speed={45}
              style={{
                fontSize: "3rem",
                color: "black",
                fontWeight: "bold",
                fontFamily: "Jost",
                textAlign: "left",
              }}
              repeat={Infinity}
            />
          </h1>
        </div>
      </div>{" "}
    </Container>
  );
};

export default CardContainer;
