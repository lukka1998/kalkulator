// შევიყვანოთ მონაცემები
var num1 = parseFloat(prompt("Enter the first number:"));
var operator = prompt("Enter the operator (+, -, *, /):");
var num2 = parseFloat(prompt("Enter the second number:"));

// Perform the calculation based on the operator
var result;
if (operator === '+') { //ვამოწმებთ თუ რა ოპერაცია აირჩია მომხარებელმა,რათმაუნდა შეგვიძლია სხვა ოპერატორებიც დავამატოთ სურვილისამებრ
    result = num1 + num2;
} else if (operator === '-') {
    result = num1 - num2;
} else if (operator === '*') {
    result = num1 * num2;
} else if (operator === '/') {
    result = num1 / num2;
} else {//თუ მომხარებელი სხვა სიმბოლოს ჩაწერს შეცდომით ან არასწორად შედეგი იქნება არავალიდური
    result = "Invalid operator";
}

// Display the result
console.log("Result: " + result);