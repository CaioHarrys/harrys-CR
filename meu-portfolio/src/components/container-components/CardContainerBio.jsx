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
            Desenvolvedor com 2 anos de experiência na prática, movido por
            desafios e pela próxima linha de código. Formado em Segurança da
            Informação – o que me dá uma visão diferenciada sobre arquitetura e
            resiliência de sistemas. Meu core está no Fullstack e em dar vida a
            interfaces robustas com React, mas sou um entusiasta de fronteiras:
            integro APIs de forma eficiente e mergulho no universo de IA/LLM e
            Python para construir soluções mais inteligentes. Procuro uma
            oportunidade de crescimento real em um time de alta performance. Meu
            foco agora é adquirir mais conteúdo, evoluir a fundo e solidificar
            minha carreira profissional.
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
