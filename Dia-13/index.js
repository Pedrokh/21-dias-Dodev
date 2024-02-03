class Computer {
  type;
  processor;
  video;
  storage;
  ram;
  ssd;

  constructor(type, processor, video, storage, ram, ssd) {
    this.type = type;
    this.processor = processor;
    this.video = video;
    this.storage = storage;
    this.ram = ram;
    this.ssd = ssd;
  }

  settings() {
    console.log(`O tipo do meu computador é ${this.type}, tem um processador ${this.processor}, video ${this.video}, memoria de ${this.storage} GB e ${this.ram} GB de memória RAM.
Possui SSD: ${this.ssd}`);
  }
}

let type = prompt("Qual é o seu tipo de computador? (desktop ou notebook)");
let processor = prompt("Nome do seu processador: (ex: Ryzen 5)");
let video = prompt("Video Integrado ou Dedicado? ");
let storage = parseInt(prompt("Número em GB de memória: (ex: 500 ou 1000)"));
let ram = parseInt(prompt("Número em GB de memória RAM: (ex: 4, 8 ou 16)"));
let ssd = prompt("Seu computador tem SSD?");

let computer = new Computer(type, processor, video, storage, ram, ssd);

computer.settings();
