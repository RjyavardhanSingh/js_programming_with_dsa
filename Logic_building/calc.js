function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

while(true){
    console.log("----- Calculator -----");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Exit");

    const choice = prompt("Choose an operation (1-5): ");
    if (!["1", "2", "3", "4", "5"].includes(choice)) {
        console.log("Invalid choice. Please try again.");
        continue;
    }
    let num1, num2, result;

    switch (choice) {
    case "1":
        num1 = parseFloat(prompt("Enter the first number"));
        num2 = parseFloat(prompt("Enter the second number"));
        result = add(num1, num2);
        console.log(`Result: ${result}`);
        break;
    case "2":
        num1 = parseFloat(prompt("Enter the first number"));
        num2 = parseFloat(prompt("Enter the second number"));
        result = subtract(num1, num2);
        console.log(`Result: ${result}`);
        break;
    case "3":
        num1 = parseFloat(prompt("Enter the first number"));
        num2 = parseFloat(prompt("Enter the second number"));
        result = multiply(num1, num2);
        console.log(`Result: ${result}`);
        break;
    case "4":
        num1 = parseFloat(prompt("Enter the first number"));
        num2 = parseFloat(prompt("Enter the second number"));
        try {
            result = divide(num1, num2);
            console.log(`Result: ${result}`);
        } catch (error) {
            console.error(error.message);
        }
        break;
    case "5":
        console.log("Exiting the calculator. Goodbye!");
        process.exit(0);
        break;
    default:
        break;
}


    
}







