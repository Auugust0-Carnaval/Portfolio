import React, { useState } from "react";
import userImage from "./Img/personProgrammer.png";

const About = () => {
  // Estado para controlar o idioma do texto
  const [language, setLanguage] = useState("en"); // 'en' para inglês, 'pt' para português

  // Função para alternar o idioma ao passar o mouse
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  // Texto em inglês e português
  const text = {
    en: `Hi everyone! My name is Augusto, and I'm looking for my first opportunity in the IT field, focusing on programming. I have a technical background in Systems Development and have been immersed in this field for a year and a half. I'm proficient in C#, JavaScript, Java, and C. I also have practical experience in assembling and maintaining computers, especially with AMD architecture. I've worked on personal projects that demonstrate my ability to solve complex problems and implement innovative solutions. Despite being introverted, I value teamwork and enjoy interacting with others. I thrive on collaborating, listening to different perspectives, and finding creative solutions.`,
    pt: `Olá pessoal! Me chamo Augusto e estou em busca da minha primeira oportunidade na área de Tecnologia da Informação, com foco em programação. Tenho formação técnica em Desenvolvimento de Sistemas e estou imerso nesse universo há um ano e meio. Domino C#, JavaScript, Java e C. Também tenho experiência prática em montagem e manutenção de computadores, especialmente com arquitetura AMD. Tenho trabalhado em projetos pessoais que demonstram minha capacidade de resolver problemas complexos e implementar soluções inovadoras. Apesar de ser introvertido, valorizo o trabalho em equipe e gosto de interagir com outras pessoas. Sou motivado por colaboração, escuta de diferentes perspectivas e busca por soluções criativas.`
  };

  return (
    <div className="row" id="about">
      <div className="col-8" id="content">
        <p className="text-white text-larger" onMouseEnter={toggleLanguage} onMouseLeave={toggleLanguage}>
          {text[language]}
        </p>
      </div>
      <div className="col-4" id="imgCol">
        <img src={userImage} className="small-image" alt="User" />
      </div>
    </div>
  );
};

export default About;
