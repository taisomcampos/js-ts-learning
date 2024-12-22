let a = 'A'; // Frodo
let b = 'B'; // Sam
let c = 'C'; // Merry
let d = 'D'; // Pippin

let nomes = ['Frodo', 'Sam', 'Merry', 'Pippin']; // aqui foi criado o array que sera usado para a desestruturação

[a, b, c, d] = nomes; // aqui foi feita a desestruturação do array e também a atribuição dos valores as variaveis que passaram de 'A', 'B', 'C' e 'D' para 'Frodo', 'Sam', 'Merry' e 'Pippin'

console.log(a, b, c ,d); //  será impresso Frodo Sam Merry Pippin