for (letra of 'Alan-Ensina') {
  console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promise'];

// 'in' informa os indices
for (let i in assuntosEcma) {
  console.log(i);
}

// 'of' informa os conteúdos
for (let assunto of assuntosEcma) {
  console.log(assunto);
}

const assuntosAbordados = new Map([
  ['Map', { abordado: true }],
  ['Set', { abordado: true }],
  ['Promise', { abordado: false }],
]);

for (let assunto of assuntosAbordados) {
  console.log(assunto);
}

for (let chave of assuntosAbordados.keys()) {
  console.log(chave);
}

for (let valor of assuntosAbordados.values()) {
  console.log(valor);
}

for (let [ch, vl] of assuntosAbordados.entries()) {
  console.log(ch, vl);
}

const letras = new Set(['a', 'b', 'c']);

for (let letra of letras) {
  console.log(letra);
}
