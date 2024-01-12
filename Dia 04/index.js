let hungry = prompt("Você está com fome? (sim/não)");
let money = prompt("Você tem dinheiro? (sim/não)");
let restaurant = prompt("O restaurante está aberto? (sim/não)");

if (hungry === "não" || money === "não") {
  console.log("Hoje a janta será em casa!");
} else if (hungry === "sim" && money === "sim" && restaurant === "não") {
  console.log("Peça um delivery!");
} else if (hungry === "sim" && money === "sim" && restaurant === "sim") {
  console.log("Hoje o jantar será no seu restaurante preferido!");
}
