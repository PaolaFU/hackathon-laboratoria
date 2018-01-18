//Inicializando, el menú select de materialize
$(document).ready(function() {
    $('select').material_select();
	alert('hi');
  var $search = $('#input-search');
  //implementando plugin autocomplete
  // array para la lista de autocompletar
  var tagsSuperHero = ['thor', 'superman', 'capitan america','a'];
  //
  $search.autocomplete({
    source: tagsSuperHero
  });	

 });