/* 
 Exercício: fazer uma conta de adição entre dois números e no final mostrar o resultado no navegador.
*/

let num1 = prompt('Digite um numero:');
let num2 = prompt('Digite outro número');

num1 = Number(num1);
num2 = Number(num2);

let resultado = num1 + num2;

alert(`O resultado da sua conta foi: ${resultado}.`);