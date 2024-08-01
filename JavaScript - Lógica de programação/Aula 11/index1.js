const verdadeira = true;

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