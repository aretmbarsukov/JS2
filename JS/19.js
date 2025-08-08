const radios = document.querySelectorAll('input[name="color"]');

radios.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    document.body.style.backgroundColor = event.target.value;
  });
});

// Початковий колір
document.body.style.backgroundColor = document.querySelector(
  'input[name="color"]:checked'
).value;



const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  nameOutput.textContent = nameInput.value.trim() || "незнайомець";
});


const validationInput = document.querySelector("#validation-input");
const requiredLength = Number(validationInput.dataset.length);

validationInput.addEventListener("blur", () => {
  if (validationInput.value.length === requiredLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});


const sizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

sizeControl.addEventListener("input", () => {
  text.style.fontSize = `${sizeControl.value}px`;
});

// Початковий розмір
text.style.fontSize = `${sizeControl.value}px`;
