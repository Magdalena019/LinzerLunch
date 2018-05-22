$(document).ready(function() {

  $('#search').keydown(function() {
    //return false;
  });

  $('#iconRestaurant').on('change', function() {
    $('#search').val($('input[name=category]:checked', '#iconRestaurant').val() + " ");
    jQuery.event.trigger({ type : 'keypress', which : character.charCodeAt(0) });
  });

});
