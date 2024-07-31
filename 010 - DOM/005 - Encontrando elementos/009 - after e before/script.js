'use strict';

const container = document.querySelector('.container');

const newP = document.createElement('p');
newP.textContent = 'Bom dia'

// container.after(newP);
container.before(newP);