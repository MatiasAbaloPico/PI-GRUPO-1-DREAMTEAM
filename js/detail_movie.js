let apiKey  = '8b6eae301b66732ee0ec9cb7d499ade8';
let det_mov = `https://api.themoviedb.org/3/movie/${ai}}?api_key=${apiKey}`
let hola    = location.search;
let chau    = new URLSearchParams(hola);
let ai      = chau.get("id")

fetch(det_mov)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {

        console.log(data)
    })
    .catch(function(error) {
        console.log(error)
    })