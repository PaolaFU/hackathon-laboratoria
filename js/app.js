
$(document).ready(function() {
  /* Funcionalidad para la primera vista */
  // Declarando variable para el filtrado posterior
  var tags = '';
  
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
  });
  
});	