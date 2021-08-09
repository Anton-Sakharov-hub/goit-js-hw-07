//Используй массив объектов images для создания тегов img вложенных в li. 
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

// 1. Повторяю как работает insertAdjacentHTML(),
// 2. Создаю с помощью метода insertAdjacentHTML() разметку
// 3. Добавляю атрибуты к img
// 4. Добавляю на HTML страницу
// 5. Делаю стили для картинок


const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createGalleryMarkup = function (images) {
  const markup = images.reduce((string, item) => {
    return string + `<li><img src='${item.url}' alt='${item.alt}'></li>`
  }, '');

  const ulRefs = document.querySelector('#gallery');
  ulRefs.insertAdjacentHTML("afterbegin", markup);
};

createGalleryMarkup(images);


