const giveMeColor = document.querySelector("button");
const color = [
  "#FF0000",
  "#00FFFF",
  "#0000FF",
  "#00008B",
  "#ADD8E6",
  "#800080",
  "#FFFF00",
  "#00FF00",
  "#FF00FF",
  "#FFC0CB",
];
const box = document.getElementsByTagName("body")[0];

function randomColor() {
  let colorOne = color[Math.floor(Math.random() * color.length)];
  let colorTwo = color[Math.floor(Math.random() * color.length)];
  box.style.background = `linear-gradient(90deg, ${colorOne}, ${colorTwo})`;
}

giveMeColor.addEventListener("click", randomColor);
