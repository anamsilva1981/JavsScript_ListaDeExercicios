// 9. Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
// C = 5 * ((F-32) / 9).


let tempFahrenheit = parseFloat(prompt('Digite a temperatura em Fahrenheit: '))
let tempCelsius = 5 * ((tempFahrenheit-32) / 9);

console.log(`A Temperatura ${tempFahrenheit} Fahrenheit é relativa a ${tempCelsius.toFixed(2)} em Celsius`)