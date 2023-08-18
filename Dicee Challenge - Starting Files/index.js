var player1 = "Player 1";
var player2 = "Player 2";

function EditNames() {
    player1 = prompt("Enter the name of player 1");
    player2 = prompt("Enter the name of player 2");

    document.querySelector(".dice p").innerHTML = player1;
    document.querySelector(".dice2 p").innerHTML = player2;
}

function RollTheDice() {
    var randomNum1 = Math.floor(Math.random() * 6) + 1;
    var randomNum2 = Math.floor(Math.random() * 6) + 1;

    var diceLocation = "images/dice" + randomNum1 + ".png";
    var diceLocation2 = "images/dice" + randomNum2 + ".png";

    var image1 = document.querySelectorAll("img")[0];
    var image2 = document.querySelectorAll("img")[1];

    image1.setAttribute("src", diceLocation);
    image2.setAttribute("src", diceLocation2);

   
    if (randomNum1 === randomNum2) {
        document.querySelector("h1").innerHTML = "Draw🫂";
    } else if (randomNum1 > randomNum2) {
        document.querySelector("h1").innerHTML = (player1 + " wins🚩");
    } else {
        document.querySelector("h1").innerHTML = (player2 + " wins🚩");
    }
}
