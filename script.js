
// Variables
var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn') 
var questionContainerElement = document.getElementById('question-container')
var shuffleQuestions, currentQuestion
var questionEl = document.getElementById('question')
var answerButtons = document.getElementById('answer-buttons')


// Event Listeners
startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestion++
    nextQuestion
})

// Function ot start quiz and shuffle questions at random
function startQuiz() {
console.log('Started');
startButton.classList.add('hide')
shuffleQuestions = questions.sort(() => Math.random() - .5)
currentQuestion = 0
questionContainerElement.classList.remove('hide')
nextQuestion()
}

//Function to toggle next question
function nextQuestion () {
    showQuestion(shuffleQuestions[currentQuestion])
    resetQuestion()

}

//Function to show possible answers with questions
function showQuestion(question) {
    questionEl.innerText = question.question
    questionEl.answers.forEach(answers => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answers.correct) {
            button.dataset.correct = answers.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}


// Function to reset question when going to the next question in quiz
function resetQuestion() {
    startButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild (answerButtonsElement.firstChild)
    }}


    // Function for user to select their answer
function selectAnswer () {
 var selectedButton = e.target
 var correct = selectedButton.dataset.correct
 setStatusClass(document.body, correct)
 Array.from(answerButtonsElement.children).forEach(button => {
     setStatusClass(button, button.dataset.correct)
 })
 nextButton.classList.remove('hide')
}


// Questions and Answers as objects in an array
var questions = [
    {
        question: 'Common data types do NOT include:',
        answers: [
            {text: 'numbers', correct: false},
            {text: 'booleans', correct: false},
            {text: 'strings', correct: false},
            {text: 'curly brackets', correct: true}
        ]
    
    },
       { 
        question: 'String values must be enclosed within:',
        answers: [
            {text: '{ }', correct: false},
            {text: '( )', correct: false},
            {text: ' " " ', correct: true},
            {text: ' : : ', correct: false}
        ]
       },
       {
        question: 'What are booleans?',
        answers: [
            {text: 'variables', correct: false},
            {text: 'true/false data type', correct: true},
            {text: 'CSS styling property', correct: false},
            {text: 'Indicates an ID', correct: false}
        ]
       },
    {
        question: 'What does || mean in JavaScript?',
        answers: [
            {text: 'equal to', correct: false},
            {text: 'or', correct: true},
            {text: 'and', correct: false},
            {text: 'if else', correct: false}
        ]
    },
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