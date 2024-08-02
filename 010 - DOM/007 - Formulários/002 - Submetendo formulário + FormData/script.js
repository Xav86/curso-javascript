'use strict';

const form = document.forms.namedItem('registration');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.name.value;
    const password = form.password.value;

    // const formData = new FormData(form);
    const formData = new FormData();

        formData.set('name', name);
        formData.set('password', password);

        formData.has('name');
        formData.has('password');

        console.log(formData.get('name'));
        console.log(formData.get('password'));

        // DELETE

        formData.delete('name');
        console.log(formData.has('name'));

    // console.log(formData.get('name'));
    // if (formData.has('name') && formData.has('password')) {
    //     console.log(formData.get('name'));
    //     console.log(formData.get('password'));
    // }


    // formData.forEach(res => {
    //     console.log(res);
    // });

    // if (name && password) {
    //     console.log(name, password);
    
    //     form.submit();
    // }

});