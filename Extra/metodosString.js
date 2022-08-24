/*
Abaixo, vemos um dos métodos de string nativos do JavaScript em ação, o toLowerCase() que converte todos os caracteres da string informada 
(no caso, input) para letras minúsculas (se forem algarismos, nada é convertido). Você pode conferir mais sobre este método no MDN.
*/

const cidade = "belo horizonte";
const input = "Belo Horizonte";

//toLowerCase - transforma em minusculo
const inputMinusculo = input.toLowerCase();
console.log(inputMinusculo);

//toUpperCase - transforma em maiuscula
const inputMaiusculo = input.toUpperCase();
console.log(inputMaiusculo);
    
console.log(cidade === inputMinusculo); // true


/*
Qualquer inserção de texto que exija uma quantidade mínima de caracteres, como uma senha ou um nome. 
A propriedade length pode ser utilizada para sabermos quantos caracteres uma string contém:
*/

//A própriedade length conta quantos caracteres possuem na variavel
const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres

//documentação MDN: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#methods
