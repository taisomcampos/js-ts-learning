function meuFormulario() {
    const formulario = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

    const criaPessoas = [];

    function recebeEventoFormulario(evento) {
        evento.preventDefault(evento);

        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');

        criaPessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(criaPessoas);
        resultado.innerHTML += `<p><strong>Nome:</strong> ${nome.value} </br> <strong>Sobrenome:</strong> ${sobrenome.value} </br> <strong>Peso:</strong> ${peso.value} Kg </br> <strong>Altura:</strong> ${altura.value} Mts</br></p>`;
    }
    formulario.addEventListener('submit', recebeEventoFormulario);
}
meuFormulario()