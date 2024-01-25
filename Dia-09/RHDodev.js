let nameUser = prompt("Escreva seu nome: ");
let age = Number(prompt("Escreva sua idade: "));
let salary = Number(prompt("Qual é o seu salário atual?"));
let confirmUser = prompt(`Por favor confirme as informações - 
Nome: ${nameUser}
Idade: ${age}
Salário atual: ${salary}
As informações estão corretas? (1-Sim/2-Não)`);

while (confirmUser === "2") {
  nameUser = prompt("Escreva seu nome: ");
  age = Number(prompt("Escreva sua idade: "));
  salary = Number(prompt("Qual é o seu salário atual?"));
  confirmUser = prompt(`Por favor confirme as informações - 
Nome: ${nameUser}
Idade: ${age}
Salário atual: ${salary}
As informações estão corretas? (1-Sim/2-Não)`);
}

let year = 2023;
let porcentageOfBonus = 1.5 / 100;

for (let i = 0; i < 10; i++) {
  if (i === 0) {
    salary *= 1 + porcentageOfBonus;
  } else {
    salary *= 1 + porcentageOfBonus * 2;
  }
  console.log(`Ano ${year + i} - salário ${salary.toFixed(2)}`);
}
