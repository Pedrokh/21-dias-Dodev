//Recebe números e mostra-os com seus índices.

let numbers = [];
let contador = 0;

while (contador < 5) {
  let numbersOfArray = Number(prompt("Escreva um número inteiro e positivo: "));
  numbers[contador] = numbersOfArray;

  console.log(`Número no índice - ${contador} - ${numbers[contador]}`);

  contador++;
}
