
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

// 1. С помощью map перебраю массив ingredients и создаю на его основе массив элементов li
// с соответсвующим текстовым значением 
// 2. Добавляю с помощью append() все li расспылив их как аргуметы в метод append(...arg)

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const getLiElementsFromTextArray = function (ingredients) {
    // return array.map(ingredient => document.createElement('li').textContent = ingredient)

    return ingredients.map(ingredient => {
    const liEl = document.createElement('li');
    liEl.textContent = ingredient;

      return liEl;
  });
}


const ingredientsListEl = document.querySelector('#ingredients');
ingredientsListEl.append(...getLiElementsFromTextArray(ingredients))