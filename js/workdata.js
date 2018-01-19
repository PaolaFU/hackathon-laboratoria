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
      img.attr('src',Photo);
      img.attr('class', 'offset-s3 offset-l3 col s6 l6')
      var textPhoto = value2.texto; // me da el texto para el carrusel
      $('#m').append(img);
      for (var i = 0; i < Photo.length; i++){
        var x = Photo.length[i];
      }
    });
  });
});

  /*
  //recorriendo data creada DC
  $.each(dc, function(key, value){
    var nameSuperHero = key;
    var information = value;
    var probando = information.FotosSuperman;
    //recorriendo la data, para obtener fotos para el carrusel
    $.each(probando, function(key2,value2){
      var div = $('<div>')
      var img = $('<img>');
      var Photo = value2.img; //me da la foto para el carrusel
      img.attr('src',Photo);
      img.attr('class','img-carrusel')
      div.attr('class','frame-k');
      var textPhoto = value2.texto; // me da el texto para el carrusel
      var x = div.append(img);
      $('#slider-k').append(x);
      for (var i = 0; i < Photo.length; i++){
        var x = Photo.length[i];
      }
    });

  });*/
