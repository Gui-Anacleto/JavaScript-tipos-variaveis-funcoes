/*

//Declaração de funcão

function soma(num1, num2){
    return num1+num2;
}

console.log(soma(5,5));

*/
// expressão de função
// Não tem nome, utiliza o nome da variavel, e SE COMPORTA COMO UMA VARIAVEL.
const soma = function(num1, num2){return num1 + num2}
console.log(soma(5,5))

// diferença principal
console.log(apresentar())
function apresentar(){
    return "Olá"
}