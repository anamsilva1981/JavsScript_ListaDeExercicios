// Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.


let metros = parseFloat(prompt('Digite os metros quadrados do espaço a ser pintado'));
let lata = 54;
let preco = 80;


document.write(`Quantidade de metros que serão pintados ${metros} \n`)
document.write(`Quantidade de latas necessárias ${Math.ceil(metros / lata)} \n`)
document.write(`Quantidade Valor gasto com a tinta ${Math.ceil((metros / lata))*preco} \n`)