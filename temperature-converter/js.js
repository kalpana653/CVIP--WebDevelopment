function convert(type) {
    if (type === 'celsius') {
        let celsiusValue = parseFloat(document.getElementById('celsius').value);
        let fahrenheitValue = (celsiusValue * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheitValue.toFixed(2);
    } else if (type === 'fahrenheit') {
        let fahrenheitValue = parseFloat(document.getElementById('fahrenheit').value);
        let celsiusValue = (fahrenheitValue - 32) * 5/9;
        document.getElementById('celsius').value = celsiusValue.toFixed(2);
    }
}