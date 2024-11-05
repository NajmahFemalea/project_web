const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate() {
    let expression = display.value;
    
    try {
        if (expression.includes('sin')) {
            let angle = parseFloat(expression.replace('sin', ''));
            display.value = Math.sin(angle * Math.PI / 180); // Konversi ke radian
        } else if (expression.includes('cos')) {
            let angle = parseFloat(expression.replace('cos', ''));
            display.value = Math.cos(angle * Math.PI / 180); // Konversi ke radian
        } else if (expression.includes('tan')) {
            let angle = parseFloat(expression.replace('tan', ''));
            display.value = Math.tan(angle * Math.PI / 180); // Konversi ke radian
        } else if (expression.includes('√')) {
            let number = parseFloat(expression.replace('√', ''));
            display.value = Math.sqrt(number);
        } else if (expression.includes('²')) {
            let base = parseFloat(expression.replace('²', ''));
            display.value = Math.pow(base, 2);
        } else if (expression.includes('%')) {
            display.value = eval(expression) / 100;
        } else if (expression.includes('mod')) {
            let [num1, num2] = expression.split('mod').map(Number);
            display.value = num1 % num2;
        } else {
            display.value = eval(expression);
        }
    } catch (error) {
        display.value = "Error!";
    }
}