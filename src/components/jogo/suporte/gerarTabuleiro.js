/**
 * Gera o tabuleiro que será usado no jogo
 * Pode usar qualquer coleção de imagens que forem compatíveis com o formato
 * disposto em @/data/bandeiras.json
 */

import { ref } from 'vue'
import _ from 'lodash'

const cartas = ref([])

const inicializar = imagens => {

  // Inicializa o vetor com as cartas do jogo
  imagens.forEach( img => {
    const original = {
      imagem: img,
      encontrada: false,
      posicao: null,
      visivel: false
    }

    // Por ser um jogo de memória, vamos precisar que duas cartas diferentes tenham as mesmas imagens
    cartas.value.push(original)
    cartas.value.push({...original})
  })

  // Embaralhe as cartas
  cartas.value = _.shuffle(cartas.value)

  // Por último, temos que atualizar a posição para cada uma das cartas
  cartas.value = cartas.value.map((carta, indice) => {
    return {
      ...carta,
      posicao: indice
    }
  })
}

export default function gerarTabuleiro(dados){
  inicializar(dados.arquivos)

  return {
    cartas
  }
}