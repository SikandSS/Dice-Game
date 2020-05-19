var numOne = (Math.floor((Math.random()) * 6) + 1);
var numTwo = (Math.floor((Math.random()) * 6) + 1);

if(numOne > numTwo){
    document.querySelector('h1').innerHTML = "⚐Player 1 Wins";

}
else if( numTwo > numOne){
    document.querySelector('h1').innerHTML = "Player 2 Wins⚐";

}
else {
    document.querySelector('h1').innerHTML = "Both players draw";
}

document.querySelector('h3').innerHTML = numOne;
document.querySelector('h4').innerHTML = numTwo;

document.getElementsByClassName("img1")[0].setAttribute("src","images/dice" + numOne + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src","images/dice" + numTwo + ".png");