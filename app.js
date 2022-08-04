const title = document.querySelector("span");

const superEventHandler = {
  //한 변수에 모든 함수를 저장
  mouseEnterHandler: function () {
    title.style.color = "orange";
    title.innerText = "마우스를 벗어나보세요!";
  },
  mouseLeaveHandler: function () {
    title.style.color = "teal";
    title.innerText = "창을 늘리거나 줄여보세요!";
  },
  windowResizeHandler: function () {
    title.style.color = "purple";
    title.innerText = "여기에 우측 클릭 해보세요!";
  },
  mouseContextHandler: function () {
    title.style.color = "tomato";
    title.innerText = "챌린지 완료!";
  },
};

title.addEventListener("mouseenter", superEventHandler.mouseEnterHandler);
title.addEventListener("mouseleave", superEventHandler.mouseLeaveHandler);
window.addEventListener("resize", superEventHandler.windowResizeHandler);
title.addEventListener("contextmenu", superEventHandler.mouseContextHandler);
