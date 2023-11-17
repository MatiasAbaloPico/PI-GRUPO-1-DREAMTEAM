apiKey = '8b6eae301b66732ee0ec9cb7d499ade8'
let bestRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
let popSer = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`
let generos = `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`

let fotos = document.querySelectorAll('.fotos')
let peliculaNombre = document.querySelector('.pelicula1')




fetch(bestRated)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        for (let i = 0; i < 5; i++) {
            let pelicula = data.results[i].title
            let pic = data.results[i].poster_path
            let fecha = data.results[i].release_date
            fotos[0].innerHTML +=
                `<div class="foto">
    <h3 class="pelicula1">(${fecha})</h3>
    <a href="./detail-movie.html?id=${data.results[i].id}"><img class = 'fotos' src="https://image.tmdb.org/t/p/w500${pic}"></a>
    <h3 class="pelicula1">${pelicula}</h3>
    </div>`
        }


        console.log(data)
        return data;
    })


fetch(popSer)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        for (let i = 0; i < 5; i++) {

            let serie = data.results[i].name
            let pic = data.results[i].poster_path
            let fecha = data.results[i].first_air_date
            fotos[1].innerHTML +=
                `<div class="foto">
    <h3 class="pelicula1">(${fecha})</h3>
    <a href="detail-serie.html?id=${data.results[i].id}"><img class = 'fotos' src="https://image.tmdb.org/t/p/w500${pic}"></a>
    <h3 class="pelicula1">${serie}</h3>
    </div>`
        }


        console.log(data)
        return data;
    })

fetch(popSer)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        for (let i = 5; i < 10; i++) {
            let serie = data.results[i].name
            let pos = data.results[i].poster_path
            let fecha = data.results[i].first_air_date
            fotos[2].innerHTML +=
                `<div class="foto">
    <h3 class="pelicula1">(${fecha})</h3>
    <a href="./detail-movie.html"><img class = 'fotos' src="https://image.tmdb.org/t/p/w500${pos}"></a>
    <h3 class="pelicula1">${serie}</h3>
    </div>`
        }


        console.log(data)
        return data;
    })




fetch(bestRated)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        for (let i = 5; i < 10; i++) {
            let pelicula = data.results[i].title
            let pic = data.results[i].poster_path
            let fecha = data.results[i].release_date
            fotos[3].innerHTML +=
                `<div class="foto">
    <h3 class="pelicula1">(${fecha})</h3>
    <a href="./detail-movie.html"><img class = 'fotos' src="https://image.tmdb.org/t/p/w500${pic}"></a>
    <h3 class="pelicula1">${pelicula}</h3>
    </div>`
        }


        console.log(data)
        return data;
    })


fetch(bestRated)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        for (let i = 10; i < 15; i++) {
            let pelicula = data.results[i].title
            let pic = data.results[i].poster_path
            let fecha = data.results[i].release_date
            fotos[4].innerHTML +=
                `<div class="foto">
    <h3 class="pelicula1">(${fecha})</h3>
    <a href="./detail-movie.html"><img class = 'fotos' src="https://image.tmdb.org/t/p/w500${pic}"></a>
    <h3 class="pelicula1">${pelicula}</h3>
    </div>`
        }


        console.log(data)
        return data;
    })


fetch(popSer)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        for (let i = 10; i < 15; i++) {
            let serieTod = data.results[i].name
            let pos = data.results[i].poster_path
            let fecha = data.results[i].first_air_date
            let idPelicula = data.results[i].id
            fotos[5].innerHTML +=
                `<div class="foto">
    <h3 class="pelicula1">(${fecha})</h3>
    <a href="./detail-serie.html?id=${idPelicula}"><img class = 'fotos' src="https://image.tmdb.org/t/p/w500${pos}"></a>
    <h3 class="pelicula1">${serieTod}</h3>
    </div>`
        }


        console.log(data)
        return data;
    })

    .catch(function (error) {
        console.log(error);



        return error;
    });