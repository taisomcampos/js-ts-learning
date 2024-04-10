/*
Taisom Campos tem 30 anos, pesa 70kg, tem 1.65 de altura e seu IMC é de 0000.
Taisom Campos nasceu em ano.
*/

// peso / (altura * altura)

const nome = 'Taisom';
const sobrenome = 'Campos';
const idade = 35;
const peso = 70;
const alturaEmMetros = 1.65;
let indiceMassaCorporal = peso / (alturaEmMetros * alturaEmMetros);
let anoNascimento = 2024 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${alturaEmMetros} de altura e seu IMC é de ${indiceMassaCorporal}.`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);