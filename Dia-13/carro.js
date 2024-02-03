class Car {
  Name;
  HorsePower;
  MaxVelocity;
  Acceleration;

  constructor(name, horsePower, maxVelocity, acceleration) {
    this.Name = name;
    this.HorsePower = horsePower;
    this.MaxVelocity = maxVelocity;
    this.Acceleration = acceleration;
  }

  calculateRouteTime(distance) {
    let result = distance / (this.HorsePower / this.Acceleration);
    return console.log(
      `Seu carro alcança um distância de ${distance} metros em ${result} segundos.`
    );
  }
}

let confirm = true;

while (confirm) {
  let nameUser = prompt(
    "Qual a equipe do carro ? (Ferrari, Mercedes, McLaren, etc)"
  );
  let horsePowerUser = parseInt(
    prompt("Qual o número de cavalos de potência do carro ?")
  );
  let maxVelocityUser = parseInt(prompt("Qual a velocidade máxima do carro ?"));
  let acelerationUser = parseFloat(
    prompt("Quanto tempo em segundos o carro vai de 0 a 100 km/h ?")
  );
  let distanceUser = parseFloat(
    prompt(
      "Escreva um distância em metros para calcular em quanto tempo seu carro pode alcançá-la:"
    )
  );

  let carUser = new Car(
    nameUser,
    horsePowerUser,
    maxVelocityUser,
    acelerationUser
  );

  console.log(carUser);
  carUser.calculateRouteTime(distanceUser);

  let confirmUser = prompt("Digite 1 se desejar cadastrar outro carro.");

  if (confirmUser !== "1") {
    confirm = false;
  }
}
