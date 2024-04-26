const a = {
    nome: 'Taisom',
    sobrenome: 'Campos',
};

const b = {...a};

a.nome = 'Luanda';
console.log(a);
console.log(b);