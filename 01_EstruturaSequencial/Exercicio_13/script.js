// Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
// Para homens: (72.7*h) - 58
// Para mulheres: (62.1*h) - 44.7


let altura = parseFloat(prompt('Digite sua altura: '))
let sexo = parseInt(prompt('Informe seu SEXO sendo [1] - Mulher ou [2] - Homem'))

if (sexo === 1){
    console.log(`Baseado nas informações coletadas seu peso ideal é: ${((62.1*altura) - 44.7).toFixed(2)}`)
} else {
    console.log(`Baseado nas informações coletadas seu peso ideal é: ${((72.7*altura) - 58).toFixed(2)}.toF`)
}