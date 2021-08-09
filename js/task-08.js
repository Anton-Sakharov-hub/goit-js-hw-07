// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// 1. Привязую инпут к событию нажатия кнопки. Когла пользователь нажимает кнопку, создаетя событие
// создание блока в том количестве в токором указан в inpute (доступ к значению ввода пользователем)

// 2. Функция делает блоки по нарастающей начиная с исходного 30px на 30px и случаного цвета,
// который генерирую Math.random() и умножаю на 6 цифр, чтобы получить значение цвета в #fex

// 3. Блоки создаю через цикл for, где количество итераций определяет значение с инпута
// и на каждой итерации создаетя блок. 
// создаю переменную width и height, у которых базовое значение 30 и на каждой итерации добавляется 10

const inputRefs = document.querySelector('input[type="number"]');
const buttonRenderBoxesRefs = document.querySelector('button[data-action="render"]');
const buttonDestroyBoxesRefs = document.querySelector('button[data-action="destroy"]');
const parentContainerBoxesRefs = document.querySelector("#boxes")

let inputValue;

const getInputValue = function (event) {
    inputValue = event.currentTarget.value;
}

const onButtonCreateBoxesHandler = function () {
    let value = 30;
    const allBoxes = [];

    parentContainerBoxesRefs.innerHTML = '';

    for (let i = 0; i < inputValue; i += 1) {
        const getRandomNumber = function () {
            const MIN = 0;
            const MAX = 256;
            const min = Math.ceil(MIN);
            const max = Math.floor(MAX);
            const randomNum = Math.floor(Math.random() * (max - min)) + min

            return randomNum;
        };

        const rgb = [getRandomNumber(), getRandomNumber(), getRandomNumber()];

        const divRefs = document.createElement('div');
        divRefs.style.width = `${value}px`;
        divRefs.style.height = `${value}px`;
        divRefs.style.marginBottom = '10px';
        divRefs.style.backgroundColor = `rgb(${rgb.join(', ')})`;
        allBoxes.push(divRefs);

        value += 10;
    }

    return parentContainerBoxesRefs.append(...allBoxes);
}

const onButtonRemoveBoxesHandler = function () { 
    parentContainerBoxesRefs.innerHTML = '';
} 

inputRefs.addEventListener('input', getInputValue)
buttonRenderBoxesRefs.addEventListener('click', onButtonCreateBoxesHandler)
buttonDestroyBoxesRefs.addEventListener('click', onButtonRemoveBoxesHandler)

