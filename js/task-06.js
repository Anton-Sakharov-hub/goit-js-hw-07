const inputRefs = document.querySelector('#validation-input');

const onInputLengthCheck = function (event) {
console.log(event.currentTarget.value.length);

    if (event.currentTarget.value.length <= inputRefs.dataset.length) {
        inputRefs.classList = 'valid';
    } else {
        inputRefs.classList = 'invalid';
    }
}

inputRefs.addEventListener('blur', onInputLengthCheck)