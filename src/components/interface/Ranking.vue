<!--
  Componente responsável por exibir a relação de jogadores que conquistaram sua posição do ranking dos melhores
-->
<template>
  <div class="ranking">
    <h1>CAMPEÕES</h1>
    <table class="melhores">
      <tr>
        <th>#</th>
        <th>Jogador</th>
        <th>Rodadas</th>
      </tr>
      <tr v-for="(campeao, idx) in obterRanking" :key="idx">
        <td>
          {{ idx + 1 }}
        </td>
        <td>
          {{ campeao[0]}}
        </td>
        <td>
          {{ campeao[1]}}
        </td>

      </tr>
    </table>
  </div>
</template>

<script>

import { obterRanking } from '@/components/jogo/suporte/EstadoDoJogo'

export default {
  setup(){
    return {
      obterRanking
    }
  }
}
</script>

<style scoped>

.ranking {
  margin-top: 15px;
}

.ranking h1 {
  text-align: center;
  margin: 0 auto;
  max-width: 50%;
  padding: 5px;
  border-bottom: 2px solid rebeccapurple;
}

.ranking table {
  margin: 0 auto;
  margin-top: 6px;
}

.melhores {
  margin: 1em 0;
  min-width: 300px;
}

.ranking tr {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd
}

</style>>
