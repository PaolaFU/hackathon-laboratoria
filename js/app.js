$(document).ready(function() {
   /* Funcionalidad para la primera vista */
  // Declarando variable para el filtrado posterior
  /* var tags = '';
  // Declarando variables para acceder a los elementos del DOM
  var $btnMarvell = $('#button-marvel');
  var $btnDC = $('#button-dc');
  // Redireccionar a la siguiente pagina
  $btnMarvell.on('click', function() {
    $(location).attr('href', 'views/marvel.html');
    tags = 'marvell';
  });
  $btnDC.on('click', function() {
    $(location).attr('href', 'views/marvel.html');
    tags = 'dc';
  }); */
  	// array para la lista de autocompletar
    $('#searchForm').on('submit', (e) => {
      let searchText = $('#searchText').val();
      getMovies(searchText);
      e.preventDefault();
    });
    var $search = $('#input-search');
    // implementando plugin autocomplete
    // array para la lista de autocompletar
      var tagsSuperHeroMarvell = ['iron man','captain america','avengers','x-men','the incredible hulk','hulk','ant-man','doctor strange','deadpool'];
    var tagsSuperHeroDC =['superman','batman','flash','women woman'];
    
    //
    $('#searchText').autocomplete({
    source: tagsSuperHeroMarvell 
    
    });
});	