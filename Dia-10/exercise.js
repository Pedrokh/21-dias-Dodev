let numbers = [];
let contador = 0;
let numbersUser = Number(
  prompt("Qual a quantidade de elementos deseja inserir no array?")
);

while (numbers.length < numbersUser) {
  let user = Number(prompt("Insira os números: "));
  numbers.push(user);
  contador++;
  alert(`Quantidade de números no array: ${contador}`);
}

console.log(`Array original: ${numbers}
Array ao contrário: ${numbers.reverse()}`);
