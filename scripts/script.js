var menu = document.getElementById("menu");
var hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
});

//timer start
var roundInput = document.getElementById("rounds-count");
var roundTimeInput = document.getElementById("round-time-input");
var restTimeInput = document.getElementById("rest-time");
var roundEndWarningInput = document.getElementById("round-end-warning");

roundInput.addEventListener("blur", function(event) {

  if (!/^[1-9]\d*$/.test(this.value)) {
    event.preventDefault();
    this.value = Math.round(this.value);
  }

  if (this.value > 24) {
    event.preventDefault();
    this.value = 24;
  }

  if (this.value <= 0) {
    event.preventDefault();
    this.value = 12;
  }
});


roundTimeInput.addEventListener("blur", function(event) {
  if (!/^([0-5][0-9]):([0-5][0-9])$/.test(this.value)) {
    event.preventDefault();
    this.value = "02:00";
  }

  if(this.value < "00:05"){
    event.preventDefault();
    this.value = "00:05";
  }
  
  if (this.value > "05:00") {
    event.preventDefault();
    this.value = "05:00";
  }

});

restTimeInput.addEventListener("blur", function(event) {
  if (!/^([0-5][0-9]):([0-5][0-9])$/.test(this.value)) {
    event.preventDefault();
    this.value = "01:00";
  }

  if(this.value < "00:05"){
    event.preventDefault();
    this.value = "00:05";
  }
  
  if (this.value > "05:00") {
    event.preventDefault();
    this.value = "05:00";
  }

});

roundEndWarningInput.addEventListener("blur", function(event) {
  if (!/^([0-5][0-9]):([0-5][0-9])$/.test(this.value)) {
    event.preventDefault();
    this.value = "00:10";
  }

  if(this.value < "00:05"){
    event.preventDefault();
    this.value = "00:05";
  }
  
  if (this.value > "01:00") {
    event.preventDefault();
    this.value = "01:00";
  }

});

var roundTimeTimer = document.getElementById("round-time");
var currentRoundTimer = document.getElementById("current-round");
var totalRoundsTimer = document.getElementById("total-rounds");
var startTimer = document.getElementById("start-timer");
var resetTimer = document.getElementById("reset-timer");
var totalTime = document.getElementById("total-time");

















//dark stuff


var roundInput = document.getElementById("rounds-count");
var roundTimeInput = document.getElementById("round-time-input");
var restTimeInput = document.getElementById("rest-time");

resetTimer.onclick = function(){
  location.reload();
}

