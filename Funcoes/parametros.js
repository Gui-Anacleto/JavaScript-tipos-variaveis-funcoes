// parametros de função

function soma(num1,num2){
    return num1+num2
}

console.log(soma(2,2));
console.log(soma(120,250));
console.log(soma(-500,1000));

// ordem dos parametros

function multiplica(num1=1, num2=1){
    return num1*num2
}
                          //5    *     5
console.log(multiplica(soma(2,3),soma(10,-5)));

//parametros x argumentos

// ordem dos parametros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome}, tenho ${idade} anos.`;
}

console.log(nomeIdade("Guilherme", 22));

function optimaTempo(tempoMax,tempoAce){
    return tempoMax/tempoAce
}
console.log(optimaTempo(12,1.5))