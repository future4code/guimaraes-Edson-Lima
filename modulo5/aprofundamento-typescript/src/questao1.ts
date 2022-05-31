// exercicio a)

// const minhaString:string = "olá"


// exercicio b)

// const meuNumero:number | string = 5


// exercicio c)

enum Cores {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELA = "amarela",
    VERDE = "verde",
    AZUL = "azul",
    AZULESC = "azul-escuro",
    VIOLETA = "violeta"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: Cores
}

const pessoa1:Pessoa = {
    nome: "Rafael",
    idade: 34,
    corFavorita: Cores.AZUL
}               

const pessoa2:Pessoa = {
    nome: "Duda",
    idade: 18,
    corFavorita: Cores.VERMELHO
}

const pessoa3:Pessoa = {
    nome: "Edson",
    idade: 28,
    corFavorita: Cores.VIOLETA
}                