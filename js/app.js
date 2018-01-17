$(document).ready(function() {
  var pelisSection = $('#peliculas');
  var buttonSearch = $('#button-search');

  buttonSearch.on('click', function() {
    $('#peliculas').empty();
    var inputMovie = $('#pelis-input').val();
    // var url = 'http://www.omdbapi.com/?s=' + inputMovie + '&apikey=cde77cc6';
    // console.log(url);
    $.getJSON('https://www.omdbapi.com/?s=' + inputMovie + '&apikey=cde77cc6').then(function(response) {
      console.log(response);
      for (var m in response.Search) {
        var movie = response.Search[m];
        var posterMovie = movie.Poster;
        var idMovie = movie.imdbID;
        if (posterMovie === 'N/A') {
          posterMovie = 'assets/images/no-photo.jpg';
        }
        var divMovie = $('<div class="left border">');
        var imgPoster = $('<img src="' + posterMovie + '" width= 70px data-id ="' + idMovie + '">');
        divMovie.append(movie.Title);
        divMovie.append(imgPoster);
        $('#peliculas').append(divMovie);
      }

      $('#peliculas div img').on('click', function() {
        $('#click-movie').empty();
        var dataIdMovie = $(this).data('id');
        alert(dataIdMovie);
        $.getJSON('https://www.omdbapi.com/?i=' + dataIdMovie + '&page=2&apikey=cde77cc6').then(function(response) {
          var mTitle = response.Title;
          var mPoster = $('<div><img  src="' + response.Poster + '"height=120px width= 70px data-id ="' + idMovie + '"></div>');
          var mPlot = response.Plot;
          var newDiv = $('<div>');
          newDiv.append(mTitle);
          newDiv.append(mPoster);
          newDiv.append(mPlot);
          $('#click-movie').append(newDiv);
        });
      });
    // para las paginas siguientes
    // $.getJSON('http://www.omdbapi.com/?s=' + inputMovie + '&page=2&apikey=cde77cc6').then(function(responseJ) {
    // console.log(responseJ);
    });
  });
});
