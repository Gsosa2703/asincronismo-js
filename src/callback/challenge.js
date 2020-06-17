// PETICIONES A APIS USANDO Callbacks 


//La implementacion se esta ejecutando sobre node ya que nada se esta ejecutando en el navegador,
//por eso estamos trabajando todo con la consola.

//Lo primero que hay que hacer es agregar XMLHttppRequest a nuestro proyecto para poder
//usarlo en la terminal ejecutando el comando npm install xmlhttprequest --save


let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

//fetch es una implementacion de ECMASCRIPT 6 en adelante pero el ya utiliza promesas y 
//y como estamos trabajando con callbacks se esta haciendo como se hacia anteriormente
function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', url_api, true);///el ultimo valor siempre sera true el cual activa el asincronismo 
    //en xmlhttprequest
    xhttp.onreadystatechange = function (event){
        //la conexion tiene 5 fases, de la 0 a la 4. Utilizamos 4 porque nos indica que el proceso ya se completo
        if(xhttp.readyState === 4) {
            //ahora, nos interesa verificar que el status sea 200 ya que indica que el requesr fue exitoso
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText))
            }  else{
                //usamos el else para verificar si hubo un error, es una buena practica en programacion
                const error = new Error('Error'+ url_api )
                //en caso de estar trabajando con varias Apis es importante aclarar cual mando el error
                return callback(error, null)
            }
        }
    }

    xhttp.send() // finalmente, enviamos la solicitud
}

//A esta funcion se le pasa por parametros la url de la API, y el segundo es el callback a ejecutar el cual es una funcion que recibe 
//los dos valores, el primero es el error y el segundo los datos resultantes de la peticion a ejecutar

//Con callbacks se pueden hacer multiples peticiones a una Api 
fetchData(API, (error1, data1) => {
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, (error2, data2) => {
        if (error2) return console.error(error2)
        fetchData(data2.origin.url, (error3, data3) => {
            if (error3) return console.error(error3)
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
})
 