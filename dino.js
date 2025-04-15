var dino = document.getElementById("dino");
var block = document.getElementById("block");
var result =document.getElementById("result");
var score =document.getElementById("score");
var game =document.getElementById("game");
var count = 0;
var sound =document.getElementById("sound");
 

//jump function
function jump(){
   dino.style.top = "90px" 
   setTimeout(function () {
    dino.style.top="160px"
   } ,400)
   count++;
   sound.play()
}

window.addEventListener("keydown" ,jump)
//Game over function
setInterval(function gameover(){
    var blockleft = parseInt(window.getComputedStyle (block).getPropertyValue ("left"));
    var dinoTop = parseInt(window.getComputedStyle (dino).getPropertyValue ("top"));
    if((blockleft<70) &&(dinoTop>90)){
       result.style.display="block";
       game.style.display="none";
       score.innerHTML='score:${count}';

    }
 },10)