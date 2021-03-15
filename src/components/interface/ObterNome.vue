<!--
Componente usado para obter o nome do jogador
Requer um função 'callback' que será chamada quando o jogador terminar de informar o seu nome
-->

<template>
  <div class="popup">
    <div class="interno">
      <h2>Qual o seu nome?</h2>

      <div class="popup-entrada-texto">
        <input 
          class="entrada-nome" 
          v-model="nome_jogador" 
          type="text" 
          v-on:keyup.enter="fecharModal" 
          @focus="$event.target.select()"
          ref="entrada_nome"
        >
      </div>

      <button class="btn popup-fechar" @click="fecharModal">
        <slot>
          JOGAR!
        </slot>
      </button>
    </div>
  </div>
</template>

<script>

import { onMounted, ref } from "vue"
import { adicionarNome, obterNome } from '@/components/jogo/suporte/EstadoDoJogo'

export default {
  props: [ 'callback' ],
  setup(props){
    const nome_jogador = ref(obterNome.value)
    const entrada_nome = ref(null)

    onMounted(() => {
      entrada_nome.value.focus()
    })

    const fecharModal = () => {
      adicionarNome(nome_jogador.value)
      props.callback()
    }

    return {
      fecharModal,
      nome_jogador,
      entrada_nome
    }
  }
}
</script>

<style scoped>

.popup {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.8);
  color: black;
}

.interno {
  width: 70%;
  border-radius: 15px;
  border: 5px solid rgba(58, 13, 255, 0.6);
  background-color: lightskyblue;
  padding: 64px;
  padding: 1.2rem;
  color: black;
}

.entrada-nome {
  width: 80%;
  padding: 5px 3px;
  margin: 8px 0;
  display: inline-block;
  font-size: 1.2rem;
  margin-top: 1.3rem;
  border: none;
  background-color: rgba(10, 15, 19, 0.4);
  border-bottom: 2px solid rgb(58, 13, 255);
}

.popup-fechar {
  margin-top: 1rem;
  align-items: center;
}

</style>