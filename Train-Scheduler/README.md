# Train-Scheduler
The Train Scheduler app allows a user to input the name, destination, start time, and frequency of a train and stores this information to a database.
Whenever a new train is added to the database, a new row containing the name, destination, frequency, next arrival, and minutes away information is appended to the "Current Train Schedule as of:" card.
Moment.js is used to calculate the train's next arrival time and minutes away from the station.  It is also used to update the date/time displayed on the "Current Train Schedule as of:" card each time info for a new train is added to the database.
