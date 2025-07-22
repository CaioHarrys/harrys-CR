import React from "react";
import { Image, Nav } from "react-bootstrap";
import profileImage from "../assets/img/profile.jpg";
import "../assets/css/Sidebar.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  // O container principal agora ocupa 100% da altura do painel pai
  return (
    <div className="sidebar-container text-center">
      {/* ... o restante do seu código da sidebar ... */}
      <Image src={profileImage} roundedCircle className="profile-image" />
      <h3 className="mt-3">
        <span className="blue-c">Caio</span> Harrys
      </h3>
      <p className="text-muted">
        Desenvolvedor <span className="blue-c">Full-Stack</span>
      </p>
      <div className="Card-about">
        <p>
          I'm a passionate front-end web developer who excels at creating
          pixel-perfect web interfaces. I’m available for a freelance job.
        </p>
      </div>
      <div className="about-lista">
        <ul>
          <li>
            <a href="#github" className="social-icon">
              <FaGithub size={20} />
            </a>
            <p>Endereço</p>
          </li>
          <li>
            <a href="#github" className="social-icon">
              <FaGithub size={20} />
            </a>
            <p>Endereço</p>
          </li>
          <li>
            <a href="#github" className="social-icon">
              <FaGithub size={20} />
            </a>
            <p>Endereço</p>
          </li>
        </ul>
      </div>
      <div className="social-icons my-4">
        <a href="#github" className="social-icon">
          <FaGithub size={20} />
        </a>
        <a href="#linkedin" className="social-icon">
          <FaLinkedin size={20} />
        </a>
        <a href="#email" className="social-icon">
          <FaEnvelope size={20} />
        </a>
      </div>
      <footer className="sidebar-footer">
        <p>
          &copy; {new Date().getFullYear()}
          <br /> Feito com 💙 por Caio Harrys <br />.
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
