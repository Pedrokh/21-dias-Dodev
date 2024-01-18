let balance = 1500;
let withdrawalAndDeposit = 0;
let quantityOfValues = 0;
let AllValues = 0;
let userResponse = "";
let userName = "";
let documentBR = "";

do {
  userName = prompt("Qual é o seu nome?");
  documentBR = prompt("Qual é o seu CPF?");
  let value = Number(prompt("Escreva o valor que deseja sacar ou depositar:"));
  let option = prompt(
    "Você deseja sacar ou depositar esse valor?"
  ).toUpperCase();

  if (option === "SACAR" && balance > 0 && value > 0) {
    balance -= value;
    quantityOfValues++;
    AllValues += value;
    if (value > withdrawalAndDeposit) {
      withdrawalAndDeposit = value;
    }
  } else if (option === "DEPOSITAR" && value > 0) {
    balance += value;
    quantityOfValues++;
    AllValues += value;

    if (value > withdrawalAndDeposit) {
      withdrawalAndDeposit = value;
    }
  }

  userResponse = Number(prompt("Deseja continuar? 1-Sim/2-Não"));
} while (userResponse === 1);

console.log(`Saldo total: ${balance}`);
console.log(`Maior valor inserido: ${withdrawalAndDeposit}`);
console.log(`Media dos valores inseridos: ${AllValues / quantityOfValues}`);

//Caixa eletrônico simples
