import React from "react";
import "../../assets/css/Home.css";
import "../../assets/css/CardContainerBio.css";
import { Container } from "react-bootstrap";
import Titles from "../../components/CompoAssets/Titles.jsx";
// import ProgressBar from "../CompoAssets/ProgBar"; ProgBar Compo route

const CardContainer = () => {
  return (
    <Container className="container">
      <div className="contain-content-bio">
        <Titles text={"Biografia"} />
        <div className="Bio_Paragraph">

          <p>
            Olá! Meu nome é Caio Ferraz da Cunha, um desenvolvedor web
            apaixonado por transformar ideias em soluções digitais inovadoras.
            Com experiência em tecnologias modernas de front-end e back-end, eu
            me dedico a construir interfaces intuitivas e sistemas robustos.
            Estou sempre em busca de novos desafios para aprimorar minhas
            habilidades e contribuir com projetos significativos.
          </p>
        </div>
        <div className="Bio_Tags_Row">
          <div className="Bio_Tags">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">JavaScript</span>
            <span className="tag">React</span>
            <span className="tag">React Native</span>
            <span className="tag">Python</span>
            <span className="tag">IA</span>
            <span className="tag">LLM</span>
            <span className="tag">Red Hat</span>
            <span className="tag">UI/UX</span>
            <span className="tag">PHP</span>
            <span className="tag">Azure</span>
          </div>
        </div>
      </div>{" "}
    </Container>
  );
};

export default CardContainer;
