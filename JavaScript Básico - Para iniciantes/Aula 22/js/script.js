function meuEscopo() {
    const formulario = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEnventoForm(evento) {
        evento.preventDefault();

        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);
        resultado.innerHTML += `<p><strong>Nome:</strong> ${nome.value} </br> <strong>Sobrenome:</strong> ${sobrenome.value} </br> <strong>Peso:</strong> ${peso.value} kg </br> <strong>Altura:</strong> ${altura.value} mts</p>`;
    }

    formulario.addEventListener('submit', recebeEnventoForm);
}

meuEscopo()