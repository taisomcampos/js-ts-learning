const pontuacaoUsuario = 1000;
const controleUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';

console.log(controleUsuario);

/*
    Isso seria a mesma coisa que no código acima, utilizando o operador ternário
        if (pontuacaoUsuario >= 1000) {
            console.log('Usuário VIP');
        } else {
            console.log('Usuário normal');
        }
*/