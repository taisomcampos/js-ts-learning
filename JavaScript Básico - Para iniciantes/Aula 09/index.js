/*
Em JavaScript, para redeclarar uma variável com let, só é preciso escrever o identificador sem ter que usar a palavra chave (let) novamente pois, diferentemente de var, que sim é possivel, isso resultará em uma mensagem de erro.
*/

/*
* Isso daqui não dará nenhum erro, mas não é recomendável de se fazer

var nome = 'Bilbo';
var nome = 'Bolseiro';
*/

/*
* Já isso dará erro, pois para redeclarar uma variável com let, simplesmente devo escreve-la ultilizando somente o identificador  

let nome = 'Bilbo';
let nome = 'Bolseiro';
*/

// Forma correta de se redeclarar uma variável últilizando let
let nome = 'Bilbo';
nome = 'Bolseiro';

console.log(nome);