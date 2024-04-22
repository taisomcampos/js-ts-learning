/*
    Em lugar de fazer assim, pode-se agrupar em outro lugar! Muito mais fácil criar um objeto.
        const nome01 = 'Frodo';
        const sobrenome01 = 'Bosleiro';
        const idade = 50;

        const nome02 = 'Sam';
        const sobrenome02 = 'Gamgi';
        const idade = 25;

    * Um objeto se cria útilizando {}, assim como se útiliza [] para se criar um array

    *Isso é um objeto literal
        const pessoa1 = {
            nome: 'Frodo',
            sobrenome: 'Bolseiro',
            idade: 50
        };

        const pessoa1 = {
            nome: 'Sam',
            sobrenome: 'Gamgi',
            idade: 25
        };


        console.log(pessoa1.nome);
        console.log(pessoa1.sobrenome);
    
    * Um valor enviado para um parametro, chama-se argumento.

    
    function criaPessoa(nome, sobrenome, idade) {
        return {
            nome,
            sobrenome,
            idade
        };
    }

    const pessoa1 = criaPessoa('Taisom', 'Campos', 35);
    const pessoa2 = criaPessoa('Vicente', 'De Paulo', 36);
    const pessoa3 = criaPessoa('Daniel', 'Cardoso', 37);
    const pessoa4 = criaPessoa('Luanda', 'dos Santos', 26);
    const pessoa5 = criaPessoa('Jose', 'Salazar', 36);

    console.log(pessoa1.nome, pessoa3.sobrenome);
*/

const pessoa1 = {
    nome: 'Luanda',
    sobrenome: 'Campos',
    idade: 26,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();