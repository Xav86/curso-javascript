'use strict';

/**
 * innerHtml => Retorna o texto, COM formatações e COM elementos html.
 * createElement => Cria um elemento HTML
 */

const div = document.querySelector('div');
// console.log(1, div);

// // div.innerHTML += `${div.innerHTML}+<strong>Este é meu texto alterado</strong>`;
// div.innerHTML += '<strong>Este é meu texto alterado</strong>';
// console.log(2, div);

//teste (funcional)
// const elementUl = document.createElement('ul');
// const elementLi = document.createElement('li');

// elementLi.textContent = 'Texto legal!';

// elementUl.appendChild(elementLi);
// div.appendChild(elementUl);


// console.log(elementUl);

const elementUl = document.createElement('ul');
console.log(elementUl);

[1,2,3].forEach( (element) => {
    const elementLi = document.createElement('li');
    elementLi.textContent = element;
    elementUl.appendChild(elementLi);
});

div.appendChild(elementUl);