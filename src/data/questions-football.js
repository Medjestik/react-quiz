const questionsFootball = [
    {
        questionType: 'single-answer',
        questionText: 'В какой стране, и в каком городе проходил Финал Клубного чемпионата мира 2019?',
        answerOptions: [
            { answerText: 'Иокогама (Япония)', isCorrect: false },
            { answerText: 'Абу-Даби (ОАЭ)', isCorrect: false },
            { answerText: 'Лондон (Англия)', isCorrect: false },
            { answerText: 'Доха (Катар)', isCorrect: true },
        ],
        answerReceived: false,
        userAnswer: '',
        answerCorrect: false,
    },
    {
        questionType: 'multi-answer',
        questionText: 'Кто из игроков никогда не получал золотой мяч?',
        answerOptions: [
            { answerText: 'Дэвид Бекхэм', isCorrect: true },
            { answerText: 'Лука Модрич', isCorrect: false },
            { answerText: 'Златан Ибрагимович', isCorrect: true },
            { answerText: 'Луиш Фигу', isCorrect: false },
            { answerText: 'Тьери Анри', isCorrect: true },
        ],
        answerReceived: false,
        userAnswer: [],
        answerCorrect: false,
    },
    {
        questionType: 'sequence',
        questionText: 'Расположите команды в порядке убывания количества выигранных кубков лиги чемпионов',
        answers: {
            'answer-1': { id: 'answer-1', text: 'Милан', },
            'answer-2': { id: 'answer-2', text: 'Бавария', },
            'answer-3': { id: 'answer-3', text: 'Барселона', },
            'answer-4': { id: 'answer-4', text: 'Реал Мадрид', },
            'answer-5': { id: 'answer-5', text: 'Ливерпуль', },
        },
        longestAnswer: 11,
        rightAnswers: ['answer-4', 'answer-1', 'answer-2', 'answer-5', 'answer-3'],
        answerReceived: false,
        userAnswer: [],
        answerCorrect: false,
        column: {
            id: 'column-1',
            answerIds: ['answer-1', 'answer-2', 'answer-3', 'answer-4', 'answer-5'],
        },
    },
    {
        questionType: 'match',
        questionText: 'Соотнесите страну и игрока',
        matchedWords: ['Бразилия', 'Аргентина', 'Португалия', 'Уругвай'],
        answers: {
            'answer-1': { id: 'answer-1', text: 'Луис Суарез', },
            'answer-2': { id: 'answer-2', text: 'Криштиано Роналду', },
            'answer-3': { id: 'answer-3', text: 'Неймар', },
            'answer-4': { id: 'answer-4', text: 'Лионель Месси', },
        },
        longestAnswer: 79,
        rightAnswers: ['answer-3', 'answer-4', 'answer-2', 'answer-1'],
        answerReceived: false,
        userAnswer: [],
        answerCorrect: false,
        column: {
            id: 'column-1',
            answerIds: ['answer-1', 'answer-2', 'answer-3', 'answer-4'],
        },
    },
    {
        questionType: 'open-answer',
        questionText: 'В каком году сборная испании стала победителем чемпионата мира?',
        answerOptions: ['2010'],
        answerReceived: false,
        userAnswer: '',
        answerCorrect: false,
    },
];

export default questionsFootball;