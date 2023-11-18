let apiKey = "bfec0622d489778cd408f2f5942ce52d";
let generosPeliculas = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
let generosSeries = `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`;

// Películas
fetch(generosPeliculas)
.then(response => response.json())
.then(data => {
    console.log(data)
    let pelisContainer = document.getElementById("peliculas-container");
    let contenido = "";
    for(let i = 0; i < 5; i++){
        contenido += `<a href="./detail-genres.html?id=${data.genres[i].id}&genrename=${data.genres[i].name}">
                          <button class="butt">${data.genres[i].name}</button>
                      </a>`;
    }
    pelisContainer.innerHTML = contenido;
})
.catch(function(error) {
    console.log(error)
})

// Series
fetch(generosSeries)
.then(response => response.json())
.then(data => {
    let seriesContainer = document.getElementById("series-container"); 
    let contenido = "";
    for(let i = 0; i < 5; i++){
        contenido += `<a href="./detail-genres.html?id=${data.genres[i].id}&genrename=${data.genres[i].name}">
                          <button class="butt">${data.genres[i].name}</button>
                      </a>`;
    }
    seriesContainer.innerHTML = contenido;
})
.catch(function(error) {
    console.log(error)
})

