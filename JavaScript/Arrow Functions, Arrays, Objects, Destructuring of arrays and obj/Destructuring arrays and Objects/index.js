const numbers = [10, 20, 30];
const [a, b, c] = numbers;
console.log("Input Array is: ", numbers);
console.log("Array Destructuring");
console.log("The Value of a is:", a);
console.log("The Value of b is:", b);
console.log("The Value of c is:", c);

const obj = { num1: 1, num2: 2 };
console.log("Input object is: ", obj);
console.log("Object Destructuring");
const { num1: firstNum, num2: secondNum } = obj;
console.log("The Value of firstNum is:", firstNum);
console.log("The Value of secondNum is:", secondNum);