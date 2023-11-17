let params = new URLSearchParams(location.search);
let id_serie = params.get('id');

let apiKey = '8b6eae301b66732ee0ec9cb7d499ade8';
let url = `https://api.themoviedb.org/3/tv/${id_serie}?api_key=${apiKey}`

let titulo = document.querySelector(".sertitulo_detail")
let img = document.querySelector("#imgdetails")
let infoSer = document.querySelector(".infoser")
let emision = document.querySelector('.listageneroserie')
let temp = document.querySelector('.listageneros')
let rating = document.querySelector(".valoracion")

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
       
    let pic = data.poster_path    
    let imagen = `https://image.tmdb.org/t/p/original/${pic}`
    let fecha = data.first_air_date
    let temporadas = data.number_of_seasons
    let valoracion = data.vote_average

        titulo.innerText = data.name
        img.src = imagen
        infoSer.innerText = data.overview 
        emision.innerText = `En emision desde: ${fecha}`
        temp.innerText = `Temporadas: ${temporadas}`
        rating.innerText = `Valoracion: ${valoracion}/10`
       
       
        console.log(data)
    })
    .catch(function(error) {
        console.log(error)
    })