function user() {
  let name = prompt("Qual o seu nome?");
  let salary = parseFloat(prompt("Qual é o seu salário?"));

  calculateIncrease(name, salary);
}

function calculateIncrease(nameUser, salaryUser) {
  let result = "";
  switch (true) {
    case salaryUser <= 1500:
      result = salaryUser * 1.2;
      console.log(`Nome do colaborador: ${nameUser} - salário: ${salaryUser} - 
Porcentagem de aumento: 20% - Salário reajustado: ${result}`);
      break;

    case salaryUser >= 1501 && salaryUser <= 2000:
      result = salaryUser * 1.15;
      console.log(`Nome do colaborador: ${nameUser} - salário: ${salaryUser} - 
Porcentagem de aumento: 15% - Salário reajustado: ${result}`);
      break;

    case salaryUser >= 2001 && salaryUser <= 3000:
      result = salaryUser * 1.1;
      console.log(`Nome do colaborador: ${nameUser} - salário: ${salaryUser} - 
Porcentagem de aumento: 10% - Salário reajustado: ${result}`);
      break;

    case salaryUser >= 3001:
      result = salaryUser * 1.05;
      console.log(`Nome do colaborador: ${nameUser} - salário: ${salaryUser} - 
Porcentagem de aumento: 5% - Salário reajustado: ${result}`);
      break;
    default:
      console.log("Informações incoerentes.");
  }
  continueUser();
}

function continueUser() {
  let questionUser = prompt(
    "Digite 1 caso queira calcular novamente com novas informações:"
  );
  if (questionUser === "1") {
    user();
  } else {
    console.log("Encerrando programa.");
  }
}

user();
