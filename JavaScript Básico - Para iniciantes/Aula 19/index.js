/* 
    * Uma function recebe um valor, pode executar uma ação e pode, ou não, também retornar um valor
    * Parametro vem dentro de um parentesis
*/

/*
function saudacao(nome) {
    return `Bom dia, ${nome}!`;
}

const variavel = saudacao('Luiz');
console.log(variavel);
*/

/*
    * Não se pode acessar, desde fora, o que está dentro do corpo de uma função
        function soma(x, y) {
            const resultado = x + y;
            return resultado;
        }

        console.log(soma(2, 2));
        console.log(soma(3, 1));
        console.log(soma(5, 10));
*/

/*
    *  Tudo abaixo de return não será mais executado
        function soma(x = 1, y = 1) {
            const resultado = x + y;
            return resultado;
        }

        const resultado = soma(2, 2);
        console.log(resultado);
*/

/*
    * É possivel determinar o valor do parametro
        function soma(x = 1, y = 1) {
            const resultado = x + y;
            return resultado;
        }

        const resultado = soma(4, 2);
        console.log(resultado);
*/


/*
    // Outras formas de criar funções
    // função anonima
        const raiz = function (n) {
            return n ** 0.5;
        }; // neste caso é necessario ;

        console.log(raiz(9));
        console.log(raiz(16));
        console.log(raiz(25));

    Arrow Function (uma maneira mais moderna de se criar uma função)
*/

const raiz = (n) => {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));