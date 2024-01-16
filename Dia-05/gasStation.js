let station = prompt(
  "Escolha uma das opções: 1-Abastecer com gasolina / 2-Abastecer com álcool / 3-Calibrar os pneus"
);

switch (station) {
  case "1":
    let value = Number(prompt("Qual valor deseja colocar?"));
    let liters = value / 5;
    alert(`Você abasteceu ${liters.toFixed(2)} litros de gasolina.`);
    break;

  case "2":
    let valueAlcohol = Number(prompt("Qual valor deseja colocar?"));
    let litersAlcohol = valueAlcohol / 3;
    alert(`Você abasteceu ${litersAlcohol.toFixed(2)} litros de álcool.`);
    break;

  case "3":
    alert("Pneus calibrados com sucesso!");
    break;
  default:
    alert("Opção inválida!");
}
