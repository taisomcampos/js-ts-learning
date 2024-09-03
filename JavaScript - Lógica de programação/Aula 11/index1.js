const verdadeira = true;

let nomeUm = 'Bilbo'; // criando
var nomeDois = 'Bilbo';

if (verdadeira) {
    let nomeUm = 'Frodo'; // criando dentro do bloco e não redeclarando
    // console.log(nomeUm, nomeDois);

    if (verdadeira) {
        let nomeUm = 'Condado';
        console.log(nomeUm, nomeDois);
    }
}