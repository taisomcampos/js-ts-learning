const numeros = [100, 200, 300, 400, 500, 600, 700]; // aqui foi criado um array de numeros
const [um, dois, tres, ...resto] = numeros; // aqui foi feita a desestruturação do array

console.log(um, dois, tres); // será impresso 100 200 300
console.log(resto); // será impresso [ 400, 500, 600, 700 ]
