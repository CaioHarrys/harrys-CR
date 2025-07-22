import React from 'react';
import { Image, Nav } from 'react-bootstrap';
import profileImage from '../assets/img/profile.jpg';
import '../assets/css/Sidebar.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
  // O container principal agora ocupa 100% da altura do painel pai
  return (
    <div className="sidebar-container text-center">
      {/* ... o restante do seu código da sidebar ... */}
      <Image src={profileImage} roundedCircle className="profile-image" />
      <h3 className="mt-3">Caio Harrys</h3>
      <p className="text-muted">Desenvolvedor Full-Stack</p>
      <div className="social-icons my-4">
        <a href="#github" className="social-icon"><FaGithub size={24} /></a>
        <a href="#linkedin" className="social-icon"><FaLinkedin size={24} /></a>
        <a href="#email" className="social-icon"><FaEnvelope size={24} /></a>
      </div>
      <Nav className="flex-column main-nav">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">Sobre</Nav.Link>
        <Nav.Link href="#portfolio">Portfólio</Nav.Link>
        <Nav.Link href="#contact">Contato</Nav.Link>
      </Nav>
      <footer className="sidebar-footer">
        <p>&copy; {new Date().getFullYear()}<br/> Feito com 💙 por Caio Harrys <br/>.</p>
      </footer>
    </div>
  );
}

export default Sidebar;