const userInput1 = document.getElementById("userInput1");
const userInput2 = document.getElementById("userInput2");
const compareButton = document.getElementById("compare");
const operator = document.getElementById("operator");
compareButton.addEventListener("click", function () {
    if (Number(userInput1.value) === Number(userInput2.value)) {
        operator.textContent = '=';
    }
    else if (Number(userInput1.value) > Number(userInput2.value)) {
        operator.textContent = '>';
    }
    else {
        operator.textContent = '<';
    }
})