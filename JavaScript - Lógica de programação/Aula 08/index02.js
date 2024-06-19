const data = new Date('2024-06-18 22:07:59'); // ordem: ano, mês, dia, hora, minuto, segundo, milisegundo
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Milisegundos', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // domingo = 0, sábado = 6
console.log(data.toString());