// 8. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.


let horasTrabalhadas = parseInt(prompt('Digite a quantidade de horas trabalhadas: '))
let valorDaHora = parseInt(prompt('Digite o valor da hora trabalhada: '))

console.log(`Você trabalhou ${horasTrabalhadas} horas este mês e receberá R$ ${horasTrabalhadas * valorDaHora},00`)
