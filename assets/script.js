var questionDiv = document.querySelector("#question");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".center");
var timer;
var timerCount;
var right ;
var wrong ;

var questions = [
  {
    prompt: "What does HTML stand for?",
    options: ["Hot Tamale", "Home Tool Markup Language", "HyperLinks and Text Markup Language", "Hyper Text Markup Language"],
    answer: "Hyper Text Markup Language",
  },
  {
    prompt: "What does CSS stand for?",
    options: ["Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets",
  },
  {
    prompt: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<scripting>", "<javascript>", "<js>"],
    answer: "<script>",
  },
  {
    prompt: "The Boostrap grid system works across multiple platforms.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    prompt: "Which sign does jQuery use as a shortcut for jQuery?",
    options: ["The % sign", "The $ sign", "The & sign", "The @ sign"],
    answer: "The $ sign",
  }
];

var questionIdx = 0;

function handleOptionClick(event) {
  // IF user clicked an answer-btn
  if (event.target.matches(".answer-btn")) {
    alert(event.target.dataset.answer === "1");
    questionIdx += 1;
    showQuestion();
  }
}

function startTimerClick(event) {
    if (event.target.matches(".start-button")) {
        runTimer();
    }
}

function runTimer () {
var timeleft = 15;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0 ){
    clearInterval(downloadTimer);
    timerElement.innerHTML = "Finished";
    questionDiv.innerHTML = "";
    showScore();
  } else {
    timerElement.innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1000);
}

function showScore () {
    questionDiv.innherHTML = "Right: " + right + "Wrong: " + wrong;
}

function showQuestion() {
    questionDiv.innerHTML = "";

  if (questionIdx >= questions.length) {
    alert("No more questions");
    questionDiv.innerHTML = "";
    return;
  }

  var question = questions[questionIdx];

  // create h2
  var h1 = document.createElement("h1");
  // set h2 text to question prompt
  h1.textContent = question.prompt;
  // append h2 to questionDiv
  questionDiv.append(h1);

  // create answers div
  var answersDiv = document.createElement("div");

  // set class to "answers"
  answersDiv.classList.add("answers");
  // append answers div to questionDiv
  questionDiv.appendChild(answersDiv);

  // for each element of question options
  for (var i = 0; i < question.options.length; i++) {
    var optionText = question.options[i];
    var btn = document.createElement("button");
    btn.classList.add("answer-btn");
    btn.textContent = optionText;

    // check if option is the answer
    if (optionText === question.answer) {
      btn.dataset.answer = 1;
      right++;
    } else {
      btn.dataset.answers = 0;
      wrong++;
    }

    answersDiv.appendChild(btn);
  }
}


// init page
questionDiv.addEventListener("click", handleOptionClick);
startButton.addEventListener("click", startTimerClick);
//questionDiv.addEventListener("click", startTimerClick);
startButton.addEventListener("click", showQuestion);
