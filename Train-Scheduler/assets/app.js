// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyAq2lnpD7PdTBpo84lyxx7i4FlrW3QYkhg",
    authDomain: "trainscheduler-a6895.firebaseapp.com",
    databaseURL: "https://trainscheduler-a6895.firebaseio.com",
    projectId: "trainscheduler-a6895",
    storageBucket: "",
    messagingSenderId: "827975263342"
  };
  firebase.initializeApp(config);

  var database = firebase.database();


// 2. Button for adding Trains
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var startTime = $("#start-time-input").val().trim();
  var frequency = $("#frequency-input").val().trim();

  // Creates local "temporary" object for holding train data
  var train = {
    name: trainName,
    dest: destination,
    start: startTime,
    freq: frequency
  };

  // Uploads train data to the database
  database.ref().push(train);

  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#start-time-input").val("");
  $("#frequency-input").val("");
});

// 3. Create Firebase event for adding new train data to the database and a row in the html when a user adds a new train
database.ref().on("child_added", function(childSnapshot) {
  // Variable to capture the 'hh:mm:ss a' whenever a new train is added to the database
  var dateTime = moment().format('MMMM Do YYYY, hh:mm:ss a');

  // Update the div next to the "Current Train Schedule as of:" card header with the 'hh:mm:ss a' of the most recent update
  $("#current-time").text(dateTime)

  // Store the updated train into variables
  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().dest;
  var startTime = childSnapshot.val().start;
  var frequency = childSnapshot.val().freq;


    // Variables needed to calculate the minutes until the next train arrives
    var tFrequency = frequency;
    var firstTime = startTime;

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minutes Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes").format("HH:mm");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("HH:mm"));

  // Create a new row with the new train info
  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(destination),
    $("<td>").text(frequency),
    $("<td>").text(nextTrain),
    $("<td>").text(tMinutesTillTrain),
  );

  // Append the new row to the table
  $("#train-table > tbody").append(newRow);
});