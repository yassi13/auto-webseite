let score = 0;//Interger
let currentQuestionIndex = 0;



let questions = [
  {

  
    question: "was ist die Hauptstadt von Deutschland ? ",
    //         0          1      2         3     
    answers: ["Paris", "London","Berlin","Madried"], // Das sind arrays arrays haben immer 4 werte 
    // Achtung der roboter fängt ab 0 an zu Zählen nicht ab 1
    correctAnswer: 2

  
  },
   {
    question: " welches Auto ist mein yassins Traum Auto  ? ",  
    answers: ["Mercedes Maybach", "Mercedes G KLasse","Bugatti chiron ","Bmw m5cs"], 
    correctAnswer: 3
  
  },
   {
    question: "Wie veil Push ups Schafft yassin ? ",
    answer: ["10", "15","30","100"], 
    correctAnswer: 2
  
  },
   {
    question: "welche Frabe hat eine Zitrone ? ",    
    answers: ["schwarz", "blau","grün","gelb"], 
    correctAnswer: 3
  
  },
];

//function defeniert eine function
function displayQuestion(){

  if(currentQuestionIndex >= questions.length){// Damit wollen wir die person bescheid geben das sie 

    document.getElementById('quiz-container').hidden = true;
    document.getElementById('result').hidden = false;
    document.getElementById('score').textContent= score;
    return; // return wird nur aufgerufen wenn es keine fragen mehr gibt

  }



  let question = questions[currentQuestionIndex];


  document.getElementById('question').textContent = question.question; // das .question ist die proberty question 
  
  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = ""; // das bedeutet das die alten antworten gelöcht werden 

  question.answers.forEach((answer, index) => {
    let answerButton = document.createElement('button');
    answerButton.classList.add("btn","btn-dark", "me-2");
    answerButton.textContent = answer;
    answerButton.onclick = () => checkAnswer(index);
    answersDiv.appendChild(answerButton);

  });
}
displayQuestion();

function checkAnswer(userAnswer){
  let correctAnswer = questions[currentQuestionIndex].correctAnswer;

  if(userAnswer == correctAnswer){
    score += 1;
  }

  nextQuestion();//* gehört auch dazu 
}

function nextQuestion(){      //* wenn die frage fertig ist und die person geantwortet hat kann er durch diese änderung auf nächste frage klicken 
  currentQuestionIndex += 1;
  displayQuestion();
}


// das habe ich gemacht damit der questions[curentquestionIndex]; auf null ist also die person hat null punkte 
//document.getElementById das macht mann wenn man einen HtML element holen möchte
//question.answers habe ich nicht richtig gecheckt also frage ich einfach Denys
// aber zu question.anwers haben wir einen let anwerButton gemacht damit wir für jede antwort einen button kriegen 
// appendChild bedeutet füge was neues hinzu
// ganz wichtig dieses code let anwer packet bedeutet diese änderungen gälten für jede answer
// mit if statement (user.....)möchten wir sagen wenn der person die richtige antwort hat kriegt er einen punkt 
// mit answerButton.onclick = () => checkAnswer(index); diesen befehl sagen wir das wenn dieperson auf dem button clickt das da was passiert 





