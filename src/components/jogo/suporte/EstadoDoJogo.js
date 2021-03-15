/**
 * Agrupa o estado atual do jugo.
 * É usado pelos componentes para obter o nome do jogador atual, a lista de campeões, etc
 */

import { ref, computed } from 'vue'

const rodadas = ref(0)
const nome = ref('JOGADOR_1')
const estado = ref('INICIAL')
const ranking = ref([])

const adicionarRodada = () => rodadas.value++
const reiniciarRodadas = () => rodadas.value = 0
const obterRodadas = computed(() => rodadas.value )

const adicionarNome = (novo_nome) => nome.value = novo_nome
const obterNome = computed(() => nome.value)

const definirEstado = (novo_estado) => estado.value = novo_estado.toUpperCase()
const obterEstado = computed(() => estado.value )

const adicionarNoRanking = (nome, rodadas) => {
  ranking.value.push([nome, rodadas]) 
  // O vetor de vencedores será ordenado pelo menor número de rodadas
  ranking.value.sort((a, b) => a[1] - b[1])
}
const obterRanking = computed(() => ranking.value)
const limparRanking = () => ranking.value.length = 0

export {
  adicionarRodada, reiniciarRodadas, obterRodadas,
  adicionarNome, obterNome,
  definirEstado, obterEstado,
  adicionarNoRanking, obterRanking, limparRanking
}