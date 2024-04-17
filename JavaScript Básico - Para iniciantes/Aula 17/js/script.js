const numero = Number(prompt('Digite um número:'));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
numeroTitulo.innerHTML = numero;

texto.innerHTML = ''

texto.innerHTML += `<p>A raíz quadrada de <strong>${numero}</strong> é <strong>${Math.sqrt(numero)}</strong>.`;

texto.innerHTML += `<p><strong>${numero}</strong> é um numero inteiro: <strong>${Number.isInteger(numero)}</strong>.`;

texto.innerHTML += `<p><strong>${numero}</strong> é NaN: <strong>${Number.isNaN(numero)}</strong>.</p>`;

texto.innerHTML += `<p>Arredondando <strong>${numero}</strong> para baixo, seria: <strong>${Math.floor(numero)}</strong>.</p>`;

texto.innerHTML += `<p>Arredondando <strong>${numero}</strong> para cima, seria: <strong>${Math.ceil(numero)}</strong>.</p>`;

texto.innerHTML += `<p><strong>${numero}</strong>, com duas casas decimais, seria: <strong>${numero.toFixed(2)}<strong>.</p>`;