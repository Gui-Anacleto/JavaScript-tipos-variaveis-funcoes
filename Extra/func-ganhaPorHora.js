function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 

    return salarioHora;
}

console.log(ganhoPorHora(3000,176)); 

//U sando Math.round()

function ganhoPorHoraMathRound(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    return Math.round(salarioHora);
  
}

//método Math.round() retorna o valor de um número arredondado para o inteiro mais próximo.
console.log(ganhoPorHoraMathRound(3000,176)); 

//Formatando o resultado com ajuda do método toFixed()

function ganhoPorHoraToFixed(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
    //método .toFixed() eu consigo controlar o número de casas decimais após a vírgula
    const total = salarioHora.toFixed(2);
  
    return total;
  
  };
console.log(ganhoPorHoraToFixed(3000,176)); 

//Formatando o resultado para Real R$
/**
 *
No JavaScript temos um método chamado toLocaleString() que converte um número para uma string, 
já tratando a questão do arredondamento e convertendo para a moeda do país que queremos, no nosso caso, 
o real, tornando a tarefa do programador muito mais simples.

O método toLocaleString() recebe alguns argumento - um objeto literal com as propriedades -, no meu caso 
eu utilizei:

    style : Que é o estilo do formato a ser utilizado, aqui é permitido usar:

        - decimal para representar números simples.

        - currency que diz respeito ao formato monetário e que vai indicar a moeda que vai ser utilizada.

        - percent para formato percentual.

    currency: A moeda para usar na formatação monetária 
 */

function ganhoPorHoraToLocaleString(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
    
    const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    return formatado;
    
}

console.log(ganhoPorHoraToLocaleString(3000,176)); 

/**
 * Para saber mais
No JavaScript temos outros métodos que podem ser utilizadas para o arredondamento como:

    Math.ceil() que retorna o maior número inteiro que é maior que o número passado, 
    por exemplo Math.ceil(11.123), o valor fica 12

    Math.floor() que retorna o menor número inteiro que é menor que o número passado, 
    por exemplo Math.floor(11.789), o valor fica 11
 */