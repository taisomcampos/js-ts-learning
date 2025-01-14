// Frodo Bolseiro, 33 anos, Rua do Bolsão, 312
const pessoa = {
    nome: 'Frodo',
    sobrenome: 'Bolseiro',
    idade: '33 anos',
    endereco: {
        rua: 'Rua do Bolsão',
        numero: 312
    }
};

const { nome, sobrenome, idade, endereco: { rua, numero } } = pessoa;
console.log(nome, sobrenome, idade, rua, numero);