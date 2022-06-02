const nome: string = 'Edson'

const dataDeNascimento: string = '13/01/1994'

let dia = dataDeNascimento.split('/', 1)
let mes = dataDeNascimento.split("13/1994", 3)
let ano = dataDeNascimento.split('13/01/')

console.log(`Olá me chamo ${nome}, nasci no dia ${dia} do mês ${mes} do ano de ${ano}.`)