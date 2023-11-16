let params = new URLSearchParams(location.search);
let id_pelicula = params.get('id');

let apiKey = '8b6eae301b66732ee0ec9cb7d499ade8';
let url = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${apiKey}`

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
    })
    .catch(function(error) {
        console.log(error)
    })