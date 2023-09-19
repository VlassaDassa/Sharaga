

// Answers for first exercise
const answersForOneExercise = () => {
    const circles = document.querySelectorAll('.circle')
    circles[0].classList += ' greenFill'
    circles[1].classList += ' redFill'
}

// Handler for first exercise
const images = document.querySelectorAll('.imgOneWrapper');
Array.from(images).forEach(element => {
    element.addEventListener('click', () => {
        answersForOneExercise()
    })
})


// Answers for second exercise
const answersForSecondExercise = () => {
    const answers = document.querySelectorAll('.answerCircle')
    Array.from(answers).forEach((element, index) => {
        if (index !== 0) {
            element.classList += ' redFill'
        }
    })

    answers[0].classList += ' greenFill'
}


// Hander for second exercise
const answers = document.querySelectorAll('.answer')
Array.from(answers).forEach(element => {
    element.addEventListener('click', () => {
        answersForSecondExercise()
    })
})
 