// Frodo Bolseiro, 33 anos, Rua do Bolsão, 312
const pessoa = {
    nome: 'Frodo',
    sobrenome: 'Bolseiro',
    idade: 33,
    endereco: {
        rua: 'Rua do Bolsão',
        numero: 312
    }
};

const { nome, sobrenome, idade, endereco: { rua, numero} } = pessoa;
console.log(`Meu nome é ${nome} ${sobrenome}, tenho ${idade} anos e moro na ${rua}, nº ${numero}.`);