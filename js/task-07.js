const inputRefs = document.querySelector("#font-size-control");
const spanRefs = document.querySelector('#text')


const onInputChange = function (event) {
    console.log(event.currentTarget.value);
    spanRefs.style.fontSize = `${event.currentTarget.value * 0.6}px`
}

inputRefs.addEventListener('change', onInputChange);