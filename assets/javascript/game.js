// Alert title
alert("Welcome to The Gem Gatherer Game!");

// Alert instructions
alert("Are you a Psychic?" + "\n" + "Try to gather the amount of gems the computer chose by clicking one of the gems on the screen." + "\n" + "Each gem is worth a different secret value." + "\n" + "If you gather the right amount of gems, you win!" + "\n" + "If you gather too many gems, you lose." + "\n" + "Good luck!");

// Create variables: wins=wins, losses=losses, gemAmount=Amount to gather, amountGathered=Amount of gems gathered, amountArray=Array for gemAmount (19-120), gemArray=Array for each gem (1-12) 
var wins = 0;
var losses = 0;
var gemAmount = 0;
var amountGathered = 0;
var gemArray1 = Math.floor(Math.random() * 11 + 1);
var gemArray2 = Math.floor(Math.random() * 11 + 1);
var gemArray3 = Math.floor(Math.random() * 11 + 1);
var gemArray4 = Math.floor(Math.random() * 11 + 1);
var gameActive = false;

// Create variables for DOM element to reference
var $wins = document.getElementById("winsCount");
var $losses = document.getElementById("lossesCount");
var $gameBtn = document.getElementById("newGame");
var $gemAmount = document.getElementById("gemAmount");
var $amountGathered = document.getElementById("gemsGathered");

// Create reset function
function reset() {
  gemAmount = Math.floor(Math.random() * 101 + 19);;
  amountGathered = 0;
  gemArray1 = Math.floor(Math.random() * 11 + 1);
  gemArray2 = Math.floor(Math.random() * 11 + 1);
  gemArray3 = Math.floor(Math.random() * 11 + 1);
  gemArray4 = Math.floor(Math.random() * 11 + 1);
  gameActive = true;

  console.log(gemAmount, gemArray1, gemArray2, gemArray3, gemArray4);

  //write to page
  $("#gemAmount").text(gemAmount);
  $("#gemsGathered").text(amountGathered);
}

// Run reset function to start the game
reset();

// Add listener to trigger reset on button click
$("#newGame").on("click", function() {
  reset();
});

// Add on click function for imgOne
$("#imgOne").on("click", function () {
  if (gameActive !== true) {
    return false
  }
  amountGathered = amountGathered + gemArray1;
  console.log("New amountGathered= " + amountGathered);
  $("#gemsGathered").text(amountGathered);
  // Alert Wins
  if (amountGathered === gemAmount) {
    wins++;
    alert("You Win!" + "\n" + "But how did you know?" + "\n" + "Press the button to play again!");
    $("#winsCount").text(wins);
    gameActive = false
  };

  // Alert Losses
  if (amountGathered > gemAmount) {
    losses++;
    alert("You Lose!" + "\n" + "I told you so :p" + "\n" + "Press the button to play again!");
    $("#lossesCount").text(losses);
    gameActive = false
  };
});

// Add on click function for imgTwo
$("#imgTwo").on("click", function () {
  if (gameActive !== true) {
    return false
  }
  amountGathered = amountGathered + gemArray2;
  console.log("New amountGathered= " + amountGathered);
  $("#gemsGathered").text(amountGathered);

  // Alert Wins
  if (amountGathered === gemAmount) {
    wins++;
    alert("You Win!" + "\n" + "But how did you know?" + "\n" + "Press the button to play again!");
    $("#winsCount").text(wins);
    gameActive = false
  };

  // Alert Losses
  if (amountGathered > gemAmount) {
    losses++;
    alert("You Lose!" + "\n" + "I told you so :p" + "\n" + "Press the button to play again!");
    $("#lossesCount").text(losses);
    gameActive = false
  };
});

// Add on click function for imgThree
$("#imgThree").on("click", function () {
  if (gameActive !== true) {
    return false
  }
  amountGathered = amountGathered + gemArray3;
  console.log("New amountGathered= " + amountGathered);
  $("#gemsGathered").text(amountGathered);

  // Alert Wins
  if (amountGathered === gemAmount) {
    wins++;
    alert("You Win!" + "\n" + "But how did you know?" + "\n" + "Press the button to play again!");
    $("#winsCount").text(wins);
    gameActive = false
  };

  // Alert Losses
  if (amountGathered > gemAmount) {
    losses++;
    alert("You Lose!" + "\n" + "I told you so :p" + "\n" + "Press the button to play again!");
    $("#lossesCount").text(losses);
    gameActive = false
  };
});

// Add on click function for imgFour
$("#imgFour").on("click", function () {
  if (gameActive !== true) {
    return false
  }
  amountGathered = amountGathered + gemArray4;
  console.log("New amountGathered= " + amountGathered);
  $("#gemsGathered").text(amountGathered);

  // Alert Wins
  if (amountGathered === gemAmount) {
    wins++;
    alert("You Win!" + "\n" + "But how did you know?" + "\n" + "Press the button to play again!");
    $("#winsCount").text(wins);
    gameActive = false
  };

  // Alert Losses
  if (amountGathered > gemAmount) {
    losses++;
    alert("You Lose!" + "\n" + "I told you so :p" + "\n" + "Press the button to play again!");
    $("#lossesCount").text(losses);
    gameActive = false
  };
});



// THINGS I STILL NEED TO FIGURE OUT
  // 1.Change button to jQuery
  // 2. change docgetelemnetbyid