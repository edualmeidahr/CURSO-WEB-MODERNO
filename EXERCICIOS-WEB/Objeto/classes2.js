class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{ // extends = herança
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome) // super = referencia a classe pai
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)