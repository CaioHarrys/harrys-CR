import React from "react";
import { Image, Nav } from "react-bootstrap";
import profileImage from "../assets/img/profile.jpg";
import "../assets/css/Sidebar.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";

const blue = {
  color: "#007bff",
};

const Sidebar = () => {
  // O container principal agora ocupa 100% da altura do painel pai
  return (
    <div className="sidebar-container text-center">
      {/* ... o restante do seu código da sidebar ... */}
      <Image src={profileImage} roundedCircle className="profile-image"/>
      <h3 className="mt-3 align-self-lg-start jost-font-name name-side-bar">
        <span className="blue-c">CAIO</span> HARRYS
      </h3>
      <div className="Card-about jost-font">
        <p>
          I'm a passionate front-end web developer who excels at creating
          pixel-perfect web interfaces. I’m available for a freelance job.
        </p>
      </div>
      <div className="about-lista ">
        <ul className="list-side-bar jost-font">
          <li>
            <a href="#numero" className="social-icon">
              <BsFillTelephoneFill size={22} style={blue} />
            </a>
            <p>(61) 99211-9889</p>
          </li>
          <li>
            <a href="#github" className="social-icon">
              <IoMail size={25} style={blue} />
            </a>
            <p>caiocompanyhc@gmail.com</p>
          </li>
        </ul>
      </div>
      <div className="social-icons my-4">
        <a href="#github" className="social-icon">
          <FaGithub size={25} />
        </a>
        <a href="#linkedin" className="social-icon">
          <FaLinkedin size={25} />
        </a>
        <a href="#email" className="social-icon">
          <FaEnvelope size={25} />
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
