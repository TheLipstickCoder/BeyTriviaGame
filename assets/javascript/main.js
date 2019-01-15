//Made with the assistance of prior class activities, StackOverflow, MDN, Tutorial Republic, and GitHub

$(document).ready(function () {
    var timer = false;
    var time = 60;
    var correctAnswers = $("input[class='correct']:checked");
    var wrongAnswers = 0;
    var skipped = 0;
    var playerGuess = $("input:checked").val();

//Setting game timer for on click event
    $("#gameStart").on("click", function(event){
        if (!timer) {
            intervalId = setInterval(60000);
            timer = true;
        }
    })

//Countdown timer (used assistance from another repo on GitHub and StackOverflow)
    function decreaseTime (){
        $("#timer").html("<h2>Time remaining: " + time + " seconds</h2>");
	    time --;
    

    if (timer === 0) {
        alert ("Uh oh! Time is Up!")
    }}  


    function answeringQuestions(){
    if (playerGuess !== correctAnswers){
        wrongAnswers ++;
    } else if (playerGuess == correctAnswers){
        correctAnswers ++;
    }
    }
//Invoking functions
    decreaseTime();
    answeringQuestions();

});
