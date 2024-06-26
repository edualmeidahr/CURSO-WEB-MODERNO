console.log(typeof Array, typeof new Array, typeof [])

// Array é um objeto
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']    // Forma mais recomendada de criar um array
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia') // Forma mais recomendada de adicionar um elemento no array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()    // Ordena o array
console.log(aprovados)

delete aprovados[1] // Deleta o elemento do array
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') // Exclui e adiciona elementos do array]
console.log(aprovados)






