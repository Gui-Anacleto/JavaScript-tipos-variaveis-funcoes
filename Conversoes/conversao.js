// tipo de dado
// booleans

// conversão implicita
const numero = 456;
const numeroString = Number("456");
const numeroString1 = Number("456a");

console.log(numero === numeroString);
console.log(numero == numeroString); // implicita

console.log(typeof(numero + numeroString));

// conversão explicita
// Number()
// String()

//console.log(numero + Number(numeroString));
console.log(numero + numeroString);

console.log(typeof(numero + numeroString1));
console.log(numero + numeroString1);

//outra opção 

let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); 

// o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

//Mais exemplos

// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); 
// teremos a conversão de String para números, possibilitando a realização da da multiplicação

// Podemos usar o operador de soma + para fazer a conversão de textos para números, colocando-os antes das variáveis:
let largura1 = "10";
let altura1 = "5";
console.log( + largura1 * + altura1); 
// teremos a conversão de String para números realizado usando o + antes das variáveis

//NaN
let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN

let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.

/**
 Dica de boas práticas: Apesar do JavaScript fazer a maioria das conversões de forma correta, problemas podem aparecer, 
 então é sempre bom fazer as conversões de forma explícita. Não é comum usar o operador de soma para fazer a conversão para números, 
 mas este uso é possível. Conversões de booleanos não costumam ser muito usados, mas são possíveis.
 */