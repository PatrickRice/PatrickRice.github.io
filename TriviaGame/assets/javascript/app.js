$(document).ready(function() {

// Display only the header and "Start" button initially.  Once the "Start" button is clicked, hide the "Start" button and display the questions as well as the "Submit" button.  

// The click also initiates the run() function which displays and starts the 30 second timer.  If the user has not clicked the "Submit" button by the time the 30 second timer expires then the quiz ends and any questions the user either has or has not answered prior to time expiring are scored accordingly. 

var isStarted = false;

$("#questions div").hide();
$("#questions button").hide();

if (isStarted === false) {
$("#start").on("click", function(){
    isStarted = true;
    $("#questions div").show();
    $("#questions button").show();
    $(this).hide();
    run();
});
} else {
    return isStarted;
}


// Click event listener for the "Submit" button
$("#submit").on("click", function(){
    stop();
    grade();
    showScore();
});

    // Create the variables for the run(), decrement(), and stop() functions.  The user will have 30 seconds to select their answers and complete the quiz by clicking the "Submit" button.   
    var number = 30;
    var intervalId;
    
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    // The decrement function.
    function decrement() {
      number--;
      $("#timer").html("<h3>Time Remaining: " + number + "</h3>");

      if (number === 0) {
        stop();
        grade();
        showScore();
      }
    }

    //  The stop function
    function stop() {
      clearInterval(intervalId);
    }

// Declare the variables to be used for displaying the score
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// Declare answer variables as empty strings initially which will be used to store the value of the checked radio button for each question
var answer1 = "";
var answer2 = "";
var answer3 = "";
var answer4 = "";
var answer5 = "";

// Click events to store the value of the radio button checked by the user for each question as a string value in the answer variables above 
$( "#question-one input" ).on( "click", function() {
answer1 = $("#question-one input:checked").val();
});

$( "#question-two input" ).on( "click", function() {
answer2 = $("#question-two input:checked").val();
});

$( "#question-three input" ).on( "click", function() {
answer3 = $("#question-three input:checked").val();
});

$( "#question-four input" ).on( "click", function() {
answer4 = $("#question-four input:checked").val();
});

$( "#question-five input" ).on( "click", function() {
answer5 = $("#question-five input:checked").val();
});

// The grade() function determines whether each question was answered correctly, incorrectly, or not answered
function grade() {

//question 1 answer r1
if (answer1 === "r1") {
    correct++;
    } else if ((answer1 === "r2") || (answer1 === "r3")) {
        incorrect++;
    } else {
        unanswered++;
    }

//question 2 answer r3
if (answer2 === "r3") {
    correct++;
    } else if ((answer2 === "r2") || (answer2 === "r1")) {
        incorrect++;
    } else {
        unanswered++;
    }
//question 3 answer r1
if (answer3 === "r1") {
    correct++;
    } else if ((answer3 === "r2") || (answer3 === "r3")) {
        incorrect++;
    } else {
        unanswered++;
    }
//question 4 answer r2
if (answer4 === "r2") {
    correct++;
    } else if ((answer4 === "r1") || (answer4 === "r3")) {
        incorrect++;
    } else {
        unanswered++;
    }
//question 5 answer r3
if (answer5 === "r3") {
    correct++;
    } else if ((answer5 === "r2") || (answer5 === "r1")) {
        incorrect++;
    } else {
        unanswered++;
    }
}

// The showScore() function hides the questions and buttons then displays the user's total questions answered correctly, incorrectly, and unanswered.
function showScore() {
    $("#questions div").hide();
    $("#questions button").hide();
    $("#total-correct").append("Total Correct: " + correct);
    $("#total-incorrect").append("Total Incorrect: " + incorrect);
    $("#total-unanswered").append("Total Unanswered: " + unanswered);
}

});
