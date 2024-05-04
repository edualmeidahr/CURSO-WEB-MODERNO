const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento no final do array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hammilton') // Adiciona um elemento no início do array
console.log(pilotos)


// Splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3,1) // Remove um elemento do array
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Retorna um novo array a partir do índice passado como parâmetro
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Retorna um novo array a partir do índice passado como parâmetro até o índice passado como parâmetro
console.log(algunsPilotos2)