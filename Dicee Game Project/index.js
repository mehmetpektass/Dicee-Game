var randomNumber=Math.random();
randomNumber=Math.floor(randomNumber*6)

var pictures=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var selectedPicture=pictures[randomNumber];


var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)

var pictures2=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var selectedPicture2=pictures2[randomNumber2];

document.querySelector(".img1").setAttribute("src",selectedPicture);
document.querySelector(".img2").setAttribute("src",selectedPicture2);

if (randomNumber>randomNumber2) {
    document.querySelector("h1").textContent="Number 1 Wins🏆"
}
else if (randomNumber2>randomNumber) {
    document.querySelector("h1").textContent="Number 2 Wins🏆"
}
else{
    document.querySelector("h1").textContent="Draw🤝"
}

document.querySelector("button").addEventListener("click",refreshThePage)
function refreshThePage(){
    window.location.reload();
}