const verdadeira = true;

// Let tem escopo de bloco - ex.: {...bloco}
// Var tem escopo de função

let nome = 'Luiz'; // criando
var nome2 = 'Luiz'; // criando

if (verdadeira) {
    let nome = 'Campos'; // criando dentro do bloco
    var nome2 = 'Bilbo'; // redeclarando

    if (verdadeira) {
        var nome2 = 'Frodo'; // redeclarando
        let nome = 'Outra coisa';
    }
}

console.log(nome, nome2);