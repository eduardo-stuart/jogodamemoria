<!--
  Um dos componentes mais importantes do jogo.
  Nele que são colocadas as cartas que o jogador deverá desvendar
  Veja detalhes sobre o seu funcionamento nos comentários  auto-explicativos.
-->

<template>

  <div class="tela-principal tabuleiro-cartas">

    <!-- Representa cada uma das cartas que o jogador irá interagir -->
    <Carta
      v-for="(carta, idx) in Baralho"
      :key="`carta-${idx}`"
      :imagem="carta.imagem"
      :visivel="carta.visivel"
      :posicao="carta.posicao"
      :encontrada="carta.encontrada"
      @cartaSelecionada="abrirCarta"
    />

  </div>

  <!-- Exibe o andamento do jogador até então -->
  <div class="game-feedback">

    <small>{{ andamento }}</small>

  </div>

</template>

<script>

import { ref, computed } from 'vue'
import Carta from '@/components/jogo/Carta'
import { adicionarRodada, obterRodadas, definirEstado, obterNome, adicionarNoRanking } from '@/components/jogo/suporte/EstadoDoJogo'

export default {
  props: {
    cartas: {
      type: Object,
      required: true
    }
  },
  setup(props){

    const Baralho = ref(props.cartas)
    const selecao = ref(null)

    // Quando uma carta for clicada, mostre a sua face
    // Precisamos que duas cartas estejam abertas para testar uma possível igualdade
    const abrirCarta = payload => {
      Baralho.value[payload.posicao].visivel = true

      // Se essa for a primeira carta selecionada, apenas exiba-a e retorne
      if (!selecao.value){
        selecao.value = payload
        return
      }

      // Se a mesma carta foi selecionada duas vezes, não há nada o que fazer ─ apenas retorne
      if (selecao.value.posicao === payload.posicao) return

      // Duas cartas estão abertas ─ vamos testar se o jogador acertou
      adicionarRodada() // Contabilize a rodadada
      const [pos1, pos2] = [selecao.value.posicao, payload.posicao]
      if (selecao.value.imagem === payload.imagem){
        // Sucesso!
        Baralho.value[pos1].encontrada = true
        Baralho.value[pos2].encontrada = true
      } else {
        // Não foi dessa vez ─ mas vamos dar um tempo para o jogador perceber o erro antes de ocultar as cartas novamente
        setTimeout(() => {
          Baralho.value[pos1].visivel = false
          Baralho.value[pos2].visivel = false
        }, 800)
      }
      // Resete a selecao
      selecao.value = null
    }

    // Quantos pares ainda temos que descobrir?
    const paresFechados = computed(() => {
      return (Baralho.value.filter( carta => carta.encontrada === false).length) / 2
    })

    // Como está o andamento do jogador? (será exibido na interface do jogo)
    const andamento = computed(() => {
      const pares = paresFechados.value
      if (pares > 0) {
        const [txtFalta, txtPar] = pares > 1 ? [ 'Faltam', 'pares'] : ['Falta', 'par']
        return `${txtFalta} ${pares} ${txtPar} (rodadas: ${obterRodadas.value}) `
      }
      // Se chegamos até aqui, todas as cartas foram encontradas
      sinalizarFimDeJogo()
      return "TEMOS UM VENCEDOR!"
    })

    // Antes de alterar o estado para 'FINALIZADO', dê um pequeno intervalo
    // para que o jogador possa analisar o tabuleiro e vislumbrar o seu sucesso
    const sinalizarFimDeJogo = () => {
      setTimeout(() => {
        // Adicione as informações do ranking para essa partida
        adicionarNoRanking(obterNome.value, obterRodadas.value)
        definirEstado('FINALIZADO')
      }, 500)
    }

    // Condição que indica se o jogo foi finalizado
    const encerrado = computed(() => paresFechados.value === 0)

    return {
      Baralho,
      Carta,
      paresFechados,
      abrirCarta,
      andamento,
      encerrado
    }
  }
}
</script>
