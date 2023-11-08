const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },

    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Which of the operator is used to test if a particular property exists or not?",
        a: "in",
        b: "exist",
        c: "within",
        d: "exists",
        correct: "a",
    },
    {
        question: "Which of the following Attribute is used to include External JS code inside your HTML Document ?",
        a: "link",
        b: "script",
        c: "ext",
        d: "src",
        correct: "d",
    },
    {
        question:"A proper scripting language is a __________",
        a: "High level programming language",
        b: "Assembly level programming language",
        c: "Machine level programming language",
        d: "Low level programming language",
        correct: "a",
    },
    {
        question:"JavaScript Code can be called by using ___________",
        a: "RMI",
        b: "Triggering Event",
        c: "Preprocessor",
        d: "Function/Method",
        correct: "d",
    },
    {
        question:"Which of the following can be used to call a JavaScript Code Snippet?",
        a: "Function/Method",
        b: "Preprocessor",
        c: "Triggering Event",
        d: "RMI",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    for (let i = 0; i < answerEls.length; i++) {
        answerEls[i].id = String.fromCharCode(97 + i);
        answerEls[i].checked = false;
        answerEls[i].nextElementSibling.innerText = currentQuizData[answerEls[i].id];
    }
}

function getSelected() {
    return Array.from(answerEls).find((answerEl) => answerEl.checked)?.id;
}

function updateScore(answer) {
    if (answer === quizData[currentQuiz].correct) {
        score++;
    }
}

function showResult() {
    quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly.</h2>
                      <button onclick="location.reload()">Reload</button>`;
}

function handleQuizSubmission() {
    const answer = getSelected();
    if (answer) {
        updateScore(answer);
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {    
            showResult();
        }
    }

}


submitBtn.addEventListener("click", handleQuizSubmission);

loadQuiz();