'use strict';

/**
 * textContent => Retorna o text COM formatações, mas sem os elementos html.
 * innerText => Retorna somente o texto, sem formatações ou elementos html.
 **/

const p = document.querySelector('p');

console.log(p.textContent);
console.log(p.innerText);

// n funcionam formatação de tag html, por exemplo, n da pra colocar um "<strong>" entre o texto que sera alterado

p.textContent = 'Gustavo';
p.innerText = 'Gustavo'