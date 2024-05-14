/*
    Entre 0 e 11 - Bomdia!
    Entre 12 e 17 - Boa tarde!
    Entre 18 e 23 - Boa noite!
*/

// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de if antes
// Posso ter vários else if's na checagem
// Só se pode ter um else na checagem

/*
    Exemplo 01
        const hora = 50;

        if (hora >= 0 && hora <= 11) {
            console.log('Bom dia!');
        } else if (hora >= 12 && hora <= 17) {
            console.log('Boa tarde!');
        } else if (hora >= 18 && hora <= 23) {
            console.log('Boa noite!');
        } else {
            console.log('[ERRO]');
        }
*/

const tenhoDinheiro = '';

if (tenhoDinheiro) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}