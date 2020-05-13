// Uma factory retorna uma nova instância
module.exports = () => {
  return {
    valor: 0,
    inc(){
      this.valor++;
    }
  }
}