$(document).ready(function() {
  //recorriendo data creada DC
  $.each(dc, function(key, value){
    var nameSuperHero = key;
    var information = value;
    var probando = information.Fotos;
    //recorriendo la data, para obtener fotos para el carrusel
    $.each(probando, function(key2,value2){
      var div = $('<div>')
      var img = $('<img>');
      var Photo = value2.img; //me da la foto para el carrusel
      img.attr('src',Photo);
      div.attr('class','frame-k');
      var textPhoto = value2.texto; // me da el texto para el carrusel
      var x = div.append(img);
      $('#slider-k').append(x);
      for (var i = 0; i < Photo.length; i++){
        var x = Photo.length[i];
      }
    });

  });
});
