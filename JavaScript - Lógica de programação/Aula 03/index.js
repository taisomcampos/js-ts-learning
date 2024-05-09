/* 
    FALSY
        false (no caso o valor literal)
        0
        '' "" ``
        null / undefined
        NaN
*/

/*
function falaOi() {
    return 'oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());
*/

/*
const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);
*/

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN; // #

console.log(a || b || c || d || e);