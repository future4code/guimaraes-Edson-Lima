/* Exercício Interpretação 1 

Matheus Nachtergaele
Virginia Cavendish
objeto = canal globo horario 14h */

/* Exercício Interpretação 2 

A const vai manter as informações do primeiro objeto cachorro
nos três console log, porém os nomes vão ser juca,juba,jubo. */

/* Exercício Interpretação 3 

False 
undefined */

// Questão 1 Códigos

/* const nomeApelido = {
    nome: 'edson',
    apelidos: ['Edinho','Bigula','Led']
}

function tipoApelido() {
    let imprimeNome = console.log(`O meu nome é ${nomeApelido.nome}, mas pode me chamar de ${nomeApelido.apelido[0]}, ${nomeApelido.apelidos[1]}, ou ${nomeApelido.apelidos[2]}`)

    return imprimeNome
}

console.log(tipoApelido())

const novosApelidos = {
    ...nomeApelido,
    apelidos: ['Ledzaran', 'Quasares', 'Altista']
}
tipoApelido(novosApelidos)  */

 //Questão 2 código

/* let objeto1 = {
    nome: "edson",
    idade: 27,
    profissao: "programador"
};
let objeto2 = {
    nome: "joao",
    idade: 40,
    profissao: "advogado"
};
   const frase = (parametro) => {

    let array = [parametro.nome, parametro.nome.lenght, parametro.idade, parametro.profissao, parametro.profissao.lenght]

    return array
   }
   console.log(frase(objeto2))
}

armario(objeto1, objeto2); */


 //Questão 3 Código

/* const carrinho = []

const frutasDeSacolao = [
    { fruta: 'melao', disponibilidade: true},
    { fruta: 'goiaba', disponibilidade: true},
    { fruta: 'banana', disponibilidade: true}
]
function Frutas(frutasDeSacolao) {
    carrinho.push(frutasDeSacolao[0])
    return frutasDeSacolao
}

console.log(carrinho); */