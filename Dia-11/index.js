let names = [];
let notes = [];
let confirm = "";
let result = "";
while (confirm !== "2") {
  let studentsNames = prompt("Escreva os nome do estudante: ");
  let studentsNotes = Number(prompt("Escreva a nota da prova:"));
  names.push(studentsNames);
  notes.push(studentsNotes);
  confirm = prompt("Deseja inserir outra nota? 1-sim/2-não");
}

for (let i = 0; i < names.length; i++) {
  console.log(`Nomes dos alunos: ${names[i]} - nota: ${notes[i]}`);
  result += notes[i];
  result = Number(result);
}
console.log(`Soma das notas: ${result}
Média das notas: ${result / names.length}`);
