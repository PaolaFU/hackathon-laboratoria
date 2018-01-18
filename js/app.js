$(document).ready(function() {
  // Inicializando, el menú select de materialize
  $('select').material_select();
  // Inicializando, el carrusel de materialize
  $('.carousel').carousel();
  // Inicializando, el slider select de materialize
  $('.slider').slider();

  $('#select-character').on('change', function() {
    var character = $('#select-character').val();
    window.localStorage.setItem('character', character);
    window.location.href = '../views/DCfilme.html';
  });
});
