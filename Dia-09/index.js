//Colocando em prática - Switch Case + Loop + IF/ELSE

let nameUser = prompt("Escreva seu nome: ");
let age = Number(prompt("Escreva sua idade: "));
let yearOfBirthday = Number(prompt("Em que ano você nasceu?"));
let height = Number(prompt("Escreva sua altura: (em metros)"));
let weight = Number(prompt("Escreva seu peso: (em kg)"));
let profession = prompt("Escreva sua profissão: ");

console.log(
  `Olá ${nameUser}, você tem ${age} anos, é ${profession}, tem ${height}M de altura e pesa ${weight}kg.`
);

if (age >= 18) {
  console.log("Está liberado para tomar umas geladas!");
} else {
  console.log("Sem gelada para você!");
}

function ageUser(ageInYears) {
  let ageInMonths = ageInYears * 12;
  let ageInWeeks = ageInYears * 52;
  let ageInDays = ageInYears * 365;

  console.log(`Sua idade em meses: ${ageInMonths} 
Sua idade em semanas: ${ageInWeeks} 
Sua idade em dias: ${ageInDays}`);
}
ageUser(age);

function IMCUser(weightUser, heightUser) {
  let imc = (weightUser / heightUser) * heightUser;

  switch (imc) {
    case imc < 18.5:
      console.log(`Resultado: ${imc}
                   Magreza, seu IMC é menor que 18,5 kg/m2;`);
      break;

    case imc > 18.5 && imc < 24.9:
      console.log(`Resultado: ${imc}
                   Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;`);
      break;

    case imc > 24.9 && imc < 30:
      console.log(`Resultado: ${imc}
                   Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;`);
      break;

    case imc > 30:
      console.log(`Resultado: ${imc}
                   Obesidade, quando o resultado é maior que 30 kg/m2.`);
      break;
    default:
      console.log("Resultado inconclusivo!");
  }
}

IMCUser(weight, height);

function descoveryYearOfBirthday(ageUser) {
  let result = 2024 - ageUser;
  return console.log(
    `Descobrindo seu ano de nascimento através da sua idade: ${result}.`
  );
}
descoveryYearOfBirthday(age);

for (let i = 0; i <= age; i++) {
  let year = yearOfBirthday + i;
  console.log(`Ano: ${year} - ${i} anos de idade.`);
}

let question = prompt(
  `Deseja inserir novos dados ou finalizar o programa? (1-Continuar/2-Finalizar)`
);

while (question === "1") {
  nameUser = prompt("Escreva seu nome: ");
  age = Number(prompt("Escreva sua idade: "));
  yearOfBirthday = Number(prompt("Em que ano você nasceu?"));
  height = Number(prompt("Escreva sua altura: (em metros)"));
  weight = Number(prompt("Escreva seu peso: (em kg)"));
  profession = prompt("Escreva sua profissão: ");

  console.log(
    `Olá ${nameUser}, você tem ${age} anos, é ${profession}, tem ${height}M de altura e pesa ${weight}kg.`
  );

  if (age >= 18) {
    console.log("Está liberado para tomar umas geladas!");
  } else {
    console.log("Sem gelada para você!");
  }

  ageUser(age);
  IMCUser(weight, height);
  descoveryYearOfBirthday(age);

  for (let i = 0; i <= age; i++) {
    let year = yearOfBirthday + i;
    console.log(`Ano: ${year} - ${i} anos de idade.`);
  }

  question = prompt(
    `Deseja inserir novos dados ou finalizar o programa? (1-Continuar/2-Finalizar)`
  );
}
