$(document).ready(function() {
   var pelisSection = $('#peliculas');
    $('#peliculas').empty();
    var inputMovie = window.localStorage.getItem('character');
    // var url = 'http://www.omdbapi.com/?s=' + inputMovie + '&apikey=cde77cc6';
    // console.log(url);
    $.getJSON('https://www.omdbapi.com/?s=' + inputMovie + '&apikey=cde77cc6').then(function(response) {
      console.log(response);
      for (var m in response.Search) {
        var movie = response.Search[m];
        var idMovie = movie.imdbID;
        var dontShow = ['tt1830911','tt0080745','tt3623726','tt0091306','tt1054588','tt0959086','tt0027623','tt0073639']
        var centinel = false
        for (var j = 0; j < dontShow.length; j++) {
          if(idMovie === dontShow[j]) {
            centinel = true;
          }
        }
        if(centinel === false) {
          if (posterMovie === 'N/A') {
            posterMovie = 'assets/images/no-photo.jpg';
          }
          var posterMovie = movie.Poster;
          var divMovie = $('<div class="left border"></div>');
          var imgPoster = $('<img src="' + posterMovie + '" width= 70px data-id ="' + idMovie + '">');
          divMovie.append(movie.Title);
          divMovie.append(imgPoster);
          $('#peliculas').append(divMovie);
        }
      }


      $('#peliculas div img').on('click', function() {
        // $('#modal-content').empty();
        var dataIdMovie = $(this).data('id');
        window.localStorage.setItem('idMovie', dataIdMovie);
        window.location.href = '../views/DCshowing.html';
        // alert(dataIdMovie);
      });

      // $('#modal1').modal('open');
    // para las paginas siguientes
    // $.getJSON('http://www.omdbapi.com/?s=' + inputMovie + '&page=2&apikey=cde77cc6').then(function(responseJ) {
    // console.log(responseJ);
    });
});
