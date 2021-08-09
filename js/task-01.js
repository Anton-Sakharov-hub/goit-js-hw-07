const getListLog = function() {
    const categoriesList = document.querySelectorAll('#categories > li')
    console.log(`В списке ${categoriesList.length} категории`);

    categoriesList.forEach(el => {
        console.log(`Категория: ${el.querySelector('h2').textContent}`)
        console.log('количество элементов:', el.querySelectorAll('li').length)
    });
};

getListLog();
