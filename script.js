const questions = [
    {
        question: 'How many planets are in the solar system?',
        answers: [
            { text: '8', correct: true },
            { text: '9', correct: false },
            { text: '10', correct: false },
            { text: '7', correct: false }
        ]
    },
    {
        question: 'What is the freezing point of water?',
        answers: [
            { text: '0', correct: true },
            { text: '-5', correct: false },
            { text: '-6', correct: false },
            { text: '10', correct: false }
        ]
    },
    {
        question: 'What is the longest river in the world?',
        answers: [
            { text: 'Nile', correct: true },
            { text: 'Amazon', correct: false },
            { text: 'Yangtze', correct: false },
            { text: 'Mississippi', correct: false }
        ]
    },
    {
        question: 'How many chromosomes are in the human genome?',
        answers: [
            { text: '42', correct: false },
            { text: '44', correct: false },
            { text: '46', correct: true },
            { text: '48', correct: false }
        ]
    },
    {
        question: 'Which of these characters are friends with Harry Potter? (select both)',
        answers: [
            { text: 'Ron Weasley', correct: true },
            { text: 'Draco Malfoy', correct: false },
            { text: 'Hermione Granger', correct: true },
            { text: 'Severus Snape', correct: false }
        ]
    },
    {
        question: 'What is the capital of Canada?',
        answers: [
            { text: 'Toronto', correct: false },
            { text: 'Ottawa', correct: true },
            { text: 'Vancouver', correct: false },
            { text: 'Montreal', correct: false }
        ]
    },
    {
        question: 'What is the Jewish New Year called?',
        answers: [
            { text: 'Hanukkah', correct: false },
            { text: 'Yom Kippur', correct: false },
            { text: 'Kwanzaa', correct: false },
            { text: 'Rosh Hashanah', correct: true }
        ]
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        answers: [
            { text: 'William Shakespeare', correct: true },
            { text: 'Charles Dickens', correct: false },
            { text: 'Mark Twain', correct: false },
            { text: 'Jane Austen', correct: false }
        ]
    },
    {
        question: 'What is the largest ocean on Earth?',
        answers: [
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Indian Ocean', correct: false },
            { text: 'Arctic Ocean', correct: false },
            { text: 'Pacific Ocean', correct: true }
        ]
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: [
            { text: 'Vincent van Gogh', correct: false },
            { text: 'Leonardo da Vinci', correct: true },
            { text: 'Pablo Picasso', correct: false },
            { text: 'Michelangelo', correct: false }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const questionNumberElement = document.getElementById('question-number');

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswersCount = 0;
let correctAnswersCount = 0;

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

    correctAnswersCount = currentQuestion.answers.filter(answer => answer.correct).length;
    selectedAnswersCount = 0;
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
    } else {
        selectedButton.classList.add('wrong');
    }

    selectedButton.removeEventListener('click', selectAnswer);
    selectedAnswersCount++;

    if (selectedAnswersCount >= correctAnswersCount) {
        Array.from(answerButtonsElement.children).forEach(button => {
            button.disabled = true;
        });
        nextButton.style.display = 'block';
        nextButton.disabled = false;
    }
}

function handleNextButton() {
    if (checkAllCorrectSelected()) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function checkAllCorrectSelected() {
    const correctAnswers = questions[currentQuestionIndex].answers.filter(answer => answer.correct);
    const selectedCorrectAnswers = Array.from(answerButtonsElement.children).filter(button => button.classList.contains('correct')).length;
    const selectedWrongAnswers = Array.from(answerButtonsElement.children).filter(button => button.classList.contains('wrong')).length;

    // Ensure no wrong answers selected and all correct answers selected
    return selectedWrongAnswers === 0 && selectedCorrectAnswers === correctAnswers.length;
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You answered correctly ${score} out of ${questions.length} questions!`;
    questionNumberElement.innerHTML = '';
    nextButton.innerHTML = 'Restart';
    nextButton.style.display = 'block';
    nextButton.disabled = false;
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
