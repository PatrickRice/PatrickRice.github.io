//  This code will run as soon as the page loads.

// window.onload = function() {

//     //  Click events:
//     $("#lap").click(stopwatch.recordLap);
//     $("#stop").click(stopwatch.stop);
//     $("#reset").click(stopwatch.reset);
//     $("#start").click(stopwatch.start);
//   };
  
  // Declare Variables:
  var wins = 0;
  var losses = 0;
  var playerTotal = 0;
  var computerNumber = Math.floor(Math.random() * 100) + 19;
  var mysteryValue = Math.floor(Math.random() * 12) + 1;
  var rubyValue = Math.floor(Math.random() * 12) + 1;
  var topazValue = Math.floor(Math.random() * 12) + 1;
  var diamondValue = Math.floor(Math.random() * 12) + 1;

    // var playerWins = $("#player-wins");
    // var playerLosses = $("#player-losses");
    // var displayComputerNumber = $("computer-number");
    // var displayPlayerTotal = $("total-score");
    
    console.log(mysteryValue, rubyValue, topazValue, diamondValue)
// Define Functions

function updateScore() {
    $("#player-wins").html("Wins: " + wins);
    $("#player-losses").html("Losses: " + losses);
    $("#total-score").html(playerTotal);
    $("#computer-number").html(computerNumber);
}

function restart() {
    playerTotal = 0;
    computerNumber = Math.floor(Math.random() * 100) + 19;
    mysteryValue = Math.floor(Math.random() * 12) + 1;
    rubyValue = Math.floor(Math.random() * 12) + 1;
    topazValue = Math.floor(Math.random() * 12) + 1;
    diamondValue = Math.floor(Math.random() * 12) + 1;
    $("#total-score").html(playerTotal);
    $("#computer-number").html(computerNumber);
    console.log(mysteryValue, rubyValue, topazValue, diamondValue);
}

// Main program
updateScore();
// Click listeners

  $("#mystery").on("click", function() {
    playerTotal += mysteryValue;
    updateScore();

    if (playerTotal === computerNumber) {
        wins++;
        updateScore();
        restart();
      }
    
      else if (playerTotal >= computerNumber) {
        losses++;
        updateScore();
        restart();
      }
  });

  $("#ruby").on("click", function() {
    playerTotal += rubyValue;
    updateScore();

    if (playerTotal === computerNumber) {
        wins++;
        updateScore();
        restart();
      }
    
      else if (playerTotal >= computerNumber) {
        losses++;
        updateScore();
        restart();
      }
  });

  $("#topaz").on("click", function() {
    playerTotal += topazValue;
    updateScore();

    if (playerTotal === computerNumber) {
        wins++;
        updateScore();
        restart();
      }
    
      else if (playerTotal >= computerNumber) {
        losses++;
        updateScore();
        restart();
      }
  });

  $("#diamond").on("click", function() {
    playerTotal += diamondValue;
    updateScore();

    if (playerTotal === computerNumber) {
        wins++;
        updateScore();
        restart();
      }
    
      else if (playerTotal >= computerNumber) {
        losses++;
        updateScore();
        restart();
      }
  });


// Win-Loss conditions:

//   if (playerTotal === computerNumber) {
//     wins++;
//     updateScore();
//     restart();
//   }

//   else if (playerTotal >= computerNumber) {
//     losses++;
//     updateScore();
//     restart();
//   }
