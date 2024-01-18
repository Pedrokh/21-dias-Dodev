let somaDasNotas = 0;
let qtdAlunos = 0;
let qtdHomens = 0;
let qtdMulheresAcima7 = 0;
let maiorNotaHomens = 0;

let continuarCadastro = true;

while (continuarCadastro) {
  let nota = Number(prompt("Digite a nota do aluno: "));
  let sexo = prompt("Digite o sexo do aluno (M/F): ").toUpperCase();

  somaDasNotas += nota;
  qtdAlunos++;

  if (sexo === "M") {
    qtdHomens++;
    if (nota > maiorNotaHomens) {
      maiorNotaHomens = nota;
    }
  } else if (sexo === "F" && nota > 7) {
    qtdMulheresAcima7++;
  }

  let resposta = prompt("Deseja cadastrar outra nota? (S/N): ").toUpperCase();
  continuarCadastro = resposta === "S";
}

let mediaGeral = somaDasNotas / qtdAlunos;

console.log("\nResultados:");
console.log(`Média geral dos alunos: ${mediaGeral.toFixed(2)}`);
console.log(`Quantidade de homens: ${qtdHomens}`);
console.log(`Quantidade de mulheres com nota acima de 7: ${qtdMulheresAcima7}`);
console.log(`Maior nota entre os homens: ${maiorNotaHomens}`);

//Lançamento de notas de provas.
