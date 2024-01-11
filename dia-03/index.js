let name = prompt("Qual é o seu nome?");
let age = Number(prompt("Qual é a sua idade?"));
let height = Number(prompt("Qual é a sua altura?"));
let weight = Number(prompt("Qual é o seu peso?"));

let birthYear = 2024 - age;
let IMC = weight / (height * height);

console.log(
  `Olá ${name}, você tem ${age} anos, nasceu em ${birthYear}, tem ${height} de altura, pesa ${weight}kg, seu IMC é ${IMC} Kg/m2.`
);
