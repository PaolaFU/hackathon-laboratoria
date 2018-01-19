$(document).ready(function() {
  $('movie-detail').empty();
  var idMovie = window.localStorage.getItem('idMovie');
  $.getJSON('https://www.omdbapi.com/?i=' + idMovie + '&page=2&apikey=cde77cc6').then(function(response) {
    var mTitle = $('<div class="style-title">' + response.Title +'<div/>');
    var mPoster = $('<div><img class="col l4"  src="' + response.Poster + '" data-id ="' + idMovie + '"></div>');
    var mPlot = 'Sinopsis: ' + response.Plot;
    var mYear = 'Año: ' + response.Year;
    var mDirector = 'Director: ' + response.Director;
    var mReleased = 'Lanzamiento: ' + response.Released;
    var mProduction = 'Production: ' + response.Production;
    var mValue = 'Rating: ' + response.imdbRating;
    var newDiv = $('<div>');
    newDiv.attr('class','cont-inf-film col l10')
    var infoDiv = $('<div>');
    var brSpace = $('<br>');
    var brSpace1 = $('<br>');
    var brSpace2 = $('<br>');
    var brSpace3 = $('<br>');
    infoDiv.append(mYear);
    infoDiv.append(brSpace);
    infoDiv.append(mDirector);
    infoDiv.append(brSpace1);
    infoDiv.append(mReleased);
    infoDiv.append(brSpace2);
    infoDiv.append(mProduction);
    infoDiv.append(brSpace3);
    infoDiv.append(mValue);
    newDiv.append(mTitle);
    newDiv.append(mPoster);
    newDiv.append(mPlot);
    newDiv.append(infoDiv);
    // alert(mPlot);
    $('#movie-detail').append(newDiv);
  });
});
