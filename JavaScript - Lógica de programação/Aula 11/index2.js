const verdadeira = true;

let nomeUm = 'Frodo'; // criando
var nomeDois = 'Bilbo'; // criando

if (verdadeira) {
    let nomeUm = 'Gandalf'; // criando
    //var nomeDois = 'Sam'; // redeclarando
    console.log(nomeUm, nomeDois);

    if (verdadeira) {
        var nomeDois = 'Galadriel';
        let nomeUm = 'Aragorn';
        console.log(nomeUm, nomeDois);

    }
}

console.log(nomeUm, nomeDois);