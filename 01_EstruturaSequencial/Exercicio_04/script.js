// 4. Faça um Programa que peça as 4 notas bimestrais e mostre a média.

let nota1 = parseInt(prompt('Digite a primeira nota '));
let nota2 = parseInt(prompt('Digite a segunda nota '));
let nota3 = parseInt(prompt('Digite a terceira nota '));
let nota4 = parseInt(prompt('Digite a quarta nota '));

media = ((nota1 + nota2 + nota3 + nota4)/4);

console.log(`A Média entre as notas é ${Math.ceil(media)}`)