/* 
    FALSY
        false (no caso o valor literal)
        0
        '' "" ``
        null / undefined
        NaN

    Exemplo 01  (&&)  
        function falaOi() {
            return 'Oi!';
        }

        let vaiExecutar = 'false';

        console.log(vaiExecutar && falaOi());

    Exemplo 02 (||)
        const corUsuario = null;
        const corPadrao = corUsuario || 'preto';

        console.log(corPadrao);

    Exemplo 03 (||)
        const a = 0;
        const b = null;
        const c = 'false'; // esse é o que foi exibido
        const d = false;
        const e = NaN;

        console.log(a || b || c || d || e);
*/