$(document).ready(function() {
  $('#movie-details').empty();
  // var $index = $(this).attr('data-idMovie');
  var $index = localStorage.idMovieM;
  console.log($index);
  $.getJSON('https://www.omdbapi.com/?i=' + $index + '&page=2&apikey=cde77cc6').then(function(response) {
    var movie = response;
    var output = `
      <div class="row">
        <div class="col s12 m4 l4">
          <img src="${movie.Poster}" class="thumbnail">
        </div>
        <div class="col s12 m8 l8">
          <h2>${movie.Title}</h2>
          <ul class="list-group">
            <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
            <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
            <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
            <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
            <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
            <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
            <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="well">
          <h3>Plot</h3>
          ${movie.Plot}
          <hr>
          <a href="../views/marvel-home.html" class="btn btn-default btn-black">Go Back To Search</a>
        </div>
      </div>
    `;

    $('#movie-details').html(output); 
  });
});