///A partir de ahora se usa ECMASCRIPT 6 

//retornara  una promesa
const somethingWillHappen = () =>{
    
    //creamos el new promise y le pasamos dos argumentos si se resuelve la peticion seria resolve 
    // y si rechaza seria reject, luuego se hcae la arrow function que va a tener la validacion
    return new Promise((resolve,reject) => {
        if (true){
            resolve('Hey! we did it')
        } else{
            reject('Whoops!')
        }
    })
}

///Toda promesa tiene una funcion then y catch que hay que pasarle una funcion como parametro a ver que se va 
//a ejecutar
somethingWillHappen()
.then(response => {
    console.log(response)
}).catch(err => {console.error(err)})

const somethingWillHappen2 = () => {
    return new Promise((resolve,reject) => {
        if(true){
            setTimeout (() => {
                resolve('True')
            }, 2000)
        } else {
            const error = new Error ('Something new happn');
            reject(error)
        }
    })
}

somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.log(err))

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log('Arrays of results', response)
})
.catch(err => {
    console.log(err)
})