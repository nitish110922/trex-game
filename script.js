let dino = document.getElementById("dino")
let cactus = document.getElementById("cactus")
let cactus1 = document.getElementById("cactus1")
let road = document.getElementById("road")
let score = document.getElementById("score")
let gameover = document.getElementById("gameover")
let obs1 = document.getElementById("obs1")
let body = document.getElementById('body')
let highscore = document.getElementById('highscore')


let high = 0 ;
let playerScore = 0;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');



// game start
window.addEventListener("keydown", (start) => {
  
  if (start.code == "Enter") {
    gameover.style.display = "none";
    body.classList.add("back");
    cactus.classList.add("cactusActive");
    cactus1.classList.add("cactus1Active");
    obs1.classList.add("obs1Active");
    road.classList.add("roadac")
    playerScore = 0 ;
    audio.play()
    audiogo.pause();
    document.getElementById("dinoimage").src = "runningdino.gif";
    playerScore=0;
  }
 });



window.addEventListener("keydown", (e) => {
  
  if (e.keyCode == "32 ")
    if (dino.classList != "dinoActive") {
      dino.classList.add("dinoActive");
      setTimeout(() => {  
        dino.classList.remove("dinoActive");
      }, 500);
    }
});


setInterval(function () {
  
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  

  var cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  

  var cactus1Left = parseInt(
    window.getComputedStyle(cactus1).getPropertyValue("left")
  );
  

  var obs1Left = parseInt(
    window.getComputedStyle(obs1).getPropertyValue("left")
  );
 
  score.innerHTML = 'your score :'+ playerScore;
  
  // game over condition
  if (cactusLeft < 100 && cactusLeft > 0 && dinoTop >= 230 ||obs1Left < 50 && obs1Left > 0 && dinoTop <= 206 ||cactus1Left < 88 && cactus1Left > 15 && dinoTop >= 230 ) {
   

    gameover.innerHTML = "GAME OVER";
    gameover.style.display = "block";
    gameover.classList.add("gm");
    cactus1.classList.remove("cactus1Active");
    cactus.classList.remove("cactusActive");
    obs1.classList.remove("obs1Active");
    road.classList.remove('roadac');
    cactus.style.animationDuration = "6s"
    audiogo.play();
    audio.pause();
    document.getElementById("dinoimage").src = "dino.png";
   
  } 
}, 1);


  //speed increase condition 
setInterval(() => {
  
  var cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );


  if (cactusLeft < 20 ) {

    aniDur = parseFloat(window.getComputedStyle(cactus, null).getPropertyValue('animation-duration'));
    newDur = aniDur - 0.05;
    cactus.style.animationDuration = newDur + 's';
    console.log(aniDur)
}

}, 2000);


// score increase condition...
setInterval(() => {
  
   var cactus1Left = parseInt(
    window.getComputedStyle(cactus1).getPropertyValue("left")
   );
   
    var cactusLeft = parseInt(
      window.getComputedStyle(cactus).getPropertyValue("left")
    );
  
    var obs1Left = parseInt(
      window.getComputedStyle(obs1).getPropertyValue("left")
    );
  
    if (cactusLeft < 20  || obs1Left < 20 ||cactus1Left <20) {

    playerScore++ ; 
   
}

}, 200);


  





