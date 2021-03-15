<template>
  <div class="tabuleiro">
    <div class="categoria">
      <span class="texto-decorado">
        CATEGORIA
      </span>
      <h1>
        {{ bandeiras.categoria }}
      </h1>
      <span class="descricao">
        {{ bandeiras.descricao }}
      </span>
    </div>


    <!-- O componente a ser carregado/exibido dependerá da atual etapa (estado) do jogo -->
    <keep-alive>
      <component :is="componenteAtual" v-bind="opcoesComponenteAtual" />
    </keep-alive>

    <!-- Modal usado para solicitar o nome do jogador -->
    <ObterNome v-if="showModalNome" :callback="comecar"/>

  </div>

</template>

<script>

import { ref, computed, defineAsyncComponent } from 'vue'
import gerarTabuleiro from '@/components/jogo/suporte/gerarTabuleiro'
import jogo from '@/components/jogo/suporte/obterJogo'
import bandeiras from '@/data/bandeiras.json'
import ObterNome from '@/components/interface/ObterNome'

// Os componentes abaixo serão carregados dinamicamente
const MenuInicial = defineAsyncComponent(() => import('@/components/interface/MenuInicial'))
const GameOver = defineAsyncComponent(() => import('@/components/interface/GameOver'))
const GradeCartas = defineAsyncComponent(() => import('@/components/interface/GradeCartas'))

// Estado do jogo
import { obterEstado, definirEstado } from '@/components/jogo/suporte/EstadoDoJogo'

export default {
  setup(){

    const { cartas } = gerarTabuleiro(bandeiras)
    const { iniciarPartida } = jogo(cartas)

    const showModalNome = ref(false)

    const componenteAtual = computed(() => {

      switch(obterEstado.value){
        case 'JOGANDO':
          return GradeCartas
        case 'FINALIZADO':
          return GameOver
        // INICIAL é o estado 'default'
        default:
          return MenuInicial
      }
    })

    // Para cada componente em execução, teremos 'props' diferentes
    // Esse código está personalizando cada um deles
    const opcoesComponenteAtual = computed(() => {
      switch(obterEstado.value){
        case 'JOGANDO':
          return { cartas: cartas }
        case 'FINALIZADO':
          return { 
            jogarNovamente: comecar,
            novoJogador: obterNomeDoJogador,
            telaInicial: () => definirEstado('INICIAL') }
        // INICIAL é o estado 'default'
        default:
          return { callback: obterNomeDoJogador }
      }
    })

    // Exibe diálogo para obter o nome do jogador
    const obterNomeDoJogador = () => {
      showModalNome.value = true
    }

    // Oculta o modal que solicitou o nome do jogador e inicia uma partida
    const comecar = () => {
      showModalNome.value = false
      iniciarPartida()
    }

    return {
      bandeiras,
      comecar,
      ObterNome,
      componenteAtual,
      opcoesComponenteAtual,
      obterNomeDoJogador,
      showModalNome
    }
  }
}
</script>

<style>

.texto-decorado {
  display: block;
  font-weight: bolder;
  max-width: 280px;
  margin: 0 auto;
  margin-bottom: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 5px;
  color:  white;
}

.feedback {
  display: block;
  max-width: 50%;
  margin: 0 auto;
  margin-top: 10px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

</style>