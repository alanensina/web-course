// Tagged template - processar uma template dentro de uma função
function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return 'Outra string';
}

const aluno = 'Alan';
const situacao = 'aprovado';

// Com tagged template:
console.log(tag `${aluno} está ${situacao}.`);

// Sem tagged template:
console.log(`${aluno} está ${situacao}.`);
