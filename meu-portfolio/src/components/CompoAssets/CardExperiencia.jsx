import React from "react";
import "../../assets/css/Home.css";

import "../../assets/css/CardExperiencia.css";
import "../../components/CompoAssets/CardTitle";
import CardTitle from "../../components/CompoAssets/CardTitle";
import CardTitleSub from "../../components/CompoAssets/CardTitleSub";
import "../../assets/css/CardContainerBio.css";
const CardExperiencia = () => {
  return (
    <div className="Card-Formacao">
      <div className="formacao-card">
        <div className="formacao-title">
          <CardTitle text={"Invisual"} />
          <span className="formacao-title">(01/08/2022 - 01/02/2023)</span>
        </div>
        <CardTitleSub
          className="formacao-title-h1"
          text={"Dev Front & Back-End | UI/UX"}
        />
        <p className="formacao-title-p">
          {" "}
          Minha trajetória na Invisual foica união da criatividade do UI/UX com
          a técnica do desenvolvimento Full Stack. Fiz parte do time responsável
          pela criação de um e-commerce de materiais hospitalares o qual se
          tornou líder em vendas em seu primeiro dia de deploy, além de liderar
          o desenvolvimento completo quanto ao design e Front-End. Criei um
          aplicativo web de treinamento para equipes de enfermagem .
          Complementei essa atuação com a manutenção de websites e o
          desenvolvimento de interfaces de apps internos, sempre focado em
          construir soluções digitais que não apenas funcionam, mas também geram
          valor real. Além de ter tido a oportunidade de atuar basicamente de
          analista de requisitos, onde tive contato direto com o cliente para
          entender suas necessidades e traduzi-las em soluções técnicas
          eficazes.
        </p>
      </div>
      <div className="formacao-card">
        <div className="formacao-title">
          <CardTitle text={"Kmon Vip"} />
          <span className="formacao-title">(07/01/2022 - 28/05/2022)</span>
        </div>
        <CardTitleSub text={"Dev Front-End | UI/UX"} />
        <p className="formacao-title-p">
          {" "}
          Minha atuação combinou design e estratégias digitais para dar vida à
          marca Kmon VIP. Fui responsável pela criação e atualização completa do
          site institucional, incluindo a reformulação do logotipo para
          modernizar a identidade visual da empresa. Além disso, criei e liderei
          a produção de todas as artes digitais. Criei um aplicativo interno que
          acabou com o uso de papel dentro da empresa e também supervisionei
          tanto na parte de UI/UX quanto de código em si, garantindo assim que a
          comunicação visual fosse consistente, eficaz e otimizada em todas as
          plataformas/aparelhos.
        </p>
      </div>
      <div className="formacao-card">
        <div className="formacao-title">
          <CardTitle text={"Lima Ferreira Advogados"} />
          <span className="formacao-title">(18/01/2022 - 24/04/2022)</span>
        </div>
        <CardTitleSub text={"Dev Front-End | UI/UX"} />
        <p className="formacao-title-p">
          {" "}
          Minha experiência na Lima Ferreia Advogados atuei com foco na
          reestruturação e gestão completa do site institucional do escritório
          Lima Ferreira Advogados. Fui o responsável por modernizar a presença
          digital da empresa, gerenciando a plataforma para garantir uma
          navegação intuitiva, um design atualizado e um conteúdo otimizado,
          assegurando que o site se tornasse uma ferramenta eficaz de
          comunicação e captação de clientes se destacando de outros
          escritórios.
        </p>
      </div>
      <div className="formacao-card">
        <div className="formacao-title">
          <CardTitle text={"Amparo RH"} />
          <span className="formacao-title">(10/11/2020 - 24/03/2021)</span>
        </div>
        <CardTitleSub text={"Dev Front & Back-End | UI/UX"} />
        <p className="formacao-title-p">
          {" "}
          Na Amparo RH tive como o papel de renovar a presença digital completa
          da empresa. Fui responsável pela criação total do site institucional,
          do conceito ao código, e pelo desenvolvimento da identidade visual e
          branding da empresa. Meu trabalho garantiu que a marca tivesse uma
          plataforma online robusta, com um design coeso e profissional, que
          refletisse seus valores e fortalecndou sua imagem no mercado.
        </p>
      </div>
    </div>
  );
};
export default CardExperiencia;
