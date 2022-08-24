//forma classica

function  apresentar(nome){
    return `Meu nome é ${nome}`
}

//Arrow function
const apresentarArrow = nome => `Meu nome é ${nome}`;

const soma = (num1,num2) => num1+num2;

const somaNumPequenos = (num1,num2) => {
    if (num1 || num2 >= 10){
        return "Somente numeros de 0 a 10"
    }else{
        return num1 + num2
    }
}