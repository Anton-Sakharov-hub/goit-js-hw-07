const inputRefs = document.querySelector('#name-input');
const spanRefs = document.querySelector('#name-output');


const onInputChange = function (event) {
    if (inputRefs.value !== '') {
        spanRefs.textContent = event.currentTarget.value;
    } else {
        spanRefs.textContent = 'незнакомец';
    };
}

inputRefs.addEventListener('input', onInputChange);