let nota1 = parseFloat(prompt('Insira a primeira nota:'));
let nota2 = parseFloat(prompt('Insira a segunda nota:'));
let nota3 = parseFloat(prompt('Insira a terceira nota:'));

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
  alert('Por favor, insira apenas números como notas.');
  // Encerra o script
  throw new Error('Entrada de usuário inválida.');
}

let media = (nota1 + nota2 + nota3) / 3;

alert('A média das notas é: ' + media);