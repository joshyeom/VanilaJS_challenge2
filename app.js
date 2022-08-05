function windowHandler() {
  const windowLength = window.innerWidth; //function 안에서 선언해야 반응형이 된단다.
  if (windowLength < 400) {
    document.body.classList.add("blue");
    document.body.classList.remove("yellow");
    document.body.classList.remove("purple");
  } else if (windowLength > 800) {
    document.body.classList.add("yellow");
    document.body.classList.remove("blue");
    document.body.classList.remove("purple");
  } else {
    document.body.classList.add("purple");
    document.body.classList.remove("blue");
    document.body.classList.remove("yellow");
  }
}

window.addEventListener("resize", windowHandler);
