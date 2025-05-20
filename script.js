document.addEventListener('DOMContentLoaded', () => {
    // Get elements from the DOM
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const addButton = document.getElementById('addButton');
    const subtractButton = document.getElementById('subtractButton');
    const resultDisplay = document.getElementById('result');

    // Function to perform calculation
    function calculate(operation) {
        const number1 = parseFloat(num1Input.value);
        const number2 = parseFloat(num2Input.value);

        // Basic validation
        if (isNaN(number1) || isNaN(number2)) {
            resultDisplay.textContent = 'Result: Please enter valid numbers.';
            return;
        }

        let calculationResult;
        if (operation === 'add') {
            calculationResult = number1 + number2;
        } else if (operation === 'subtract') {
            calculationResult = number1 - number2;
        } else {
            resultDisplay.textContent = 'Result: Invalid operation.';
            return;
        }

        resultDisplay.textContent = 'Result: ' + calculationResult;
    }

    // Add event listeners to buttons
    if (addButton) {
        addButton.addEventListener('click', () => {
            calculate('add');
        });
    }

    if (subtractButton) {
        subtractButton.addEventListener('click', () => {
            calculate('subtract');
        });
    }
});