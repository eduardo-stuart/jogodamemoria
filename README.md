# Jogo da Memória

Desafio de programação com o objetivo de exemplificar o uso de técnicas modernas de desenvolvimento de software. 

Para esse desafio, o objetivo era criar um jogo de memória que empregasse as seguintes tecnologias:

* **VueJS 3**
* **HTML 5**
* **CSS 3**

### Captura de Tela

![Jogo da Memória](./etc/captura.webp)

### Versão Online

Uma versão operacional do jogo pode ser testada diretamente na janela do navegador ao visitar o endereço [https://memoria.eduardostuart.pro.br](https://memoria.eduardostuart.pro.br)

### Sobre o Jogo

O jogo consiste em um tradicional desafio de memória, em que várias cartas estão dispostas de forma oculta em um tabuleiro. O jogador deverá encontrar todos os pares, no menor número de rodadas.

O nome do jogador precisa ser obtido antes do início da primeira partida, e deve ser feito um registro com o número de rodadas que foram necessárias para completar o desafio.

Ao terminar uma partida, o jogador deverá ser saudado, e uma relação com os melhores jogadores da seção atual deverá ser exibida.

O jogador poderá optar por iniciar uma nova partida.

### Objetivos Técnicos

* Empregar as melhores práticas do desenvolvimento de software (_**Código Limpo**_)
* Usar recursos modernos do *framework* **VueJS**, com a _**Composition API**_ e o carregamento dinâmico de componentes, entre outros
* Desenvolver uma interface responsiva, entregando uma experiência agradável tanto para usuários de dispositivos móveis, quanto em desktops
  * Nenhum *framework* externo, como **Bootstrap** ou similar, poderia ser usado
  * Todo o código para o design foi criado usando apenas puro **HTML** e **CSS**  

### Requisitos

Para alterar o jogo (e testá-lo em um servidor local), será necessário possuir os seguintes softwares instalados:

1. [NodeJS](https://nodejs.org/) 
   * Versão 12.x ou superior
2. [VueJS](https://vuejs.org/)
   * Versão 3 ou superior ─ não irá funcionar em versões anteriores devido ao uso de recursos modernos como **Composition API**.
3. [Google Chrome](https://www.google.com/intl/pt-BR/chrome/), [Firefox](https://www.mozilla.org/pt-BR/firefox/new/), [Edge](https://www.microsoft.com/pt-br/edge),...
   * Qualquer versão recente dos principais *browsers* será capaz de executar o jogo sem problemas

### Instalação

As instruções a seguir são para o sistema **Linux**, mas o procedimento é bastante similar em outros sistemas operacionais ─ consulte a ajuda online do seu sistema caso encontre problemas.

1. Na sua máquina local, crie uma pasta para abrigar os arquivos que compõem o jogo, acessando essa pasta logo em seguida:

   ```bash
   cd ~
   mkdir jogodamemoria
   cd jogodamemoria
   ```

2. Clone o jogo, usando o seguinte comando:

   ```bash
   git clone git@github.com:eduardo-stuart/jogodamemoria.git
   ```

3. Após a transferência, faça a instalação de dependências usadas pelo projeto:

   ```bash
   npm install
   ```

4. Para executar o jogo, inicie-o com o seguinte comando:

   ```bash
   npm run serve
   ```

5. Será exibida uma mensagem similar à exibida abaixo, informando o endereço local onde o jogo está sendo executado. Copie esse endereço e cole na barra de endereços do seu navegador.

   ```bash
    DONE  Compiled successfully in 203ms                                   06:07:06
    App running at:
    - Local:   http://localhost:8080/ 
    - Network: http://192.168.1.10:8080/
   ```

### Entre em contato

Em caso de dúvidas, críticas ou sugestões, não deixe de entrar em contato.

Toda e qualquer sugestão de melhoria, seja no código, seja nas técnicas que foram empregadas, serão muito bem-vindas. 

Você pode entrar em contato comigo via [LinkedIn](https://www.linkedin.com/in/eduardo-stuart/).
