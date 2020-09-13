function whichImage(number) {

}


var playerOne = Math.ceil(Math.random() * 6);
var playerTwo = Math.ceil(Math.random() * 6);


document.querySelector(".img1").setAttribute("src", "./images/dice" + playerOne + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + playerTwo + ".png");


if (playerOne > playerTwo) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
} else if (playerTwo > playerOne) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}