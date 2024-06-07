fetch ("https://rickandmortyapi.com/api/character")

    .then (function(response){
        return response.json()
    })

    .then (function (data){
        console.log(data);
        let section= document.querySelector (".characterList")
        let personajesRecorridos= "" 

        for (let i=0; i<data.results.length; i++){
        let char= data.results[i];
        personajesRecorridos+= ` <article class= "characters">
                              <img src="${char.image}" alt='${char.name}'>
                                <a href="./detalle.html?id=${char.id}"> 
                                    <p>Name: ${char.name}</p>
                                </a>
                                <p>Status: ${char.status} </p>
                                </article>
                                `;
        }
         section.innerHTML= personajesRecorridos
    })

    .catch (function (error){
        console.log("error"+ error);
    })