let p = new Promise(function(resolve){
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})


const primeiroElemento = arrayOuString => arrayOuString[0]
letraMaiuscula = letra => letra.toUpperCase()

p
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMaiuscula)
    .then(console.log)
    