function verificaNumero(numero) {

    if (numero > 10) {
      return 'número maior que 10';
    } else {
      return 'número não é maior que 10';
    }
}
   
console.log(verificaNumero(9)) //número não é maior que 10

//exemplos
const num = 15;

if (num >= 0 && num <= 10) {
  console.log('número entre zero e dez');
} else if (num > 10 && num <= 20) {
  console.log('número entre dez e vinte');
} else if (num > 20 && num <= 30) {
  console.log('número entre vinte e trinta');
} else {
  console.log('outro número');
}