import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './home.css';
import logo from '../assets/logotipo_home.png';
import logoGif from '../assets/logotipo_animado.gif';

const HomePage = () => {
  return (
    <div>
  <nav className="nav">
    <img src={logo} alt="logo da empresa" className="logo" />
    <span className="titulo">Livroteca</span>
    <ScrollLink to="about" smooth={true} duration={500}>
      <button>Sobre Nós</button>
    </ScrollLink>
    <ScrollLink to="info" smooth={true} duration={500}>
      <button>Como Funciona</button>
    </ScrollLink>
    <Link to="/register">
      <button>Cadastre-se</button>
    </Link>
    <Link to="/login">
      <button>Login</button>
    </Link>
  </nav>

  <section className="hero">
    <h1>Bem-vindo à Livroteca</h1>
    <img src={logoGif} alt="logo animada" className="logo-gif" />
    <p>Armazene e acompanhe os livros que você já leu!</p>
    <ScrollLink to="about" smooth={true} duration={500}>
      <button>Saiba Mais</button>
    </ScrollLink>
  </section>

  <section id="about" className="about">
    <h2>Sobre Nós</h2>
    <p className="about-p2">
    Somos um grupo de cinco estudantes apaixonados por tecnologia e inovação. Atualmente, estamos cursando Análise e Desenvolvimento de Sistemas (ADS), e nossa equipe é formada por indivíduos dedicados e criativos. Nosso objetivo é transformar ideias em soluções práticas e eficientes, utilizando nossa experiência em tecnologia para desenvolver projetos inovadores. Cada um de nós traz uma perspectiva única, e juntos, estamos comprometidos em explorar novas maneiras de usar a tecnologia para resolver problemas e melhorar o dia a dia das pessoas.
    </p>

  
    <div class="block-container">
      <div class="block">
        <h3>Nossa Missão</h3>
        <p>Nossa missão é simplificar e enriquecer a experiência de leitura dos nossos usuários.<br /> Por meio da nossa plataforma de biblioteca web, oferecemos uma solução intuitiva que permite aos leitores organizar, avaliar e escrever resenhas sobre suas experiências de leitura.</p>
      </div>
      <div class="block">
        <h3>Nosso Time</h3>
        <p>Somos um grupo de cinco estudantes dedicados, apaixonados por tecnologia e inovação.<br />Cursando Análise e Desenvolvimento de Sistemas.<br /> Nosso time é formado por:<br />
        <br />Arthur Gratoni <br />
        <br />Arthur spinosa Rocha  <br />
        <br />Gabriel Oliveira Martins<br />
        <br />Guilherme Rossini Zamaio<br />
        <br />Luiz Augusto Macedo Dias<br />
        </p>
      </div>
      <div class="block">
        <h3>Nossos Valores</h3>
        <p>Inovação: Estamos comprometidos em desenvolver soluções tecnológicas inovadoras que facilitem o processo de armazenamento e avaliação de livros.<br /> <br />Praticidade: Acreditamos que a simplicidade e a eficiência devem estar no coração de todas as nossas ferramentas. Queremos que adicionar livros, notas e resenhas seja uma experiência fluida e agradável.<br /> <br />Acessibilidade: A plataforma é desenvolvida para que todos possam acessar e organizar suas leituras de forma prática, independentemente de suas habilidades tecnológicas.</p>
      </div>
    </div>
  </section>

  <section id="info" className="info">
    <h2>Como Funciona</h2>
    <p className="info">Nosso site é uma plataforma intuitiva que permite aos usuários criarem uma conta personalizada para gerenciar seus livros já lidos. Após se cadastrar, você terá acesso à sua biblioteca pessoal, onde poderá adicionar todos os livros que já leu, junto com detalhes importantes.<br />

    <br />Para cada livro, você pode:<br />

    <br />Inserir o título do livro.
    <br />Adicionar o autor para manter um registro organizado.
    <br />Atribuir uma nota de acordo com sua experiência de leitura.
    <br />Escrever um comentário ou resenha, compartilhando suas impressões e reflexões sobre a obra.</p>
    <Link to="/register">
      <button>Comece Agora</button>
    </Link>
  </section>
</div>
  );
};

export default HomePage;



