const spanRefs = document.querySelector("#value");
let counterValue = 0;

const incBtn = document.querySelector('button[data-action="increment"]');
const decBtn = document.querySelector('button[data-action="decrement"]');


const  onButtonIncrement = function () {
    counterValue += 1;
    spanRefs.innerHTML = `${counterValue}`;
    console.log(spanRefs.textContent);
};

const onButtonDecrement = function () {
    counterValue -= 1;
    spanRefs.innerHTML = `${counterValue}`;
    console.log(spanRefs.textContent);
};

incBtn.addEventListener('click', onButtonIncrement);
decBtn.addEventListener('click', onButtonDecrement);

