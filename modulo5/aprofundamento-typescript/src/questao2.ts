function obterEstatisticas(numeros:number[]):{}  {

    const numerosOrdenados:number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num

    }

    type Dados ={
        maior:number, 
        menor:number, 
        media:number
    }

    const estatisticas:Dados = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length

    }
    console.log({estatisticas})
    return estatisticas



}

obterEstatisticas([44, 29, 16])