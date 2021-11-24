// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

  let altura = Number(prompt('Qual altura'))
  let largura = Number(prompt('Qual largura'))


  console.log( altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual =prompt("Qual o ano atual?")
const anoNascimento =prompt("Qual ano de nasciento?")

console.log( anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  const imc = peso / (altura * altura)

  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
 const nome = prompt("Qual seu nome?")
 let idade = prompt("Qual sua idade?")
 const email = prompt("Qual seu email?")

 console.log(`Meu nome é ${nome}, tenho ${idade} anos, o meu email é ${email}.`) 
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
 let cor1 = prompt('qual a sua primeira cor favorita')
 let cor2 = prompt('qual a sua segunda cor favorita')
 let cor3 = prompt('qual sua terceira cor favorita')

 const cores = [cor1, cor2, cor3]

 console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

let maiuscula = string.toUpperCase()
return maiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
let valor = custo / valorIngresso
return valor

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
let primeiraString = string1.length
let segundaString = string2.length

return primeiraString == segundaString

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
 
 return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
 var ultimo = array[array.length - 1];
 return ultimo

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
 arrayInicial = array[0]
 array[0] = array[array.length-1]
 array[array.length-1] = arrayInicial

 return array


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

 let comparar = string1.toUpperCase() === string2.toUpperCase();
 return comparar

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
 const anoAtual = Number(prompt("Qual ano"))
 const anoNascimento = Number(prompt("Qual nascimento"))
 const emissaoCarteira = Number(prompt("Qual carteira"))

 let idade = anoAtual - anoNascimento
 let dataCarteira = anoAtual - emissaoCarteira

 if(idade <= 20 && dataCarteira >=5 ){
    console.log(true)
 }else if (idade > 50 && dataCarteira >=15 ){
  console.log(true)
 }else if(idade >20 && idade < 50 && dataCarteira >=10){
   console.log(true)
 }
  else {
    console.log(false)
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  if(ano % 4 === 0 && ano % 100 !==0){
    return true
  }else if(ano % 4 !== 0 && ano % 400 === 0){
    return true
  }else if(ano % 4 === 0 && ano % 400 === 0){
    return true
  }else{
    return false
  }


}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  let idade =prompt("Você tem mais de 18 anos?")
  
  if (idade === "sim"){
   idade = true
  }else{
    idade = false
  }

  let ensino = prompt("Você possui ensino médio?")

   if(ensino === "sim"){
     ensino = true
   }else{
     ensino = false
   }

   let periodo = prompt("Você tem disponibilidade de horários?")
    
   if(periodo === "sim"){
     periodo = true
   }else{
     periodo = false
     
   }

    
if (idade && ensino && periodo === true) {
  console.log(true)}
  else {
    console.log(false)
  }

}

