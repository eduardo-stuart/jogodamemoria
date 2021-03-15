<template>

    <div class="carta" @click="cartaSelecionada" :class="virarCartas">
      <div class="carta-cara frente">
        <img :src="imagem" class="icone-carta">
      </div>
      <div class="carta-cara verso"></div>
    </div>
    
</template>

<script>

import { computed } from 'vue'

export default {
  props: {
    encontrada: {
      type: Boolean,
      default: false
    },
    posicao: {
      type: Number,
      required: true
    },
    imagem: {
      type: String,
      required: true
    },
    visivel: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {

    const virarCartas = computed(() => {
      return props.visivel ? 'virada': ''
    })

    const cartaSelecionada = () => {
      // Somente emite o evento se a carta não estiver visível
      if (!props.visivel){ 
        context.emit('carta-selecionada', {
          posicao: props.posicao,
          imagem: props.imagem
        })        
      }
    }

    return {
      virarCartas,
      cartaSelecionada
    }
  }
}
</script>
