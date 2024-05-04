function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))


function retoranrValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}


   async function executar(){
        let valor = await retoranrValor()

        await esperarPor(1500)
        console.log(`Async/await ${valor}...`)

        await esperarPor(1500)
        console.log(`Async/await ${valor + 1}...`)

        await esperarPor(1500)
        console.log(`Async/await ${valor + 2}...`)

    }

    executar()