
let searchResultsElement = document.querySelector(".search-results");

let queryString = location.search;
let url = new URLSearchParams(queryString);

let informacion= url.get('q')
console.log(informacion);


fetch (`https://rickandmortyapi.com/api/character/?name=${informacion}`)
    .then(function(res){
        return res.json()
    })
    
    .then (function(data){
        console.log(data);

        for (i=0; i<data.results.length; i++){
            let datos= data.results[i];
            searchResultsElement.innerHTML += `
            <article>
                <img src="${datos.image}" alt='${datos.name}'>
                <p>Name: ${datos.name}</p>
                <p>Status: ${datos.status}</p>
            </article>`
        }
    })
    .catch (function(err){
        console.log(err);
    })