startTimer.onclick = function() {
    startTimer.style.display = "none";

    var timerStartedBlur = document.getElementById("timer-started-blur");
    var timerStartedDiv = document.getElementById("timer-started-div");
    var timerSecondsCount = document.getElementById("timer-seconds-count");

    var timerSecondsCountValue = parseInt(timerSecondsCount.textContent);

    timerStartedBlur.style.display = "block";
    timerStartedDiv.style.display = "block";

    function displayCountdown(){
      timerSecondsCountValue--;
      if(timerSecondsCountValue > 0){
        timerSecondsCount.innerHTML = timerSecondsCountValue;
      }
      else{
        timerSecondsCount.innerHTML = "GO!";
      }
    }

    setInterval(displayCountdown,1000);

    setTimeout(function(){ 
      timerStartedBlur.style.display = "none";
      timerStartedDiv.style.display = "none";
    }, 4000);







    function bigFunction(){
      var roundCount = roundInput.value;//works

      var roundTime = roundTimeInput.value;   
      var minutesRound = roundTime[1];//works
      var secondsRound = roundTime.slice(-2);//works
  
      var restTime = restTimeInput.value;
      var minutesRest = restTime[1];//works
      var secondsRest = restTime.slice(-2);//works
  
      var secondsRoundToMinutes = Math.floor((roundCount*secondsRound)/60);//works
      var minutesRoundFull = minutesRound*roundCount;
      var secondsFullRound = (roundCount*secondsRound) % 60;
      var minutesFullRound = secondsRoundToMinutes + minutesRoundFull;
  
      
  
  
      var secondsRestToMinutes = Math.floor(((roundCount-1)*secondsRest)/60);//works
      var minutesRestFull = minutesRest*(roundCount-1);   
      var secondsFullRest = ((roundCount-1)*secondsRest) % 60;
      var minutesFullRest = secondsRestToMinutes + minutesRestFull;
  
  
  
      var minutesFull = minutesFullRest + minutesFullRound;
      var secondsFull = secondsFullRound + secondsFullRest;
  
  
  
      var hoursFull = 0;
  
      for(var i = 0; i < 5;i++){
        if(minutesFull >= 60){
          hoursFull++;
          minutesFull = minutesFull - 60;
        }
      }
  
      for(vai = 0;i<100;i++){
        if(secondsFull >=60){
          minutesFull++;
          secondsFull = secondsFull - 60;
        }
      }
  
      if(hoursFull < 10){
        hoursFull = "0" + hoursFull;
      }
  
      if(minutesFull < 10){
        minutesFull = "0" + minutesFull;
      }
  
      if(secondsFull < 10){
        secondsFull = "0" + secondsFull;
      }
  
      var fullTime = hoursFull + ":" + minutesFull + ":" + secondsFull;
  
      var timerHelper = fullTime;
      var timerSeconds = parseInt(timerHelper.slice(-2));
      var timerMinutes = parseInt(timerHelper.slice(3,5));
      var timerHours = parseInt(timerHelper.slice(0,2));
  
      function updateTimer() {
        if (timerSeconds === 0 && timerMinutes === 0 && timerHours === 0) {
          clearInterval(intervalId);
          return;
        }
      
        timerSeconds--;
  
        if (timerSeconds < 0) {
          timerSeconds = 59;
          timerMinutes--;
        }
        if (timerMinutes < 0) {
          timerMinutes = 59;
          timerHours--;
        }
  
        if(timerHours< 10 && timerMinutes < 10 && timerSeconds< 10){
          totalTime.innerHTML = ("0" + timerHours + ":" + "0" + timerMinutes + ":" + "0" + timerSeconds);
        }
        else if(timerHours < 10 && timerMinutes < 10){
          totalTime.innerHTML = ("0" + timerHours + ":" + "0" + timerMinutes + ":" +  timerSeconds);
        }
        else if(timerMinutes < 10 && timerSeconds< 10){
          totalTime.innerHTML = (timerHours + ":" + "0" + timerMinutes + ":" + "0" + timerSeconds);
        }
        else if(timerHours < 10 && timerSeconds < 10){
          totalTime.innerHTML = ("0" + timerHours + ":" + timerMinutes + ":" + "0" + timerSeconds);
        }
        else if(timerHours < 10){
          totalTime.innerHTML = ("0" + timerHours + ":" + timerMinutes + ":" + timerSeconds);
        }
        else if(timerMinutes < 10){
          totalTime.innerHTML = (timerHours + ":" + "0" + timerMinutes + ":" + timerSeconds);
        }
        else if(timerSeconds < 10){
          totalTime.innerHTML = (timerHours + ":" + timerMinutes + ":" + "0" + timerSeconds);
        }
        else{
          totalTime.innerHTML = (timerHours + ":" + timerMinutes + ":" + timerSeconds);
        }
      }
  
  
  
      let intervalId = setInterval(updateTimer, 1000);
  

  
      var workTime = document.getElementById("work-time");
      var restTimeTimeTime = document.getElementById("rest-time-brah");
  
      workTime.innerHTML = roundTimeInput.value;
      restTimeTimeTime.innerHTML = restTimeInput.value;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      //middle part start
      var boxingBellSound = document.getElementById("boxing-bell-sound");
      var roundEndWarningSound = document.getElementById("round-end-warning-sound");
  
      var currentRound = document.getElementById("current-round");
      var totalRounds = document.getElementById("total-rounds");
  
  
      var timerFinishedBlur = document.getElementById("timer-finished-blur");
      var timerFinishedDiv = document.getElementById("timer-finished-div");
      var backToTheApp = document.getElementById("back-to-the-app");
      
      backToTheApp.addEventListener("click",function(){
        timerFinishedBlur.classList.toggle("active");
        timerFinishedDiv.classList.toggle("active");
        location.reload();
      });
  
      //roundtimetimer,minutesRound,secondsRounds,minutesRest,secondsRest
  
  
      var roundEndWarningValue = roundEndWarningInput.value;
      var roundEndWarningMinutes = parseInt(roundEndWarningValue.slice(0,2));
      var roundEndWarningSeconds = parseInt(roundEndWarningValue.slice(3));
  
      
      
      var minutesRoundInt = parseInt(minutesRound);
      var secondsRoundInt = parseInt(secondsRound);
      var minutesRestInt = parseInt(minutesRest);
      var secondsRestInt = parseInt(secondsRest);
  
      var minutesRoundIntHelper = parseInt(minutesRound);
      var secondsRoundIntHelper = parseInt(secondsRound);
      var minutesRestIntHelper = parseInt(minutesRest);
      var secondsRestIntHelper = parseInt(secondsRest);
      
      boxingBellSound.play();
  
      
      currentRound = 1;
      var allRounds = parseInt(roundInput.value);
      totalRounds.innerHTML = allRounds;
      
  
      function createTimer(){
  
        
        //iff currentRound < allRounds the workout has to continue
        if(currentRound <= allRounds){
  
          //round time decrement
          if((minutesRoundInt == 0 && secondsRoundInt > 0) || (minutesRoundInt > 0 && secondsRoundInt > 0) || (minutesRoundInt > 0 && secondsRoundInt == 0)){
            secondsRoundInt--;
            if (secondsRoundInt < 0) {
              secondsRoundInt = 59;
              minutesRoundInt--;
            }
  
            
  
            //round time display
            if(minutesRoundInt < 10 && secondsRoundInt < 10){
              roundTimeTimer.innerHTML = ("0" + minutesRoundInt + ":" + "0" + secondsRoundInt);
            }
            else if(secondsRoundInt < 10){
              roundTimeTimer.innerHTML = (minutesRoundInt + ":" + "0" + secondsRoundInt);
            }
            else if(minutesRoundInt < 10){
              roundTimeTimer.innerHTML = ("0" + minutesRoundInt + ":" + secondsRoundInt);
            }          
            else{
              roundTimeTimer.innerHTML = (minutesRoundInt + ":" + secondsRoundInt);
            }
            
            
          }//rest time decrement
          else if(minutesRoundInt == 0 && secondsRoundInt == 0){
            secondsRestInt--;
            if (secondsRestInt < 0) {
              secondsRestInt = 59;
              minutesRestInt--;
            }
  
            //rest time display
            if(minutesRestInt < 10 && secondsRestInt < 10){
              roundTimeTimer.innerHTML = ("0" + minutesRestInt + ":" + "0" + secondsRestInt);
            }
            else if(secondsRestInt < 10){
              roundTimeTimer.innerHTML = (minutesRestInt + ":" + "0" + secondsRestInt);
            }
            else if(minutesRestInt < 10){
              roundTimeTimer.innerHTML = ("0" + minutesRestInt + ":" + secondsRestInt);
            }          
            else{
              roundTimeTimer.innerHTML = (minutesRestInt + ":" + secondsRestInt);
            }
          }
  
  
          //round/rest end warning signal
          if((minutesRoundInt === roundEndWarningMinutes && secondsRoundInt === roundEndWarningSeconds) || (minutesRestInt === roundEndWarningMinutes && secondsRestInt === roundEndWarningSeconds)){
            roundEndWarningSound.play();
            roundTimeTimer.style.opacity = "0.5";
          }
          else{
            roundTimeTimer.style.opacity = "1";
          }
  
  
  
          //current round display
          currentRoundTimer.innerHTML = currentRound;
  
  
          if(roundTimeTimer.innerHTML == "00:00"){
            boxingBellSound.play();
          }
  
          //assigning the original values of the rounds and round/rest start signal
          if(minutesRoundInt ===0 && secondsRoundInt === 1){
            currentRound++;
            secondsRestInt = secondsRestIntHelper;
            minutesRestInt = minutesRestIntHelper;
          }
  
          if(minutesRoundInt === 0 & secondsRoundInt == 0 && minutesRestInt === 0 && secondsRestInt === 0){
            secondsRoundInt = secondsRoundIntHelper;
            minutesRoundInt = minutesRoundIntHelper;
          }
  
      
  
          
          
        }else{
          //if currentRound >= allRounds the workout is finished
          clearInterval(intervalIdOne);
          boxingBellSound.play();
          timerFinishedBlur.classList.toggle("active");
          timerFinishedDiv.classList.toggle("active");
  
       }
  
  
  
          
      }
  
      
      
  
      let intervalIdOne = setInterval(createTimer, 1000);
    }

    setTimeout(bigFunction, 4000);


}
