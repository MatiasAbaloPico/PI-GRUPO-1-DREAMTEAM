let params = new URLSearchParams(location.search);
let variableId = params.get('id');
let nombreGenero = params.get('genrename')

let apiKey = '8b6eae301b66732ee0ec9cb7d499ade8';
let generosPeliculas = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${variableId}`;
let generosSeries = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=${variableId}`;

let serGen = document.querySelector(".serGen")
let movGen = document.querySelector('.movGen')
let generoElegido = document.querySelector(".titulo")

generoElegido.innerText = `Genero: ${nombreGenero} `

fetch(generosPeliculas)
    .then(response => response.json())

    .then(data => {

        for (let i = 0; i < 5; i++) {
            let pelicula = data.results[i].title
            let pic = data.results[i].poster_path
            movGen.innerHTML +=
            `<div class="movGen">
            <a href="./detail-movie.html?id=${data.results[i].id}"><img class = 'fotos' src="https://image.tmdb.org/t/p/w500${pic}"></a>
            <h3 class="pelicula1">${pelicula}</h3>
            </div>`
        }
        console.log(data)
    })

    .catch(function (error) {
        console.log(error)
    });

    fetch(generosSeries)
    .then(response => response.json())

    .then(data => {

        for (let i = 0; i < 5; i++) {
            let pelicula = data.results[i].name
            let pic = data.results[i].poster_path
            serGen.innerHTML +=
            `<div class="serGen">
            <a href="./detail-serie.html?id=${data.results[i].id}"><img class = 'fotos' src="https://image.tmdb.org/t/p/w500${pic}"></a>
            <h3 class="pelicula1">${pelicula}</h3>
            </div>`
        }
        console.log(data)
    })

    .catch(function (error) {
        console.log(error)
    });