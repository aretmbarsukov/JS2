// ========1========
const input = document.querySelector("#myInput");
console.log(input)
const button = document.querySelector("#myButton");

button.addEventListener("click", changeButtonText);
function changeButtonText() {
  button.textContent = input.value;
}

// ========2========
const image = document.querySelector("#myImage");
image.src =
  "https://img.freepik.com/free-photo/red-parrot-close-up_23-2149436436.jpg";


// ========3========
const link = document.querySelector("#myLink");
link.href = "https://new-site.com";

const images = document.querySelector("#myImages");
image.setAttribute("alt", "Красиве зображення природи");


// ========4========
// Знаходимо перший елемент <li> у списку з id="myList"
const firstListItem = document.querySelector('#myList li');

// Змінюємо його текстовий вміст
if (firstListItem) {
    firstListItem.textContent = 'Новий текст для першого елемента';
}