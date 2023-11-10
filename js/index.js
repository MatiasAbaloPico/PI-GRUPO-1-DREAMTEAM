apiKey = '8b6eae301b66732ee0ec9cb7d499ade8'
let bestRated =  `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`

let fotos = document.querySelector('.fotos')
let peliculaNombre = document.querySelector('.pelicula1')




fetch(bestRated)
.then(function(response){
    return response.json();
})

.then(function(data){

    let pelicula = data.results[0]
    peliculaNombre.innerText = pelicula.title



    console.log(data)
    return data;
})


.catch(function(error) {
    console.log(error);
        
        
        
    return error;
});