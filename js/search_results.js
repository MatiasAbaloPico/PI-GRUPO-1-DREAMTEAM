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

            for (let i = 0; i < 4; i++) { // 4 representa la cantidad de elementos a mostrar. Alternativa: mostrar todos = arrayResultados.length
                if (type == "movie") {
                    listadoElementos.innerHTML += `
                        <li>
                            <a href="detail-movie.html?id=${arrayResultados[i].id}">${arrayResultados[i].title}</a>
                        </li>
                    `
                } else {
                    listadoElementos.innerHTML += `
                        <li>
                            <a href="detail-tv.html?id=${arrayResultados[i].id}">${arrayResultados[i].name}</a>
                        </li>
                    `
                }
            }

        }
    })
    .catch(function(error) {
        console.log(error)
    })