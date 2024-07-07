import questions from './questions.js';

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const questionNumberElement = document.getElementById('question-number');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    nextButton.disabled = true;
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    questionNumberElement.innerHTML = `${currentQuestionIndex + 1}/${questions.length}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    nextButton.disabled = true;
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('wrong');
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct) {
            button.classList.add('correct');
        }
        button.removeEventListener('click', selectAnswer);
    });
    nextButton.style.display = 'block';
    nextButton.disabled = false;
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You answered correctly ${score} out of ${questions.length} questions!`;
    questionNumberElement.innerHTML = '';
    nextButton.innerHTML = 'Restart';
    nextButton.style.display = 'block';
    nextButton.disabled = false;
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
