import './App.css';
import React, { useState } from 'react';
import Header from './components/header';
import About from './components/about';
import Projects from './pages/Projects';
import Footer from './components/footer';
import NavRoot from './components/navRoot';
import ShowProject from './pages/showProject';
import Works from './components/works';

const App = () => {
  const [language, setLanguage] = useState('en'); //setando valor inicial do idioma da aplicacao como ingles

  const changeLanguage = (lang) => {
    setLanguage(lang); //atualiza o idioma conforme o valor passado no argumento (parametro lang)
  };

  const text = { //array de objetos contento o texto de cada idioma
    en: {
      works: ['Project in development'], //propriedades do objeto de texto em ingles
      header: "Hi, my name is Augusto",
      about: `Hi everyone! My name is Augusto, and I'm looking for my first opportunity in the IT field, focusing on programming. I have a technical background in Systems Development and have been immersed in this field for a year and a half. I'm proficient in C#, JavaScript, Java, and C. I also have practical experience in assembling and maintaining computers, especially with AMD architecture. I've worked on personal projects that demonstrate my ability to solve complex problems and implement innovative solutions. Despite being introverted, I value teamwork and enjoy interacting with others. I thrive on collaborating, listening to different perspectives, and finding creative solutions.`,
      footer: " © Copyright &copy; 2024",
      navRoot: ['ABOUT', 'PROJECTS', 'CONTACT'],
      showProject: ['Frontend Developer', 'Backend Developer', 'Database Structure', 'I like to develop frontend using JS frameworks like Angular and React. I like the flexibility and interactivity they provide' , 'Technologies and tools', 'For the backend, I enjoy working with .NET C# and Node.js, using ORM to simplify data management and make development more efficient', 'I work with SQL and MySQL using DML commands to manipulate data, DDL to structure the database, and TCL to manage transactions and ensure data integrity.'],
    },
    pt: {
      header: "Olá, meu nome é Augusto", //propriedades do objeto de texto em portugues
      about: `Olá pessoal! Me chamo Augusto e estou em busca da minha primeira oportunidade na área de Tecnologia da Informação, com foco em programação. Tenho formação técnica em Desenvolvimento de Sistemas e estou imerso nesse universo há um ano e meio. Domino C#, JavaScript, Java e C. Também tenho experiência prática em montagem e manutenção de computadores, especialmente com arquitetura AMD. Tenho trabalhado em projetos pessoais que demonstram minha capacidade de resolver problemas complexos e implementar soluções inovadoras. Apesar de ser introvertido, valorizo o trabalho em equipe e gosto de interagir com outras pessoas. Sou motivado por colaboração, escuta de diferentes perspectivas e busca por soluções criativas.`,
      footer: " © Todos diretos reservados; 2024",
      navRoot : ['SOBRE', 'PROJETOS', 'CONTATO'],
      showProject : ['Desenvolvedor Frontend', 'Desenvolvedor Backend', 'Estrutura de Banco de Dados', 'Curto de desenvolver frontend usando JS frameworks como Angular e React. Gosto da flexibilidade e interatividade que eles proporcionam.', 'Tecnologias e ferramentas','Para o backend, gosto de trabalhar com .NET C# e Node.js, usando ORM para facilitar o gerenciamento de dados e tornar o desenvolvimento mais eficiente.', 'Trabalho com SQL e MySQL usando comandos DML para manipular dados, DDL para estruturar o banco, e TCL para gerenciar transações e garantir a integridade dos dados.'],
      works : ['Projeto em densevolvimento'],
    },
  };

  return (
    <>
      <div className='container'>
        <NavRoot text={text[language].navRoot} changeLanguage={changeLanguage}/>
        <Header text={text[language].header} changeLanguage={changeLanguage} />
        <About text={text[language].about} />
        <Projects /> 
      </div>
      <div className='container-fluid p-0'>
          <ShowProject text={text[language].showProject} changeLanguage={changeLanguage}/>
      </div>
      <div className='worksContent'>
        <Works text={text[language].works} changeLanguage={changeLanguage}  />
      </div>
      <Footer text={text[language].footer} />
      </>
  );
};

export default App;