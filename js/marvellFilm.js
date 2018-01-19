$(document).ready(function() {
  var $containerMovie = $('#movies');
  // Elimina todos los nodos secundarios del elemento seleccionado  
  $('#movies').empty();

  var selectMovie = localStorage.characterM;
  // var selectMovie = window.localStorage.getItem('characterM');
  // Metodo que permite hacer una peticion a un url y espera recibir un objeto json 
  $.getJSON('https://www.omdbapi.com/?s=' + selectMovie + '&apikey=cde77cc6').then(function(response) {
    console.log(response);
    var output = ' ';
    // Itera sobre las propiedades del objeto devuelto
    for (var m in response.Search) {
      var movie = response.Search[m];
      console.log(response.Search[m]);
      var posterMovie = movie.Poster;
      var idMovie = movie.imdbID;
      var dontShow = ['tt0371746', 'tt1228705', 'tt3623726', 'tt1300854', 'tt0800369', 'tt3501632', 'tt6016776', 'tt6599818','tt0458339','tt1843866','tt3498820'];
      var centinel = false;
      for (var j = 0; j < dontShow.length; j++) {
        if (idMovie === dontShow[j]) {
          centinel = true;
        }
      }
      if (centinel === false) {
        if (posterMovie === 'N/A') {
          posterMovie = 'assets/images/no-photo.jpg';
        }
        output += `           
          <div class="col s12 l4">
            <div class="card text-center well grey lighten-3">
              <img onclick="movieSelected('${movie.imdbID}')" src="${movie.Poster}" data-idMovie="${movie.imdbID}">
              <h5>${movie.Title}</h5>
            </div>
          </div>        
          `;
      }
    };
    $('#movies').html(output);
  });
});
// Funcion que me permite almacenar el id de la pelicula y redireccionar a la siguiente vista
function movieSelected(id) {
  localStorage.idMovieM = id;
  /* console.log(localStorage.idMovieM); */
  $(location).attr('href', '../views/marvel-details.html');
  return false;
}