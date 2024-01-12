let name = prompt("Qual é o seu nome?");
let age = Number(prompt("Qual a sua idade?"));
let driversLicense = prompt("Possui carteira de motorista? (sim/não)");
let car = prompt("Possui um automóvel? (sim/não)");

if (age < 18 || driversLicense === "não") {
  console.log(`${name}, você não pode dirigir.`);
} else if (age >= 18 && driversLicense === "sim" && car === "não") {
  console.log(`${name}, você pode dirigir mas não tem um carro.`);
} else if (age >= 18 && driversLicense === "sim" && car === "sim") {
  console.log(`${name}, você será o motorista!`);
}
