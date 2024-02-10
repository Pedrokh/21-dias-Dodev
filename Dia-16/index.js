let names = [];
let passwords = [];
let user = "";
let confirmationLoop = true;

function questionUser() {
  user = prompt(
    "O que você deseja fazer: 1-Cadastrar / 2-Fazer login / 3-Excluir um cadastro / 4-Encerrar programa."
  );
  return user;
}

function register() {
  let nameUser = prompt("Qual é o nome de usuário?");
  let passwordUser = prompt("Escreva uma senha: ");

  names.push(nameUser);
  passwords.push(passwordUser);
}

function login(user, password) {
  let confirmation = names.includes(user);

  if (confirmation) {
    let passConfirmation = passwords.includes(password);
    if (passConfirmation) {
      console.log(true);
      alert("Login feito com sucesso");
    } else {
      console.log(false);
      alert("Nome ou senha incorretos!");
    }
  } else {
    console.log(false);
    alert("Nome ou senha incorretos!");
  }
}

function deleteUser(nameUser) {
  let excludeUser = names.indexOf(nameUser);

  if (excludeUser !== -1) {
    names.splice(excludeUser, 1);
    passwords.splice(excludeUser, 1);
    alert("Usuário excluído com sucesso!");
  } else {
    alert("Nome de usuário não encontrado!");
  }
}

while (confirmationLoop) {
  questionUser();
  switch (user) {
    case "1":
      register();
      break;

    case "2":
      let promptName = prompt("Escreva seu nome de usuário:");
      let promptPass = prompt("Escreva sua senha:");
      login(promptName, promptPass);
      break;

    case "3":
      let deleteUsername = prompt(
        "Escreva seu nome de usuário para excluirmos sua conta:"
      );
      deleteUser(deleteUsername);
      break;

    case "4":
      alert("Encerrando programa!");
      confirmationLoop = false;
      break;

    default:
      alert("Opção inválida!");
  }
}
