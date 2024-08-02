'use strict';

const form = document.forms.namedItem('registration');

form.addEventListener('input', (event) => {
    event.preventDefault();

    const name = form.name.value;
    
    const newDivElement = document.createElement('div');
    newDivElement.textContent = name;

    // form.nextElementSibling.remove();
    form.after(newDivElement);
});