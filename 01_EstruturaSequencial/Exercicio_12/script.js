// Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58


let altura = parseFloat(prompt('Digite seu peso atual: '));

console.log(`Baseado na sua altura, seu peso ideal é: ${((72.7*altura) - 58).toFixed(2)}`)