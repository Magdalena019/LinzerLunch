function random() {
  let random = $('#random');
  let category = "";

  /*$('#iconRestaurant').click(function() {
    //$('input:checkbox').prop('checked', false);
    $('div#checkicons').fadeTo(1000, 1.0);
    $('#hits').addClass('hide');
  });

  $('#iconRestaurant').change(function() {
    $('#search').val($('input[name=category]:checked', '#iconRestaurant').val());
    $('input:checkbox').prop('checked', false);
    $('#hits').addClass('hide');
    $('#checkicons input[type=checkbox] +div').removeClass('checked');
    setSettings();
    startSearch();
  });*/

  $('#iconRandom').change(function() {
    category = $('input[name=randomCategory]:checked', '#iconRandom').val();
  });

  //$('#searchRandom').click(function() {
  $('#iconRandom').click(function() {


    $.ajax({
      url: 'algolia/getRandom.php',
      type: 'POST',
      dataType: 'json',

      data: {
        search: category
      },

      success: function(data) {
        //TODO: hier dem template die werte zuweisen
        random.text(data["name"] + " " + data["info"]);
      }
    });

  });
}

$(document).ready(random);
