
var trainName = "";
var trainDestination = "";
var trainTime = "";
var trainFrequency = "";
var nextArrival = "";
var minutesAway = "";

// jQuery Global Variables
var elTrain = $("#train-name");
var elTrainDestination = $("#train-destination");
// form validation for Time using jQuery Mask plugin
var elTrainTime = $("#train-time").mask("00:00");
var elTimeFreq = $("#time-freq").mask("00");