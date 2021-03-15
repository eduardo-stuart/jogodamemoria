<template>

  <div class="fim-jogo">

    <h1>Parabéns, {{ obterNome }}!</h1>

    <p>
      Você completou o 
      <span class="destaque">
        desafio de memória
      </span>!
    </p>
    <p>
      Ao todo, foram necessárias 
      <span class="destaque">
        {{ obterRodadas }}
      </span>
      rodadas.
    </p>

    <p>
      Com essa conquista, você entrou para o
      <span class="destaque">
        ranking dos campeões!
      </span>
    </p>

    <section class="ranking">
      <Ranking />
    </section>

    <button class="btn afastar" @click="jogarNovamente">Jogar Novamente!</button>

    <button class="btn afastar" @click="novoJogador">Novo Jogador?</button>

    <button class="btn afastar" @click="telaInicial">Tela Inicial...</button>

  </div>
  
</template>

<script>

import Ranking from '@/components/interface/Ranking'
import { obterNome, obterRodadas } from '@/components/jogo/suporte/EstadoDoJogo'

export default {
  props: {
    jogarNovamente: Function,
    novoJogador: Function,
    telaInicial: Function
  },
  setup(){
    return {
      obterNome, obterRodadas, Ranking
    }
  }
}
</script>

<style scoped>

.fim-jogo {
  margin-top: 1.5rem;
  left: 20px;
  top: 20px;
  border: 2px solid blue;
  border-radius: 10px;
  padding: 25px;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
}

.fim-jogo p {
  padding: 10px;
  text-align: center;
  margin: 0 auto;
  font-size: 1.2rem;
  line-height: 2rem;
}

.fim-jogo h1 {
  font-size: 2.4rem;
}

.fim-jogo .destaque {
  font-size: 1.5rem;
  color: rebeccapurple;
  font-weight: bolder;
}

.fim-jogo .afastar {
  display: block;
  margin: 0 auto;
  margin-top: 24px;
}

.ranking {
  padding: 10px;
}

</style>>
