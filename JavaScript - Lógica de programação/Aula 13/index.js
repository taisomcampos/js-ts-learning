const pessoa = {
    nome: 'Frodo',
    sobrenome: 'Bolseiro',
    idade: 33,
    endereco: {
        rua: 'Rua dos Bobos',
        numero: 320
    }
};

// Atribuição via desestruturação
const { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade);