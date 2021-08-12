const inputRefs = document.querySelector('#validation-input');

const onInputLengthCheck = function (event) {
    const targetValueLength = event.target.value.length
    const inputDataLength = inputRefs.dataset.length

    inputRefs.classList.remove('valid', 'invlid')

    if (targetValueLength == inputDataLength) {
        inputRefs.classList = 'valid';
    } else {
        inputRefs.classList = 'invalid';
    }
}

inputRefs.addEventListener('blur', onInputLengthCheck)

