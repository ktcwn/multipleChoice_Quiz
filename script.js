var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
startButton.addEventListener('click', startQuiz)


function startQuiz() {
console.log('Started');
startButton.classList.add('hide')
questionContainerElement.classList.remove('hide')
}

function nextQuestion () {

}

function selectAnswer () {

}