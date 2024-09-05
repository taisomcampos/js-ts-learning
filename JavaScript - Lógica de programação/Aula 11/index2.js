const verdadeira = true;

let nomeUm = "Bilbo";
var nomeDois = "Sam";

if (verdadeira) {
    let nomeUm = "Gandalf";
    var nomeDois = "Pippin";
    console.log(nomeUm, nomeDois);

    if (verdadeira) {
        var nomeDois = "Galadriel";
        let nomeUm = "Elrond";
        console.log(nomeUm, nomeDois);
    }
}

console.log(nomeUm, nomeDois);