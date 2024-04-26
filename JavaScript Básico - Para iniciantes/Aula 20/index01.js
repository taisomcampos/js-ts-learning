function criarPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criarPessoa('Taisom', 'Campos', 34);
const pessoa2 = criarPessoa('Luanda', 'Ribeiro', 26);
const pessoa3 = criarPessoa('Sofia', '', 3);

console.log(pessoa3.nome, pessoa1.sobrenome, pessoa2.sobrenome);