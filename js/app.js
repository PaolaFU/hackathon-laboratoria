$(document).ready(function() {
<<<<<<< HEAD
  // Inicializando, el menú select de materialize
  $('select').material_select();
  // Inicializando, el carrusel de materialize
  $('.carousel').carousel();
  // Inicializando, el slider select de materialize
  $('.slider').slider();
 
=======
  //Inicializando, el menú select de materialize
  $('select').material_select();
  //Inicializando, el carrusel de materialize
  $('.carousel').carousel();
  //Inicializando, el slider select de materialize
  $('.slider').slider();



>>>>>>> d03606bb72374291ceb30575d2335407282e672f
  $('#select-character').on('change', function() {
    var character = $('#select-character').val();
    window.localStorage.setItem('character', character);
    window.location.href = '../views/DCfilme.html';
  });
<<<<<<< HEAD
  /* Funcionalidad para la vista Marvell-Home */
  // Seleccionamos el elmento del DOM 'select'
  var $selectCharacterM = $('#select-character-m');
  // Obteniendo el valor de las opciones
  $selectCharacterM.on('change',function() {
    var $valueCharacter=$selectCharacterM.val();
    // Almacena el valor de la opcion elegida
    localStorage.characterM=$valueCharacter;
    //window.localStorage.setItem('characterM', $valueCharacter);
    console.log(localStorage.characterM);
    // Redirecciona a la siguiente vista 
    $(location).attr('href', '../views/marvel-personaje.html');
  });

=======
>>>>>>> d03606bb72374291ceb30575d2335407282e672f
});
