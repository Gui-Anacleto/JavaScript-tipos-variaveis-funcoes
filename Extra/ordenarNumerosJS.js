var lista = [10,1, 5, 9, 8, 12, 15];

console.log(lista.sort());

/*
A grande questão é que a função sort() usa por padrão a ordenação alfabética baseada na tabela Unicode. Apesar de inesperado isso está documentado. A solução é usar a nossa própria função de comparação.
*/

/*
Implementando função de comparação

O sort recebe opcionalmente uma função de comparação que, dados dois valores, deve devolver um número inteiro:

    Se for 0 indica que são iguais
    Se for -1 indica que o primeiro valor é menor
    Se for 1, o segundo é menor.  
 */

function comparaNumeros(a,b) { 
    if (a == b) 
    return 0; 
    if (a < b) 
    return -1; 
    if (a > b) 
    return 1; }

console.log(lista.sort(comparaNumeros));

//Simplificando !
//Arrow function
lista.sort((a, b) => a - b);

console.log(lista.sort((a, b) => a - b));


