$(window).on('load', function() {
 var inputMovie = window.localStorage.getItem('character');
   for (var i = 0; i < personajes.length; i++) {
     if (personajes[i]['name'] === inputMovie) {
       console.log('igualesss');
       var character = personajes[i]['photo'];
       // console.log(character);
       for (var j = 0; j < character.length; j++) {
         // var fotoCharacter = character[j]
         var img = character[j];
         $('#m').append(img);
       }
     }
   }
   $(document).ready(function() {
    var imgs = $('#m > img');
    var len = imgs.length;

    var img = new Array();

    for (var i=0; i<len ; i++){
     var j = '#m img:nth-child('+(i+1)+')';
      img[i] =  $(j);
    }

    function anim(i) {
     var j = (i+len)%len;
     img[j].animate({"opacity":"1"}, {
       duration: 3000,
       complete: function (){
         img[j].animate({"opacity":"0"},3000);
         anim(i+1);
       }
     });
    }

    anim(0);
    });

});
