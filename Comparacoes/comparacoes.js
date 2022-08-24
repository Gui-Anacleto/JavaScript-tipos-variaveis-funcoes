// == (comparação implicita)

const num1 = 1;
const txt1 = "1";

console.log(num1 == txt1); //true

console.log(num1 === txt1); //false

//typeof

console.log(typeof num1);
console.log(typeof txt1);

// == só compara o valor
// === compara o valor e o tipe de dado

//conversão explicita

Number();
String();

//Outros tipos de operadores:

/**
||: Operador “ou”, retorna true caso uma condição seja válida;
&&: Operador “e”, retorna true somente se todas as condições forem válidas;
!= e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false.
 */