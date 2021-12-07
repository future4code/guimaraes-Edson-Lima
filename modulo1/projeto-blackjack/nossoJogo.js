/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert("Boas vindas ao jogo de Blackjack!")


if (confirm("Quer Iniciar uma nova rodada?")){
   true
}else{
    console.log("O jogo acabou")
}

let cartaJogador1 = comprarCarta();
let cartaJogador2 = comprarCarta();
let cartaComputador1 = comprarCarta();
let cartaComputador2 = comprarCarta();

let jogadorValor = cartaJogador1.valor + cartaJogador2.valor;
let computadorValor = cartaComputador1.valor + cartaComputador2.valor;

console.log(`Jogador: cartas ${cartaJogador1.texto} pontuação: ${cartaJogador2.texto} = `+jogadorValor)

console.log(`Computador: cartas ${cartaComputador1.texto} pontuação: ${cartaComputador2.texto} = `+computadorValor)


if(jogadorValor > computadorValor < 21) {
    console.log ("O jogador ganhou")
}else if (jogadorValor === computadorValor){
  console.log("Deu empate")

}else { 
   console.log ("O computador ganhou")

}





//const carta = comprarCarta(); 
// Sorteia uma carta. Por exemplo, o rei de ouros

//console.log(carta.texto) 
// imprime o texto da carta. Nesse caso: "K♦️"

//console.log(carta.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)

