import React from 'react';
import { Image, Nav } from 'react-bootstrap';
import profileImage from '../assets/css/img/profile.jpg'; // Importa a imagem
import '../assets/css/Sidebar.css'; // Importa nosso CSS customizado

// Você precisará instalar o react-icons. No terminal, rode: npm install react-icons
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


const Sidebar = () => {
  return (
    <div className="sidebar-container text-center">
      {/* Imagem de Perfil */}
      <Image src={profileImage} roundedCircle className="profile-image mt-4" />

      {/* Nome e Título */}
      <h3 className="mt-3">Seu Nome Aqui</h3>
      <p className="text-muted">Desenvolvedor de Software</p>

      {/* Ícones de Redes Sociais */}
      <div className="social-icons my-4">
        <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:seu-email@email.com" className="social-icon">
          <FaEnvelope size={24} />
        </a>
      </div>

      {/* Menu de Navegação */}
      <Nav className="flex-column main-nav">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">Sobre</Nav.Link>
        <Nav.Link href="#portfolio">Portfólio</Nav.Link>
        <Nav.Link href="#contact">Contato</Nav.Link>
      </Nav>

      {/* Rodapé da Sidebar */}
      <footer className="sidebar-footer">
        <p>&copy; {new Date().getFullYear()} Seu Nome. <br/> Baseado no design de Deebo.</p>
      </footer>
    </div>
  );
}

export default Sidebar;