let number1 = Number(prompt("Escreva um número:"));
let number2 = Number(prompt("Escreva o segundo número:"));
let operationMath = prompt(
  "Escolha qual operação matemática deseja fazer: 1-Soma/ 2-Subtração/ 3-Multiplicação/ 4-Divisao"
);

switch (operationMath) {
  case "1":
    alert(number1 + number2);
    console.log(number1 + number2);
    break;
  case "2":
    alert(number1 - number2);
    console.log(number1 - number2);
    break;
  case "3":
    alert(number1 * number2);
    console.log(number1 * number2);
    break;
  case "4":
    alert(number1 / number2);
    console.log(number1 / number2);
    break;
  default:
    alert("Opção não permitida!");
    console.log("Opção não permitida!");
}
