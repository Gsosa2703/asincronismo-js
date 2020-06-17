function sum(num1, num2){
    return num1 + num2
}

function calc(num1, num2, callback){
return callback(num1, num2)

}
console.log(calc(8,2,sum));

function date(callback){
console.log(new Date);
setTimeout( () => {
    let date = new Date;
    callback(date);
}, 3000)
}

function printDate(dateNow){
    console.log(dateNow)
}

date(printDate)

function isOlder(persona1, persona2, callback){
    if(persona1.edad > persona2.edad){
        callback(persona1, persona2)
    }else{
        callback(persona2, persona1)
    }

}

function printOlder(personaMayor, personaMenor) {
    if (personaMayor.edad === personaMenor.edad){
        console.log(`${personaMayor.nombre} y ${personaMenor.nombre} tienen la misma edad`)
    } else {
        console.log(`${personaMayor.nombre} es mayor a ${personaMenor.nombre}`)
    }

}

var gabriela = {
    nombre: 'Gabriela',
    edad: 99
}
var david = {
    nombre: 'David',
    edad: 99
}
isOlder(gabriela, david, printOlder)