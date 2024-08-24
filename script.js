
var blueCar = document.querySelector('#bluecar');
var raceCar = document.querySelector('#racecar');
var result = document.querySelector('#result');
var score = document.querySelector('#score');
var game = document.querySelector('#game');
var jumpsound = document.querySelector('#jumpsound');
var counter = 0;

// blueCar move
blueCar.addEventListener("animationiteration", function() {
    var random = ((Math.floor(Math.random() * 3)) * 130);
    blueCar.style.left = random + "px";
    counter++;
});

// RaceCar move with touch or mouse click
window.addEventListener('touchstart', moveCar);
window.addEventListener('click', moveCar);

function moveCar(e) {
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
    var touchX = e.touches ? e.touches[0].clientX : e.clientX;

    if (touchX > window.innerWidth / 2) { 
        // Move right
        if (raceCarLeft < 260) {
            raceCar.style.left = (raceCarLeft + 130) + "px";
        }
        jumpsound.play();
    } 
    else {
        // Move left
        if (raceCarLeft > 0) {
            raceCar.style.left = (raceCarLeft - 130) + "px";
            jumpsound.play();
        } 
    }
}

// Game Over check
setInterval(function GameOver() {
    var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"));
    var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));

    if ((blueCarLeft == raceCarLeft) && (blueCarTop > 250) && (blueCarTop < 450)) {
        document.getElementById('result').style.display = "block";
        document.getElementById('game').style.display = "none";
        document.getElementById('score').innerHTML = `Score: ${counter}`;
        counter = 0;
    }
}, 10);




//--------------------- This is samecode but this code will run mouse press left and right key ----------------------

var blueCar=document.querySelector('#bluecar');
var raceCar=document.querySelector('#racecar')
var result=document.querySelector('#result')
var score=document.querySelector('#score')
var game=document.querySelector('#game')
var jumpsound=document.querySelector('#jumpsound')


// blueCar move
blueCar.addEventListener("animationiteration",function(){  //animationiteration is a event any animation repeat everytype then used animationiteration

    var random=((Math.floor(Math.random() * 3)) * 130);
    blueCar.style.left = random + "px";
    counter++;
})


//raceCar move

 window.addEventListener('keydown',function(e){
  if(e.keyCode=="39"){
  var raceCarLeft=parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));     //getComputedStyle return racecar css all proparty
  
  if(raceCarLeft<260){
    raceCar.style.left = (raceCarLeft + 130)+ "px";
  }
  jumpsound.play();
}

if(e.keyCode =="37"){
  var raceCarLeft=parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));     //getComputedStyle return racecar css all proparty
  
  if(raceCarLeft > 0){
    raceCar.style.left = (raceCarLeft - 130)+ "px";
    jumpsound.play();
  }
}


})



//   Game Over
var counter=0;
setInterval(function GameOver(){
  var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"));
  var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
  var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));

  if ((blueCarLeft == raceCarLeft) && (blueCarTop > 250) && (blueCarTop < 450)) {
      document.getElementById('result').style.display = "block";
      document.getElementById('game').style.display = "none"; // Assuming the game container has id="game"
      document.getElementById('score').innerHTML = `Score: ${counter}`;
      counter = 0; // Reset the counter
  }
}, 10)

q   