function funcionarOunao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro){
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOunao('Testando...', 0,6)
    .then(console.log)
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!') )