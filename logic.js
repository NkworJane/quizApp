const startButton = document.querySelector("#startBtn")
const nextButton = document.querySelector("#nextBtn")
const displayQuetions = document.querySelector("#questionsBody")
const questionElement = document.querySelector("#questions")
const chooseOptions = document.querySelector("#answerBtns")
const scoreCounterContainer = document.querySelector("#scoreCounter")
let bodyContainer = document.querySelector(".container")

let randomQuestions, currentQuestion
let score = 0;

startButton.addEventListener('click',startQuiz)
nextButton.addEventListener('click', () =>{
    currentQuestion++
    nextQuestion()
    
})


function startQuiz(){
    startButton.classList.add('hide')
    randomQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestion = 0
    displayQuetions.classList.remove('hide')
    nextQuestion()
}

function nextQuestion(){
    resetState()
    showQuestion(randomQuestions[currentQuestion])
    
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.options.forEach(option => {
       const optionButton = document.createElement('button') 
       optionButton.innerText = option.option
       optionButton.classList.add('button')
       if(option.correct){
           optionButton.dataset.correct = option.correct
           
       }
       optionButton.addEventListener('click',selectOptions)
       chooseOptions.appendChild(optionButton)
      
    });
}

function resetState(){
    clearStatus(document.body)
    nextButton.classList.add('hide')
    while(chooseOptions.firstChild){
        chooseOptions.removeChild(chooseOptions.firstChild)
    }

}

function selectOptions(e){
    const selectedOption = e.target
    const correct = selectedOption.dataset.correct
    setStatus(document.body, correct)
    Array.from(chooseOptions.children).forEach(button => {
        setStatus(button, button.dataset.correct)
        
    })
    if(randomQuestions.length > currentQuestion + 1){
        nextButton.classList.remove('hide')
        score++
        scoreCounter.classList.remove('hide')
    }else{
        bodyContainer.innerText =  `Game Over, you scored ${score} out of 5`
        //startButton.innerHTML = "Restart"
        //startButton.classList.remove('hide') 
    }
  
}

function setStatus(element, correct) {
    clearStatus(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')       
    }
}

function clearStatus(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
    
}


// function getScore(){
//     let score = 0
//     for(let i = 0; i>=questions.length;i++){
//         if()
//     }
// }

// function showScore(){

// }

const questions = [
    {
        question: "What year did Nigeria gain Independence?",
        options:[
            {option: "1988", correct:false},
            {option: "1900", correct:false},
            {option: "1960", correct:true},
            {option: "2020", correct:false}
        ]
    },
    {
        question: "What is Mark Zuckerberg known for?",
        options:[
            {option: "Facebook", correct:true},
            {option: "Electric Cars", correct:false},
            {option: "Footballer", correct:false},
            {option: "Actor", correct:false}
        ]
    },
    {
        question: "How many states are in Nigeria?",
        options:[
            {option: "36", correct:true},
            {option: "37", correct:false},
            {option: "15", correct:false},
            {option: "25", correct:false}
        ]
    },
    {
        question: "What day is Democracy Day?",
        options:[
            {option: "Dec 25", correct:false},
            {option: "May 29", correct:true},
            {option: "May 1", correct:false},
            {option: "April 1", correct:false}
        ]
    },
    {
        question: "What is Nigeria's Dialing Code",
        options:[
            {option: "235", correct:false},
            {option: "233", correct:false},
            {option: "258", correct:false},
            {option: "234", correct:true}
        ]
    }
]

