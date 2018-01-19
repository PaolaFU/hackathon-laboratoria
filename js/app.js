$(document).ready(function() {
  //Inicializando, el menú select de materialize
  $('select').material_select();
  //Inicializando, el carrusel de materialize
  $('.carousel').carousel();
  //Inicializando, el slider select de materialize
  $('.slider').slider();



  $('#select-character').on('change', function() {
    var character = $('#select-character').val();
    window.localStorage.setItem('character', character);
    window.location.href = '../views/DCfilme.html';
  });
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

});
