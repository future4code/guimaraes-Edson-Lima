//Questão 1 Interpretação

//10 , 50 

//nada aparece

//2

//Questão 2 Interpretação

//recebe o texto , e transforma em minusculo e depois retorna

// true - true - false

//Questão 1 códigos

function sobreMim(){

	console.log("Eu sou Edson, tenho 27 anos, moro no Rio de janeiro e sou Programador")
}

function sobreMim2(nome, idade, cidade, profissão){

	console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`)
}
sobreMim2("Edson",27,"Rio","Programador")


//Questão 2 códigos
function soma(num1, num2){
   let somar = num1 + num2

   return somar
}

console.log(soma(5, 5))
//________________________________________

function comparar(num1, num2){

	let verifica = num1 >= num2

	return verifica
}

//________________________________________

function mensagem(string){
    let imparpar = num1 % 2 === 0

	return imparPar

}

//________________________________________

function mensagem(string){
   
	let tamanho = string.length
	let maiuscula = string.toUpperCase()

	 let juntar = maiuscula + " " + tamanho

	 return juntar
}
    console.log(mensagem("Edson"))

//Questão 3 códigos

function soma(num1, num2){

	 let somar = num1 + num2

	 return somar

}

function subtracao(num1, num2){
	let subr = num1 - num2
	return subr
}

function multiplicacao(num1, num2){

	let mult = num1 * num2

	return mult
}

function divisao(num1, num2){

	let div = num1 / num2

	return div
}

let num1 = Number(prompt("Digite o primeiro numero:"))
let num2 = Number(prompt("Digite o segundo numero"))

console.log(soma(num1, num2))

console.log(subtracao(num1, num2))

console.log(multiplicacao(num1, num2))

console.log(divisao(num1, num2))