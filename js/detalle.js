console.log(location.search);
let queryString= location.search

let queryStringObj= new URLSearchParams(queryString);

let charId=queryStringObj.get('id')

console.log(charId);

fetch(`https://rickandmortyapi.com/api/character/${charId}`)
    .then(function(res){
        return res.json()
    })
    .then (function(data){
        console.log(data);
        let name= document.querySelector (".nombre")
        name.innerText=data.name;
        let stat = document.querySelector(".estado");
        stat.innerText += data.status;
        let imagen = document.querySelector("img");
        imagen.src = data.image;
        let especie = document.querySelector(".especie");
        especie.innerText += data.species;
    })



    .catch (function(err){
        console.log(err);
    })