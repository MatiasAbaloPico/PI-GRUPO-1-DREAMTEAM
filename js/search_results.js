let params = new URLSearchParams(location.search);
let search = params.get('q');
let type = params.get('type');

let apiKey = '8b6eae301b66732ee0ec9cb7d499ade8';
let url = `https://api.themoviedb.org/3/search/${type}?query=${search}&api_key=${apiKey}`

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        arrayResultados = data.results;

        console.log(arrayResultados);

        let resultados = document.querySelector('.notificacion');
        let listadoElementos = document.querySelector('.listado-elementos');

        if (arrayResultados.length == 0) {
            resultados.innerText = "No se encontraron resultados para: " + search.toString();
        } else {
            resultados.innerText = "Resultados para: " + search.toString();

            for (let i = 0; i < 5; i++) { // 4 representa la cantidad de elementos a mostrar. Alternativa: mostrar todos = arrayResultados.length
                if (type == "movie") {
                    let pelicula = arrayResultados[i].title
                    let pic = arrayResultados[i].poster_path
                    let fecha = arrayResultados[i].release_date
                    listadoElementos.innerHTML += `
                        <li>
                        <a href="./detail-movie.html?id=${arrayResultados[i].id}"><img class = 'imgBuscador' src="https://image.tmdb.org/t/p/w500${pic}"></a>
                        </li>
                    `
                } else {
                    let pic = arrayResultados[i].poster_path
                    listadoElementos.innerHTML += `
                        <li>
                            <a href="detail-serie.html?id=${arrayResultados[i].id}"><img class = 'imgBuscador' src="https://image.tmdb.org/t/p/w500${pic}"</a>
                        </li>
                    `
                }
            }

        }
    })
    .catch(function(error) {
        console.log(error)
    })