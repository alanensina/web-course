// Não aceita repetição e não há índice
const times = new Set();

times.add('Los Angeles Lakers');
times
  .add('Chicago Bulls')
  .add('Detroit Pistons')
  .add('Miami Heat')
  .add('Boston Celtics');
times.add('Miami Heat'); // não irá adicionar pois já está no conjunto.
times
  .add('NY Knicks')
  .add('Philadelphia 76ers')
  .add('Cleveland Cavaliers')
  .add('Toronto Raptors');

console.log(times);
console.log(times.size);
console.log(times.has('ny knicks')); // Retornará falso pois é sensitive case
console.log(times.has('NY Knicks'));
times.delete('Detroit Pistons');
console.log(times.has('Detroit Pistons'));
console.log(times);

const jogadores = ['Jordan', 'LeBron', 'Kobe', 'Shaq', 'Jordan'];
const jogadoresSet = new Set(jogadores);
console.log(jogadoresSet);
