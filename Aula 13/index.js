// Exercício: de forma não literal, tentar trocar os valores das váriaveis.

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let a = varB;
let b = varC;
let c = varA;

console.log(a, b, c);

/*
[1ª] Resposta do professor:

    const varATemp = varA;
    varA = varB;
    varB = varC;
    varC = varATemp;

[2ª] Resposta do professor: 
    
    [varA, varB, varC] = [varB, varC, varA];

    * O professor utilizou a técnica de atribuição múltipla para trocar os valores entre as variáveis.

    * Ele criou um array com os valores das variáveis na ordem desejada, então não sei se minha resposta está correta.
*/



