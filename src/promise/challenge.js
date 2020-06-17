const fetchData = require('../utils/fechData');
const API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
.then(
    data => {
        console.log(data.info.count)
        return fetchData(`${API}${data.results[0].id}`)
    }).then(data2 => {

        console.log(data2.name)
        return fetchData(data2.origin.url)
    }).then(data3 => {
        console.log(
            data3.dimension
        )
    }).catch(err => console.log(err))