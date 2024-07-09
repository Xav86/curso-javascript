'use strict';

const div = document.querySelector('div');

div.setAttribute('id', 'teeeeste');

div.setAttribute('class',`${div.getAttribute('class')} active`);
div.setAttribute('class',`${div.getAttribute('class')} background-red`);

div.removeAttribute('class');

console.log(div);