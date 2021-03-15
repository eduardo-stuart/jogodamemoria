<template>
  <Cabecalho />
  <Principal />
  <Rodape />
</template>

<script>

import Cabecalho from '@/components/interface/Cabecalho'
import Principal from '@/components/interface/Principal'
import Rodape from '@/components/interface/Rodape'

export default {
  name: 'Jogo da Memória ─ Por Eduardo Stuart',
  setup(){
    return {
      Cabecalho, Principal, Rodape
    }
  }
}
</script>
