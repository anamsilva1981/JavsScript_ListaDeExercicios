// 10. Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.


let tempCelsius = parseFloat(prompt('Digite a temperatura em Celsius: '));
let tempFahrenheit = ((tempCelsius * 9)/5) + 32 


console.log(`A Temperatura ${tempCelsius} Fahrenheit é relativa a ${tempFahrenheit.toFixed(2)} em Celsius`)