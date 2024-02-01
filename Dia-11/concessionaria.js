function bubbleSort(arr, arr2, arr3) {
  let trocado;
  do {
    trocado = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr3[i] > arr3[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        temp = arr2[i];
        arr2[i] = arr2[i + 1];
        arr2[i + 1] = temp;

        temp = arr3[i];
        arr3[i] = arr3[i + 1];
        arr3[i + 1] = temp;

        trocado = true;
      }
    }
  } while (trocado);
}

let modelOfCar = [];
let yearsOfTheCar = [];
let valuesOfTheCar = [];
let confirmation = "";

while (confirmation !== "2") {
  let carUser = prompt("Qual o modelo do carro?");
  let year = Number(prompt("Qual o ano do carro?"));
  let values = parseFloat(prompt("Qual o valor do carro?"));

  modelOfCar.push(carUser);
  yearsOfTheCar.push(year);
  valuesOfTheCar.push(values);
  confirmation = prompt("Deseja continuar cadastrando? 1-sim/2-não");
}

bubbleSort(modelOfCar, yearsOfTheCar, valuesOfTheCar);

for (let i = 0; i < modelOfCar.length; i++) {
  console.log(
    `Modelo do carro: ${modelOfCar[i]} - Ano do carro: ${yearsOfTheCar[i]} - Valor do carro: ${valuesOfTheCar[i]} mil reais`
  );
}
console.log(modelOfCar);
console.log(yearsOfTheCar);
console.log(valuesOfTheCar);
