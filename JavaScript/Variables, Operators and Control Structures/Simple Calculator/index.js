const addButton = document.getElementById("add");
const subButton = document.getElementById("subtract");
const mulButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

addButton.addEventListener("click", function () {
    const userInput1 = document.getElementById("sumOperand1");
    const userInput2 = document.getElementById("sumOperand2");
    const result = document.getElementById("resultSum");
    result.textContent = Number(userInput1.value) + Number(userInput2.value);
})

subButton.addEventListener("click", function () {
    const userInput1 = document.getElementById("subOperand1");
    const userInput2 = document.getElementById("subOperand2");
    const result = document.getElementById("resultSub");
    result.textContent = Number(userInput1.value) - Number(userInput2.value);
})

mulButton.addEventListener("click", function () {
    const userInput1 = document.getElementById("mulOperand1");
    const userInput2 = document.getElementById("mulOperand2");
    const result = document.getElementById("resultMul");
    result.textContent = Number(userInput1.value) * Number(userInput2.value);
})

divideButton.addEventListener("click", function () {
    const userInput1 = document.getElementById("divOperand1");
    const userInput2 = document.getElementById("divOperand2");
    const result = document.getElementById("resultDiv");
    result.textContent = Number(userInput1.value) / Number(userInput2.value);
})