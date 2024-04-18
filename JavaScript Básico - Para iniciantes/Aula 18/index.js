/* 
    * Um Array é como se fosse uma lista, uma coleção de coisas
    * Pode-se usar vários tipos de dados em um mesmo array, mas isso não é uma boa prática de Programação
    * Similar às strings, os arrays também são indexados, porém, eles não são indexados pelo seu valor e sim por elementos
    * Também é possivel editar um valor
*/

//               0       1        2         *exemplo de indexação  
const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos);

/*
    Adiciona um elemento ao final
        alunos.push('Luanda', 'Fábio', 'Marcos');
    
    Adiciona um elemento no ínicio
        alunos.unshift('Ricardo');

    Valor editado
        alunos[0] = 'Eduardo'; *altera
        alunos[3] = 'Mônica'; *adicionando um elemento

    Remove do final (pode também salvar o elemento removido em uma variável)
        const removido = alunos.pop();
        console.log(removido); *mostra quem foi removido
        console.log(alunos);

    Remove do começo
        const removido = alunos.shift();
        console.log(removido); *mostra quem foi removido
        console.log(alunos);

    Remove sem alterar os índices
        delete alunos[1];

    Acessar um ídice que não existe
        console.log(alunos[50]);

    Fatiando
        console.log(alunos.slice(0, 3)); *positivo
        console.log(alunos.slice(0, -2)); *negativo
    
    Verfifica se estou realmente ultilizando Array
        console.log(alunos instanceof array);

    console.log(alunos);
    console.log(alunos[0]);
    console.log(alunos[2]);
*/