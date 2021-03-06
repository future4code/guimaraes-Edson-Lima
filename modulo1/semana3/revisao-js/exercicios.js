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
  
   array.sort(function (a, b) {
      return a - b
  })

  let menor = array[1];
  let maior = array[array.length - 2];
  array = [maior, menor]

  return array
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
   let objeto = {
      ...pessoa
  }

  return {
      'nome': "ANÔNIMO",
      'idade': objeto.idade,
      'email': objeto.email,
      'endereco': objeto.endereco
  }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
   let autorizadas = pessoas.filter((pessoa) => {
      return (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5)
  })

  return autorizadas

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

   let naoAutorizadas = pessoas.filter((pessoa) => {
      return !(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5)
  })

  return naoAutorizadas

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    
   let somaCompras = undefined;
    for (const conta of contas) {
        somaCompras = conta.compras.reduce((soma, i) => {
            soma += i
            return soma

        });
        conta.saldoTotal -= somaCompras


        conta.compras = []

        return contas
    }
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
   
   consultas.sort((a, b) => (a.nome > b.nome ? 1 : -1))
  return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
    for (let consulta of consultas)

        consulta.dataDaConsulta = consulta.dataDaConsulta.split('/').reverse().toString().replaceAll(',', '');
    // trata os valores da propriedade dataDaConsulta tirando a /, invertendo os itens do array (colocando no formato americano de data), transformando em string e substituindo as ',' por '' (espaço vazio).

    consultas.sort(function (a, b) {
        return (a.dataDaConsulta > b.dataDaConsulta) ? 1 : ((b.dataDaConsulta > a.dataDaConsulta) ? -1 : 0);
    })

    //operador ternário para execução da lógica de comparação como função do método .sort
    // referência:  https://www.alura.com.br/artigos/ordenacao-de-numeros-no-javascript-nao-funciona

    for (let indice of consultas)
        indice.dataDaConsulta = indice.dataDaConsulta.replace(/^(\d{4})(\d{2})(\d{2}).*/, '$3/$2/$1');

 return consultas
 
}