var myHero = document.getElementById("hero");
var block = document.getElementById("block");

var Score = document.querySelector(".score");

// myHero.addEventListener("keydown", jump);

function jump(){
    if(myHero.classList != "animate") {
        myHero.classList.add("animate");
    }
    setTimeout(function(){
        myHero.classList.remove("animate")
    }, 500);
} 
var checkDead = setInterval(function(){
    var HeroTop = parseInt(window.getComputedStyle(myHero).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft<68 && blockLeft>0  && HeroTop>=345){
        block.style.animation = "none";
        block.style.display = "none";
        window.alert("Game over");
    }
},10);

function referesh(){
    location.reload();
}

// function main(){
//     window.requestAnimationFrame(main);
//     var currentTime;
//     let countScore = parseInt(Math.floor(currentTime));
//     console.log(countScore);
// }
// window.requestAnimationFrame(main);
