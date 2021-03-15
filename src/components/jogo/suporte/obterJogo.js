/**
 * Usado para iniciar uma nova partida
 */
import { reiniciarRodadas, definirEstado } from '@/components/jogo/suporte/EstadoDoJogo'
import _ from 'lodash'

export default function criarJogo(baralho) {

  
  const iniciarPartida = () => {

    // Embaralhe as cartas
    baralho.value = _.shuffle(baralho.value)
    
    // Faça com que todas as cartas voltem ao seu estado inicial
    baralho.value = baralho.value.map((carta, indice) => {
      return {
        ...carta,
        posicao: indice,
        encontrada: false,
        visivel: false
      }
    })
    
    // Resete o total de rodadas
    reiniciarRodadas()

    // Altere o estado do jogo para 'jogando'
    definirEstado('JOGANDO')

  }

  return {
    iniciarPartida,
  }
}