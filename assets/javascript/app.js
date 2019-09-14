$(document).ready(function(){
    //$("#game").hide();
    $("#start_button").on("click", trivia.startGame);
    $("#ans").hide();
    //$(document).on("click", ".option", trivia.guessChecker);
})

var number = 20;
var intervalId;
var q = 0;

var trivia = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 30,
    timerOn: false,
    timerId: '',


    trivArr: [
      {
        question: 'Who is actually a chef?',
        answers: ['Monica', 'Chandler', 'Rachel', 'Ross'],
        correct: "Monica",
        questionNum: "q1"
      },
      {
        question: 'What does Joey love to eat?',
        answers: ['Fish', 'Apples', 'Oranges', 'Sandwhiches'],
        correct: "Sandwhiches",
        questionNum: "q2"
      },
      {
        question: 'How many times has Ross been divorced?',
        answers: ['5', '2', '1', '3'],
        correct: "3",
        questionNum: "q3"
      },
      {
        question: 'How many types of towels does Monica have?',
        answers: ['3', '8', '11', '6'],
        correct: "11",
        questionNum: "q4"
      }

    ],
      

      startGame: function(){
          $("#start_button").hide();
          clearInterval(trivia.timerId);
          trivia.currentSet = 0;
          trivia.correct = 0;
          trivia.incorrect = 0;
          trivia.unanswered = 0;

          $("#game").show();
          trivia.nextQuestion();

          //reset game results
          $("#results").html('');

          

          
          //console.log(trivia.options.q1.length)
      },

      decrement: function() {
        number--;
        $("#time_remaining").html("<h2>" + number + "</h2>");
        console.log($("#time-remaining"))
        if (number === 0) {
          stop();
          alert("Time Up!");
          q++;
          $("#question").empty();
          $("#choices").empty();
          trivia.nextQuestion();
          number=20;
          trivia.timerOn = true;
          //this.runTimer();
        }
      },

      runTimer: function() {
        //console.log("run timer function")
        clearInterval(intervalId);
        intervalId = setInterval(this.decrement, 1000);
      },

      nextQuestion: function(){
        //console.log("next q function")
        trivia.timer = 30;
        trivia.timerOn = true;
        

        $("#question").append(this.trivArr[q].question)
        if(trivia.timerOn){
          this.runTimer();
        }
      
        //dynamically creating answer choices
        console.log(this.trivArr[q].answers.length);
        for(i=0;i<this.trivArr[q].answers.length;i++){
          //.console.log("whats up");
          // $("#choices").append("<button class='user-answer' id=" + "qs" + i + ">" + this.trivArr[q].answers[i] + "</button>")
          
          $("#choices").append(`<button class="user-answer btn btn-outline-light" data-answer="${this.trivArr[q].answers[i]}" id="qs">${this.trivArr[q].answers[i]}</button>`)


        }
        //$("#ans").append(this.trivArr[q].correct)

        //HOW DO I SET A DIFFERENT ID FOR EACH BUTTON DYNAMICALLY 

        
      },
    
}

$(document).on("click", ".user-answer", function(){
  var dataAnswer = $(this).attr("data-answer")
  if(trivia.trivArr[q].correct == dataAnswer){
    alert("correct")
    trivia.correct++;
    number=20;
    trivia.timerOn = true;
  }
  else{
    alert("Wrong, the correct answer is " + trivia.trivArr[q].correct);
    trivia.incorrect++;
    number=20;
    trivia.timerOn = true;
  }

  q++;
  //console.log("qqqq");
  $("#question").empty();
  $("#choices").empty();
  trivia.nextQuestion();
  //console.log("the end")

  $("#correct").html("Correct: " + trivia.correct);
  $("#incorrect").html("Incorrect: " + trivia.incorrect);

  

})

// $("#qs0").on("click",function(){
//   //var currentIndex = $(this).attr('data-question')
//   //<button id="0data-question=0">Monica</button>
  
// });
//nextQuestion();







