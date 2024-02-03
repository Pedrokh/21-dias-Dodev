class Race {
  Name;
  Type;
  Distance;
  Drivers;
  Winner;

  constructor(name, type, distance) {
    this.Name = name;
    this.Type = type;
    this.Distance = distance;
    this.Drivers = [];
    this.Winner = "";
  }

  defineWinner() {
    let lessTime = this.Drivers[0].calculateRouteTime(this.Distance);
    let winnerCar = this.Drivers[0];

    for (let i = 1; i < this.Drivers.length; i++) {
      let time = this.Drivers[i].calculateRouteTime(this.Distance);
      if (time < lessTime) {
        time = lessTime;
        winnerCar = this.Drivers[i];
      }
    }
    return (this.Winner = winnerCar);
  }

  winnerOfTheRace() {
    console.log(`O vencedor da corrida é ${this.Winner.Name}.`);
  }
}

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
    return result;
  }
}

let race = new Race("Interlagos", "Formula 1", 6000);

race.Drivers[0] = new Car("Opala", 300, 250, 4);
race.Drivers[1] = new Car("Monza", 350, 300, 3);
race.Drivers[2] = new Car("Maverick", 500, 330, 2);

race.defineWinner();
race.winnerOfTheRace();
