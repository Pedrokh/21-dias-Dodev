let names = [];
let password = [];
let confirm = true;

while (confirm) {
  let questionUser = prompt(`Escolha alguma das opções: 1-Cadastrar;
  2-Fazer login;
  3-Excluir um cadastro;
  4-Sair do programa.`);

  switch (questionUser) {
    case "1":
      let nameUser = prompt("Escreva um nome de usuário:");
      let passwordUser = prompt("Escreva um senha: ");
      names.push(nameUser);
      password.push(passwordUser);
      break;

    case "2":
      let loginName = prompt("Escreva seu login ou nome de usuário:");
      let loginPassword = prompt("Escreva sua senha:");

      login(loginName, loginPassword);
      break;

    case "3":
      let nameToExclude = prompt(
        "Escreva o nome de usuário que deseja excluir: "
      );
      let passwordToExclude = prompt(
        "Escreva a senha do usuário que deseja excluir: "
      );

      exclude(nameToExclude, passwordToExclude);
      break;

    case "4":
      alert(`Saindo do programa!`);
      confirm = false;
      break;

    default:
      alert(`Opção inválida!`);
  }
}

function login(nameUser, passwordUser) {
  let accountFound = false;
  for (let i = 0; i < names.length; i++) {
    if (names[i] === nameUser && password[i] === passwordUser) {
      accountFound = true;
      break;
    }
  }

  if (accountFound) {
    alert(`Sucesso! Conta encontrada.`);
  } else {
    alert(`Usuário ou senha incorreto.`);
  }
}

function exclude(nameUser, passwordUser) {
  let accountFound = false;
  for (let i = 0; i < names.length; i++) {
    if (names[i] === nameUser && password[i] === passwordUser) {
      accountFound = true;
      break;
    }
  }
  let indexToRemove = names.indexOf(nameUser);
  let indexToRemovePassword = password.indexOf(passwordUser);

  names.splice(indexToRemove, 1);
  password.splice(indexToRemovePassword, 1);
  console.log(`Nomes de usuários: ${names} - Senhas: ${password}`);
}
