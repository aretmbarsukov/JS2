const trackEl = document.querySelector(".track");
const itemEl = document.querySelectorAll("li");

let currentIndex = 0;

window.addEventListener("keydown", onKeyPress);

function updateSlaider() {
  const offset = -currentIndex * 100;
  trackEl.style.transform = `translateX(${offset}%)`;
}

function onKeyPress(event) {
  if (event.key === "ArrowRight") {
    if (currentIndex < itemEl.length - 1) {
      currentIndex += 1;
      updateSlaider();
    }
  } else if (event.key === "ArrowLeft") {
    if (currentIndex > 0) {
      currentIndex -= 1;
      updateSlaider();
    }
  }
}










const inputEl = document.querySelector("#controls input");
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesContainer = document.querySelector("#boxes");

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createBoxes(amount) {
  destroyBoxes(); // очищаємо перед створенням нових
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomColor();
    boxes.push(box);
    size += 10;
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

renderBtn.addEventListener("click", () => {
  const amount = Number(inputEl.value);
  if (amount > 0) {
    createBoxes(amount);
  }
});

destroyBtn.addEventListener("click", destroyBoxes);
