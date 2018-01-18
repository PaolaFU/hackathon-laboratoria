$(document).ready(function() {
  //recorriendo data creada DC
  $.each(dc, function(key, value){
    var nameSuperHero = key;
    var information = value;
    var probando = information.Fotos;
    //recorriendo la data, para obtener fotos para el carrusel
    $.each(probando, function(key2,value2){
      var img = $('<img>');
      var Photo = value2.img; //me da la foto para el carrusel
      console.log(Photo);
      img.attr('src',Photo);
      var textPhoto = value2.texto; // me da el texto para el carrusel
      $('#cont-img').append(img);
      for (var i = 0; i < Photo.length; i++){
        var x = Photo.length[i];

      }

    });

  });
});
