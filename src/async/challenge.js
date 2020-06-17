const fetchData = require('../utils/fechData');
const API = "https://rickandmortyapi.com/api/character/"

const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        const character = await fetchData(`${API}${data.results[0].id}`)
        const origin = await fetchData(character.origin.url);
        console.log(data.info.count)
        console.log(character.name)
        console.log(origin.dimension)
    } catch (err) {
        console.error(err)
    }
}

console.log('Before')
anotherFunction(API)
console.log('After')





/*
Callback 

Ventajas 

Cuando una funcion recibe otra funcion significa que va a ejecutarse sin ningun problema 
Son universales, corren en cualquier navegador.Nos da garantia que se va a correr en cualquier lado

Desventajas

La composicion es tosca, ya que se anida una funcion dentro de otra
Llega a ser compleja y se llega a un Callback Hell lo cual no podria ser soportada para el desarrollador ya que 
no se puede entender.
Flujo poco intuitivo 


Promesas

Ventajas

Facilmente enlazables con los then y return  
Es mas intituitivo 
Es mas facil de leer
Es poderoso, nos permite tener una gran capacidad de trabajar con asincronismo

Deesventaja

NO maneja excepciones 
Podemos ser propensos a errores si no retornamos el siguiente llamado
Requiere un polyfill para funcionar en todos los navegadores se tiene que transpilar el codigo
con una herramienta para que pueda correr en todos los navegadores

Async Await 

Ventajas
Se usa el try/catch y se pueden manejar las excepciones y poder trabajar de manera fluida en la construccion
del programa
Se pueden leer mejor 

Desventajas
Se tiene que esperar por cada uno de los llamados
Si se quieren hacer otros llamados hay que esperar que los await se ejecuten 
Requiere Polyfill como las promesas 



*/