let numbers = [];
let contador = 0;

while (numbers.length < 5) {
  let FiveNumbers = Number(prompt("Escreva 5 números para popular o array:"));
  numbers.push(FiveNumbers);
  contador++;
  alert(`Quantidade de números no array: ${contador}`);
}
console.log(`Array original: ${numbers}
Array ao contrário: ${numbers.reverse()}`);
