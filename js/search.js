$(document).ready(function() {
  $('input.autocomplete').autocomplete({
    data: {
      'thor': null,
      'Microsoft': null,
      'Google': 'http://placehold.it/250x250'
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: null,
  });

  var $value = $('#autocomplete-input').val();
  console.log($value);
 
});	