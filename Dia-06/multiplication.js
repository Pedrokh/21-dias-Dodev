let multiplicationNumber = Number(
  prompt("Escreva o número que deseja multiplicar:")
);

for (let i = 0; i <= 10; i++) {
  console.log(`${multiplicationNumber} x ${i} = ${multiplicationNumber * i} `);
}

for (let i = 0; i <= 10; i++) {
  console.log(
    `Tabuada do número seguinte: ${multiplicationNumber + 1} x ${i} = ${
      (multiplicationNumber + 1) * i
    } `
  );
}

for (let i = 0; i <= 10; i++) {
  console.log(
    `Tabuada dois número á frente: ${multiplicationNumber + 2} x ${i} = ${
      (multiplicationNumber + 2) * i
    } `
  );
}

//Tabuada do número solicitado e tabuado dos dois próximos números.
