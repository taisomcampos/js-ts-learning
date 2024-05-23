const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Evento previnido.');
}); // para o envio do formulário