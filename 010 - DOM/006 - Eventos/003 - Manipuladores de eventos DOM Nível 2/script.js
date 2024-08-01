'use strict';

const btn = document.querySelector('button');

// btn.addEventListener('click', (event) => {
//     console.log(event);
//     console.log(event.clientX, event.clientY);
//     alert(123);
// });

btn.addEventListener('click', (event) => {
    document.querySelector('body').style.background = '#f0f0f0';
});

btn.addEventListener('mouseover', (event) => {
    document.querySelector('body').style.background = 'white';
});

btn.addEventListener('mouseleave', (event) => {
    document.querySelector('body').style.background = 'black';
});