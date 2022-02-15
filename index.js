var randomNumber1 = Math.floor(Math.random() * 6) + 1;  //1-6 numbers

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice_.png

var randomImageSource1 = "images/" + randomDiceImage1;  //imges/dice_.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;  //1-6 numbers

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice_.png

var randomImageSource2 = "images/" + randomDiceImage2;  //imges/dice_.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomImageSource2);


//condition code
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins!!! &#128681";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins!!! &#128681";
}
else{
  document.querySelector("h1").innerHTML = "Draw!!!";
}
