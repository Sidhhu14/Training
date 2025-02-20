const evenNumbers = document.getElementById("evenNumbers");
const outputButton = document.getElementById("displayButton");
outputButton.addEventListener("click", function () {
    evenNumbers.textContent = "";
    for (let num = 1; num <= 20; num++) {
        if (num % 2 === 0) {
            evenNumbers.textContent += " " + num;
        }
    }
})
