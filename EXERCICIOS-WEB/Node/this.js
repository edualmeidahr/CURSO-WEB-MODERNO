//False
console.log(this === global)
console.log(this === module)

//True
console.log(this === module.exports)
console.log(this === exports)

//Dentro da função o this não aponta para exports
function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()