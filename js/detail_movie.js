let params = new URLSearchParams(location.search);
let id_pelicula = params.get('id');

let apiKey = '8b6eae301b66732ee0ec9cb7d499ade8';
let url = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${apiKey}`
let titulo = document.querySelector(".titulo_detail")
let fto = document.querySelector("#imgdetails")
let anoo = document.querySelector(".listageneros1")
let ano = document.querySelector(".listageneros0")
let txt = document.querySelector(".infomov")
let rtg = document.querySelector("#rating")
let gen = document.querySelector(".infoduracion1")
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        titulo.innerText = data.original_title;
        let pos = data.poster_path;
        let pas = `https://image.tmdb.org/t/p/w500${pos}`
        fto.src = pas
        let fech = data.release_date
        let dur = data.runtime
        let txta = data.overview
        let rtng = data.vote_average
        ano.innerText = fech
        anoo.innerText = `${dur} minutos`
        txt.innerText =  txta
        rtg.innerText = `Valoracion: ${rtng}/10`
        for (let i = 0; i < data.genres.length; i++){
            let genero = data.genres[i].name
            gen.innerHTML += `<ul class="infoduracion">
            <a href="./detail-genres.html?id=${data.genres[i].id}&genrename=${data.genres[i].name}">
                            <li class="listageneros">${genero}</li>
            </a>
        </ul>`


        }
        console.log(data)
    })
    .catch(function(error) {
        console.log(error)
    })