const currentDate = new Date();
alert(`Текущее время: ${currentDate}`);

setTimeout(() => {
    const styles = `
    body {
        margin: 0;
        overflow: hidden;
    }

    #overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        visibility: hidden;
    }

    #popup {
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
    }

    #battery {
        width: 50px;
        height: 80px;
        background: #ddd;
        position: relative;
        overflow: hidden;
    }

    #charge {
        width: 100%;
        background: red;
        position: absolute;
        bottom: 0;
        animation: chargeAnimation 2s linear infinite;
    }

    #close {
        margin-top: 20px;
        cursor: pointer;
        color: #4CAF50;
    }

    @keyframes chargeAnimation {
        0%, 100% {
            height: 0;
        }
        50% {
            height: 100%;
        }
    }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);

    const overlay = document.createElement('div');
    overlay.id = 'overlay';

    const popup = document.createElement('div');
    popup.id = 'popup';

    const battery = document.createElement('div');
    battery.id = 'battery';

    const charge = document.createElement('div');
    charge.id = 'charge';

    const close = document.createElement('div');
    close.id = 'close';
    close.textContent = 'Устройство разряжено';
    close.onclick = closePopup;

    battery.appendChild(charge);
    popup.appendChild(battery);
    popup.appendChild(close);
    overlay.appendChild(popup);

    document.body.appendChild(overlay);

    function openPopup() {
        overlay.style.visibility = 'visible';
    }

    function closePopup() {
        overlay.style.visibility = 'hidden';
    }

    openPopup();
}, 3000)





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