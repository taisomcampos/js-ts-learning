//                   0          1          2          esse é o indice do array 'numeros'
//                0  1  2    0  1  2    0  1  2       esses são os indices dos arrays dentro do array 'numeros'
const numeros = [[1, 2, 3], [3, 4, 5], [5, 6, 7]];

const [lista1, lista2, lista3] = numeros; // aqui foi feita a desestruturação do array 'numeros' e atribuido os valores as variaveis 'lista1', 'lista2' e 'lista3'
 console.log(lista3[2]); // será impresso 7