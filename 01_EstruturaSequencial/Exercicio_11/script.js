// 11 Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
// o produto do dobro do primeiro com metade do segundo .
// a soma do triplo do primeiro com o terceiro.
// o terceiro elevado ao cubo.

let firstNumber = parseInt(prompt('Digite o primeiro numero: '));
let secondNumber = parseInt(prompt('Digite o primeiro numero: '));

console.log(`o produto do dobro do primeiro com metade do segundo é: ${((firstNumber*2)+(secondNumber/2))}`);
console.log(`A soma do triplo do primeiro com o terceiro.: ${((firstNumber*3)+secondNumber)}`);
console.log(`O terceiro elevado ao cubo: ${secondNumber**2}`);