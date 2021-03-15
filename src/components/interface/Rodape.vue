<template>
  <div class="rodape">
    <div class="separador-semi"></div>

    <div class="rodape-desc">
      <h4 class="rodape-titulo"><strong>Jogo da Memória</strong></h4>

      <div>
        <small>
          Desafio técnico de programação feito sob demanda, 
          com o objetivo de exemplificar o uso das melhores 
          técnicas de desenvolvimento de software em um jogo
          que usasse somente as tecnologias 
            <strong>VueJS 3</strong>, 
            <strong>HTML5</strong> e 
            <strong>CSS3</strong>.
        </small>  

        <small>
          Todo o projeto foi realizado em um final de semana, 
          e não faz uso de nenhuma biblioteca externa,
          além das tecnologias supracitadas.
        </small>
      </div>
    </div>

    <div class="rodape-contato">
      <h4 class="rodape-titulo"><strong>Contato</strong></h4>

      <div class="links">
        <a href="https://www.linkedin.com/in/eduardo-stuart/" target="_blank" class="rodape-link"><i class="footer-icon fab fa-linkedin"></i></a>
        <a href="https://github.com/eduardo-stuart/jogodamemoria" target="_blank" class="rodape-link"><i class="footer-icon fab fa-github"></i></a>
      </div>

    </div>


    <div class="separador-semi"></div>

    <div class="copyright rodape-link">2021 ─ Projeto, código & design por <a href="https://www.linkedin.com/in/eduardo-stuart/" target="_blank">Eduardo Stuart</a></div>    

  </div>

</template>

<style scoped>
small {
  display: block;
  padding: 8px;
}

.rodape {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  border-top: 1px solid rgba(145, 145, 145, 0.9); 
  margin-top: auto;
  width: 100%;
  background: url('/imagens/fundo.webp');
  background-size: 60%;
  background-color: rgb(13, 23, 107);
  background-blend-mode: multiply;
  color: white;
  padding: 1.3em;
  font-size: 1rem;  
}

.rodape-titulo {
  padding: 10px 0 5px 0;
  font-size: 1.3rem;
}

.rodape-link {
  color: white;
  font-size: 2rem;
}

.rodape-link a {
  color: white;
  font-weight: bold;
  text-decoration: none;
}

.rodape-link a:visited {
  color: gold;
}

.rodape-desc {
  width: 60%;
  padding-left: 30px;
}

.rodape-contato {
  padding: 50px 0px;
  width: 20%;
  text-align: center;
}

.rodape-contato .links {
  display: flex;
  justify-content: space-around;
}

.rodape-contato .links a {
  margin-left: 20px;
}

.copyright {
  font-size: 0.7rem;
  margin: 2px auto;
}

@media(max-width: 550px) {
  .rodape {
    flex-direction: column;
  }

  .rodape-desc, .rodape-contato {
    width: 100%;
  }

  .rodape-contato {
    padding: 10px 0px;
    text-align: center;
  }
}

</style>