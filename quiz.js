function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
};

Quiz.prototype.getQuestionByIndex = function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.checkOptionWithAnswer = function(answer){

    if(this.getQuestionByIndex().isCorrectAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;

}

Quiz.prototype.isFinished = function(){
    return this.questionIndex === this.questions.length;
}

Question.prototype.isCorrectAnswer= function(choice){
    return this.answer === choice;
}

function Question(text, choices, answer){
    this.text= text;
    this.choices = choices;
    this.answer =answer;
}

function showScores(){
 
    var quizElement = document.getElementById("quiz");
    var resPercentage = (quiz.score / questions.length) * 100;
    quizElement.innerHTML = `<h1> Result </h1>
        <h2 id ='score'> Your score is ${quiz.score} and percentage is ${resPercentage}% </h2>`;

}

function loadQuestions(){
    if(quiz.isFinished()){
        showScores();
    }else{
        var questionElement = document.getElementById("question");
        var  questionLoaded = quiz.getQuestionByIndex();

        questionElement.innerHTML = questionLoaded.text;

        var choices = questionLoaded.choices;
      
        var choices = questionLoaded.choices;
        for (let idx = 0; idx < choices.length; idx++) {
            var choiceElement = document.getElementById("choice" + idx);
            choiceElement.innerHTML = choices[idx];

            var btnElement = document.getElementById("btn" + idx);
            btnElement.onclick = () => {
                quiz.checkOptionWithAnswer(choices[idx]);
                loadQuestions();
            };
        }
        showProgress();
    }
}

function showProgress(){
    var progressElement = document.getElementById("progress");
    var currQuestionIndex = quiz.questionIndex+1;
    progressElement.innerHTML = `Question ${currQuestionIndex} of ${quiz.questions.length}`;

}

var questions = [
  new Question(
    "Who is the best Batsmen in India?",
    ["Virat", "Rahul", "Dhawan", "Rishabh"],
    "Virat"
  ),
  new Question(
    "Which language got maximum follwers?",
    ["JavaScript", "Java", "Python", "Go"],
    "JavaScript"
  ),
  new Question(
    "What is the national animal of India?",
    ["Tiger", "Lion", "Elephant", "Cheetah"],
    "Tiger"
  ),
  new Question(
    "Which of the following is used in pencil?",
    ["Graphite", "Magnesium", "Iron", "Calcium"],
    "Graphite"
  ),
  new Question(
    "Which company acquired GL?",
    ["Upgrad", "Byjus", "Udemy", "Calcium"],
    "Byjus"
  ),

  new Question(
    "What does JSON stand for ?",
    [
      "Java Simple Object Notation",
      "JavaScript Object Notation",
      "Java Semi Object Notation",
      "None of the above",
    ],
    "JavaScript Object Notation"
  )
];

var quiz = new Quiz(questions);
loadQuestions();