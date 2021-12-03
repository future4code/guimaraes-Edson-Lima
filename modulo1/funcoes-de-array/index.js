//exercício interpretação 1
//bota no console.log o primeiro array, depois o index e depois o array todo

//exercício interpretação 2
//imprime no console a propriedade nome dos 3 itens do array usuarios

//exercício interpretação 3
// cria um novo array retirando somente os itens da propriedade chijo


//exercício código 1

/* a) Crie um novo array que contenha apenas o nome dos doguinhos

b) Crie um novo array apenas com os [cachorros salsicha]

c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
 A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!" */

 const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]



function nomeTodos(item){
     return item.nome;
}
const novosPets = pets.map(nomeTodos)

//______________________________________________________________
function racaTodos(item){
    return item.raca === 'salsicha'
}
const raca = pets.filter(racaTodos)

//__________________________________________________________________
function desconto(item){
    return item.raca === "poodle";
}
const poodle = pets.filter(desconto)

function frase(item){
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}` 
}


//exercício código 2


/* a) Crie um novo array que contenha apenas o nome de cada item

b) Crie um novo array que contenha um objeto com o nome e o preço de cada item,
 aplicando 5% de desconto em todos eles

c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]".
 Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê" */



const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

const aplicarDescontoEmProdutos = (produtos) => {
    return produtos.map(produto => {
        console.log("nome:",produto.nome);
        console.log("categoria:",produto.categoria);
        console.log("preco",produto.preco);

        return {
            nome: produto.nome,
            preco: (produto.preco*0,95).toFixed(2)
        }
    });
};

console.log(aplicarDescontoEmProdutos(produtos));



