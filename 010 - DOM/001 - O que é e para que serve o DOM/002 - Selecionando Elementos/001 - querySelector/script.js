'use strict';

const h1 = document.querySelector('h1'); // TAG HTML5
const classP = document.querySelector('.paragrafo strong');
const idP = document.querySelector('#paragrafo');

console.log(h1);
console.log(classP);
console.log(idP);

let timer = 0;
const title = document.querySelector('title');

setInterval(() => {
    title.innerText = timer;
    timer++;
}, 1000);


const count = document.querySelector('#count');
const h2 = document.querySelector('h2');
setTimeout(() => {
    count.innerText = 'Contando'
}, 1500);

let timer2 = 0
setInterval(() => {
    h2.innerText = timer2
    timer2++;
    if(timer2 === 15) {
        h2.innerText = 'Contagem concluida, reinicie a pagina para contar novamente';
    }
}, 1500);
