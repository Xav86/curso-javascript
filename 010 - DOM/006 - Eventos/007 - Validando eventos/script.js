'use strict';

const menu = document.querySelector('#menu');

menu?.addEventListener('click', (event) => {
    const { target } = event;
    const body = document.querySelector('body');

    switch (target.getAttribute('class')) {
        case 'home':
            console.log('home');
            body.style.background = 'blue';
            break;
        case 'sobre':
            console.log('sobre');
            body.style.background = 'red';
            break;

        case 'contato':
            console.log('contato');
            body.style.background = '#fff';
            break;
    
        default:
            break;
    }
});