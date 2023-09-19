


// Searching
const searching = (value) => {
    const searchResultConatainer = document.querySelector('.searchResult')
    const variants = {
        'Введение': `<p><a href="Introduction.html" class="result">Введение</a></p>`,
        'Авторы': `<p><a href="authors.html" class="result">Авторы</a></p>`,
        'Понятия': `<p><a href="concepts.html" class="result">Понятия</a></p>`,
        'Упражнения': `<p><a href="exercise.html" class="result">Упражнения</a></p>`,
        'Сравнение': `<p><a href="notFound.html" class="result">Сравнение</a></p>`,
        'Языки': `<p><a href="notFound.html" class="result">Языки</a></p>`,
    }

    const matchingValue = variants[value];

    if (matchingValue !== undefined) {
        searchResultConatainer.innerHTML = matchingValue
    }

    else {
        searchResultConatainer.innerHTML = '<p class="notFound">Ничего не найдено...</p>'
    }
}


// Show/hide
const showHideSearchContainer = () => {
    const container = document.querySelector('.searchResult');
    
    container.classList = 'searchResult'
    setTimeout(() => {
        if (!document.querySelector('.result')) {
            container.classList += ' hide'
        }
    }, 1000)
    
}


// Handler for searching
document.querySelector('.searchBar').addEventListener('input', (event) => {
    searching(event.target.value)
    showHideSearchContainer()
})