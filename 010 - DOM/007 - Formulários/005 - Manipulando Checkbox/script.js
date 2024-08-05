'use strict';

const form = document.forms.namedItem('select-checkbox');
const submit = document.querySelector('#submit');
const change = document.querySelector('#change');

let checkedValues = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    submit.innerHTML = checkedValues;
});

form.checkbox.forEach((element) => {
    element.addEventListener('change', (event) => {
        hasCheckd(event, element);
        change.innerHTML = checkedValues;
    });
});

const hasCheckd = (event, element) => {
    const { target } = event;
    
    if (target.checked) {
        checkedValues.push(element.value);
    } else if (!target.checked) {
        return checkedValues.map((checkedValue, index) => {
            if (element.value === checkedValue) {
                return checkedValues.splice(index, 1);
            }
        });
    }
};