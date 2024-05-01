function meuEscopo() {
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>Nome: ${nome.value} </br> Sobrenome: ${sobrenome.value} </br> Peso: ${peso.value} Kg </br> Altura: ${altura.value} Mts</p>`
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();

// .value
// Criar um objeto e colocar dentro de um aray
// Fazer console.log dentro no array pra verificar quais foram os objetos colocados dentro do array
// Adicionar o que foi enviado na div de resultado