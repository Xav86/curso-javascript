'use strict';

const container = document.querySelector('.container');

// container.append('<h1>Bom dia!</h1>');

const newDiv = document.createElement('div');

newDiv.textContent = 'Bom dia!';

container.appendChild(newDiv);