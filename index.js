const circles = document.querySelectorAll(".circle");
const texts = document.querySelectorAll(".text");
let activeLight = 0;

setInterval(changeLight, 1000);

function changeLight() {
  circles[activeLight].className = "circle";
  texts[activeLight].className = "text";
  activeLight++;

  if (activeLight > 2) {
    activeLight = 0;
  }

  const currentLight = circles[activeLight];
  const currentText = texts[activeLight];

  currentLight.classList.add(currentLight.getAttribute("color"));
  currentText.classList.add(currentText.getAttribute("color"));
}
