var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
startButton.addEventListener('click', startQuiz)


function startQuiz() {
console.log('Started');
startButton.classList.add('hide')
questionContainerElement.classList.remove('hide')
nextQuestion()
}

function nextQuestion () {

}

function selectAnswer () {

}

var questions = [
    {
        question: 'Common data types do NOT include:',
        answers: [
            {text: 'numbers', correct: false},
            {text: 'booleans', correct: false},
            {text: 'strings', correct: false},
            {text: 'curly brackets', correct: true}
        ]
    }
    {
        question: 'String values must be enclosed within:',
        answers: [
            {text: '{ }', correct: false},
            {text: '( )', correct: false},
            {text: ' " " ', correct: true},
            {text: ' : : ', correct: false}
        ]
    }
    {
        question: 'What are booleans?',
        answers: [
            {text: 'variables', correct: false},
            {text: 'true/false data type', correct: true},
            {text: 'CSS styling property', correct: false},
            {text: 'Indicates an ID', correct: false}
        ]
    }
    {
        question: 'What does || mean in JavaScript?',
        answers: [
            {text: 'equal to', correct: false},
            {text: 'or', correct: true},
            {text: 'and', correct: false},
            {text: 'if else', correct: false}
        ]
    }
    {
        question: 'How do you communicate with the console?',
        answers: [
            {text: 'console.log(" ")', correct: true},
            {text: '{Hello Console!}', correct: false},
            {text: 'var communicateWith = console;', correct: false},
            {text: 'What\'s a console?', correct: false}
        ]
    }
]