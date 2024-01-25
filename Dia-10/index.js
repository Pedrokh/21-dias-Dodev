let numbers = [];
let keep = true;
let counting = 0;

while (keep) {
  let positiveNumber = Number(prompt("Escreva um número inteiro e positivo: "));
  numbers[counting] = positiveNumber;

  let question = prompt("Deseja continuar? (1-sim/2-não)");

  if (question !== "1" || counting === 10) {
    keep = false;
    counting++;

    console.log(numbers[]);
  }
}
