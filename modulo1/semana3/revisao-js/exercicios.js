// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
     return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function (a, b) {
      return a - b;
   });
   return array;
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let arrayPares = []
  for (i=0;i < array.length;i++){ 
     if (array[i] % 2 === 0)
     {
        arrayPares.push(array[i])
     }
   }
   return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

   let arrayElevadosADois = [];

   for (i = 0; i < array.length; i++)
   {
   if (array[i] % 2 === 0) {
      arrayElevadosADois.push(Math.pow(array[i], 2));
       }
   }

   return arrayElevadosADois;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

   return Math.max(...array)

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

   let objeto = {
      maiorNumero:'',
      maiorDivisivelPorMenor:'',
      diferenca:'',
  }
  
  if (num1 > num2){

      objeto.maiorNumero = num1;

      if ( num1 % num2 === 0){

          objeto.maiorDivisivelPorMenor = true;
      }
      else{
          objeto.maiorDivisivelPorMenor = false;
      }
          objeto.diferenca = num1 - num2;
  }
  else
  {
      objeto.maiorNumero = num2;

      if (num2 % num1 === 0)
      {
          objeto.maiorDivisivelPorMenor = true;
      }
      else
      {
          objeto.maiorDivisivelPorMenor = false;
      }
          objeto.diferenca = num2 - num1;
  }

  return objeto;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

   let primeirosPares = [];
    for (i= 0; primeirosPares.length < n ; i++) {
        if (i % 2 == 0) {
            primeirosPares.push(i);
        }
    }
    return primeirosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

   if (ladoA === ladoB && ladoB === ladoC) {
      return "Equilátero"

  } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
      return "Isósceles"

  } else {
      return "Escaleno"
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}