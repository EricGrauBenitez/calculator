function addToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearCalculator() {
    const display = document.getElementById('display');
    display.value = ''
}

function calculate() {
    const expression = document.getElementById('display').value;

    try {
        const result = eval(expression); // Evaluar la expresión
        document.getElementById('display').value = result; // Mostrar el resultado
    } catch (error) {
        document.getElementById('display').value = 'Error'; // Manejo de errores
    }
}