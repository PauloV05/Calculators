let operacao = prompt('Escolha uma operação: soma, subtração, multiplicação ou divisão');

if (operacao!= 'soma' && operacao!= 'subtração' && operacao!= 'multiplicação' && operacao!= 'divisão') {
  alert('Operação inválida');
  throw new Error('Operação inválida');
}

let num1 = parseFloat(prompt('Insira o primeiro número'));
let num2 = parseFloat(prompt('Insira o segundo número'));

if (isNaN(num1) || isNaN(num2)) {
  alert('Por favor, insira apenas números.');
  throw new Error('Entrada de usuário inválida.');
}

let resultado;

switch (operacao) {
  case 'soma':
    resultado = num1 + num2;
    break;
  case 'subtração':
    resultado = num1 - num2;
    break;
  case 'multiplicação':
    resultado = num1 * num2;
    break;
  case 'divisão':
    if (num2 == 0) {
      alert('Não é possível dividir por zero.');
      throw new Error('Divisão por zero.');
    }
    resultado = num1 / num2;
    break;
}

alert('O resultado da operação é: ' + resultado);