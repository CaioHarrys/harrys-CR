import React from "react";
import "../../assets/css/Home.css";
import "../../assets/css/CardContainerBio.css";
import "../../assets/css/CardExperiencia.css";

const CardsFormacao = () => {
  return (
    <div className="Card-Formacao">
      <div className="formacao-card">
        <div className="formacao-title">
          <h1>UNICEUB</h1>
          <span className="formacao-title">(07/07/2021 - 24/02/2025)</span>
        </div>
        <h1 className="formacao-title-h1">Segurança da Informação</h1>
        <p>
          {" "}
          Como profissional em Segurança da Informação, possuo competência na
          perícia de crimes digitais, com foco na investigação de incidentes e
          na coleta de evidências para ações legais. Tenho experiência em criar
          e implementar soluções de segurança empresarial para proteger dados
          sensíveis e prevenir violações. Além disso, domino a análise e suporte
          de sistemas, identificando proativamente falhas e vulnerabilidades
          para garantir a continuidade operacional. Por fim, possuo conhecimento
          em administração de redes, monitorando o fluxo de dados para assegurar
          a confidencialidade e a integridade da informação em ambientes
          corporativos.
        </p>
      </div>
      <div className="formacao-card">
        <div className="formacao-title">
          <h1>SENAI</h1>
          <span className="formacao-title">(07/04/2025 - 03/07/2025)</span>
        </div>
        <h1 className="formacao-title-h1">Python e Inteligência Artificial</h1>
        <p>
          {" "}
          Em meu curso de Python e Inteligência Artificial, obtive uma
          compreensão sólida e prática. Aprendi a manipular e analisar dados
          usando bibliotecas como Pandas, e apliquei esse conhecimento para
          criar e treinar modelos de Machine Learning (ML) e Redes Neurais. Fui
          fundo em tópicos avançados como Large Language Models (LLMs) e os usei
          para desenvolver chatbots e agentes de IA que automatizam tarefas e
          interagem de forma inteligente. Esse conhecimento me permitiu
          construir aplicativos com IA completos, desde o processamento de dados
          até a entrega de uma solução funcional.
        </p>
      </div>
      <div className="formacao-card">
        <div className="formacao-title">
          <h1>EBAC</h1>
          <span className="formacao-title">(08/10/2019 - 26/06/2021)</span>
        </div>
        <h1 className="formacao-title-h1">Dev Full-Stack</h1>
        <p>
          {" "}
          No curso de Desenvolvimento Fullstack na EBAC, adquiri uma visão
          completa da construção de sistemas, desde a interface até o banco de
          dados. Na parte de front-end, tornei-me proficiente em React para
          criar interfaces de usuário dinâmicas e responsivas, e utilizei
          frameworks CSS modernos como Bootstrap e Tailwind para designs
          elegantes. No back-end, usei Java e Javascript para construir a lógica
          do servidor e gerenciar a comunicação de dados, integrando-a com
          bancos de dados SQL. Esse aprendizado me capacitou a desenvolver e
          implantar sistemas, sites e softwares completos, dominando todas as
          etapas do ciclo de desenvolvimento.
        </p>
      </div>
    </div>
  );
};
export default CardsFormacao;
