<!--
  Componente criado para representar a tela principal do jogo.
  Pode ser usado em versões futuras para exibir opções, seleção de temas, etc.
  Por enquanto, tem como única função exibir o tabuleiro.
-->
<template>
  <div class="wrapper">
    <Tabuleiro />
  </div>
</template>

<script>

import Tabuleiro from '@/components/jogo/Tabuleiro'

export default {
  setup(){
    return { 
      Tabuleiro
    }
  }
}
</script>

<style>

</style>