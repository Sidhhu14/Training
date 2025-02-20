const incButton = document.getElementById("increment");
const decButton = document.getElementById("decrement");
const spanElement = document.getElementById("count");
let currentCount = 0;
incButton.addEventListener("click", function () {
    spanElement.textContent = ++currentCount;
})
decButton.addEventListener("click", function () {
    spanElement.textContent = --currentCount;
})