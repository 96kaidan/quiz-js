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
        question: 'Which of these characters are friends with Harry Potter?',
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

export default questions;
