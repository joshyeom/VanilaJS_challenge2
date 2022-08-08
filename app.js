const generateANumber = document.querySelector("#generate");
const guessTheNumber = document.querySelector("#guess");
const playButton = document.querySelector("#play-button");
const play = document.querySelector("span");

function machineChoose(event) {
  event.preventDefault();
  const guessValue = parseInt(guessTheNumber.value);
  const generateValue = parseInt(generateANumber.value);
  const machineNumber = 1 + Math.floor(Math.random() * generateValue);
  if (machineNumber === guessValue) {
    play.innerText = `You chose:${guessValue}, the machine chose:${machineNumber} You Won!`;
  } else if (generateValue < 0) {
    alert("Please generate positive number");
  } else if (generateValue < guessValue) {
    alert("please check your Guess number");
  } else {
    play.innerText = `You chose:${guessValue}, the machine chose:${machineNumber} You Lost!`;
  }
}

playButton.addEventListener("submit", machineChoose);
