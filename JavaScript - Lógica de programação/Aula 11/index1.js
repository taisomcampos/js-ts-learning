const verdadeira = true;

// Let tem escopo de bloco - ex.: {...bloco}
// Var tem escopo de função

let nome = 'Luiz'; // criando
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Campos'; // criando dentro do bloco
    //console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'Outra coisa';
        console.log(nome, nome2);
    }
}