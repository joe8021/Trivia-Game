//$("#time_remaining").hide();
$("#option1").hide();
$("#option2").hide();
$("#option3").hide();
$("#correct").hide();
$("#incorrect").hide();


//var timer = document.getElementById("#time_remaining");

//var question_options = [];
var question_ops = document.getElementById("question");
var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");
var q1_op1 = document.getElementById("option1");
var q1_op2 = document.getElementById("option2");
var q1_op3 = document.getElementById("option3");
var q2_op1 = document.getElementById("option1");
var q2_op2 = document.getElementById("option2");
var q2_op3 = document.getElementById("option3");
var q3_op1 = document.getElementById("option1");
var q3_op2 = document.getElementById("option2");
var q3_op3 = document.getElementById("option3");
var number = 30;
var intervalId;

//start time when start button is clicked
$("#start_button").on("click", function(){
    $("#start_button").hide();
    question_ops.textContent = questions.q1;
    $("#option1").show();
    $("#option2").show();
    $("#option3").show();
    $("#correct").show();
    $("#incorrect").show();
    runTimer();

})

var correct_answers = 0;
var incorrect_ans = 0;

//start timer
function runTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
  //count down by 1 second from number=30
  function decrement() {
    number--;
    $("#time_remaining").html("<h2>" + number + "</h2>");
    if (number === 0) {
      stop();
      alert("Time Up!");
    }
  }

  //stop timer when number == 0 and display alert
  function stop() {
    clearInterval(intervalId);
  }

    var questions = {
        q1: 'Who is actually a chef?',
        q2: 'What does Joey love to eat?',
        q3: 'How many times has Ross been divorced?'
    }

    var answers = {
        q1: 'Monica',
        q2: 'Sandwhiches',
        q3: '3'
    }

    var answerOptions = {
        q1: ['Monica', 'Chandler', 'Rachel'],
        q2: ['Fish', 'Sandwhiches', 'Oranges'],
        q3: ['5', '2', '3']
    }

    q1_op1.textContent = answerOptions.q1[0];
    q1_op2.textContent = answerOptions.q1[1];
    q1_op3.textContent = answerOptions.q1[2];

    //q1
    if($("#option1").on("click", function (){
        alert("Correct!")
        correct_answers++;
        correct.textContent = "Correct: " + correct_answers;
        question_ops.textContent = questions.q2;
        q2_op1.textContent = answerOptions.q2[0];
        q2_op2.textContent = answerOptions.q2[1];
        q2_op3.textContent = answerOptions.q2[2];
        if($("#option2").on("click", function (){
            alert("Correct!")
            correct_answers++;
            correct.textContent = "Correct: " + correct_answers;
            question_ops.textContent = questions.q3;
            q3_op1.textContent = answerOptions.q3[0];
            q3_op2.textContent = answerOptions.q3[1];
            q3_op3.textContent = answerOptions.q3[2];
        }));
        if($("#option1").on("click", function (){
            alert("Incorrect!")
            incorrect_ans++;
            incorrect.textContent = "Incorrect: " + incorrect_ans;
        }));
        if($("#option3").on("click", function (){
            alert("Incorrect!")
            incorrect_ans++;
            incorrect.textContent = "Incorrect: " + incorrect_ans;
        }));
    }));
    else if($("#option2").on("click", function (){
        alert("Incorrect!")
        incorrect_ans++;
        incorrect.textContent = "Incorrect: " + incorrect_ans;
    }));
    if($("#option3").on("click", function (){
        alert("Incorrect!")
        incorrect_ans++;
        incorrect.textContent = "Incorrect: " + incorrect_ans;
    }));

    








